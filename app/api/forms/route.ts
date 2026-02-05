import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { google } from 'googleapis'
import { rateLimit } from '../_lib/rateLimit'

type FormType = 'contact' | 'submit_game'

type ConfirmRequestBody = {
  type: FormType
  email: string
  name?: string
  subject?: string
  gameName?: string
  message?: string
  payload?: unknown
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizePrivateKey(privateKeyRaw: string) {
  const trimmed = privateKeyRaw.trim()
  const withoutWrappingQuotes =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed

  return withoutWrappingQuotes.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').trim()
}

function normalizeSheetsRange(range: string) {
  const trimmed = range.trim()
  const bangIndex = trimmed.indexOf('!')
  if (bangIndex === -1) return trimmed

  const sheetNameRaw = trimmed.slice(0, bangIndex)
  const a1Raw = trimmed.slice(bangIndex + 1)

  const sheetName =
    sheetNameRaw.startsWith("'") && sheetNameRaw.endsWith("'")
      ? sheetNameRaw
      : `'${sheetNameRaw.replace(/'/g, "''")}'`

  const a1 = /^[A-Z]+:[A-Z]+$/i.test(a1Raw) ? `A1:${a1Raw.split(':')[1]}` : a1Raw

  return `${sheetName}!${a1}`
}

function getString(value: unknown) {
  return typeof value === 'string' ? value : ''
}

function getStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter(v => typeof v === 'string') : []
}

function getBoolean(value: unknown) {
  return typeof value === 'boolean' ? value : false
}

function splitMessageIntoChunks(message: string, maxLength: number): string[] {
  if (message.length <= maxLength) return [message]

  const chunks: string[] = []
  let currentChunk = ''

  const lines = message.split('\n')

  for (const line of lines) {
    if (currentChunk.length + line.length + 1 > maxLength) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim())

      if (line.length > maxLength) {
        let remainingLine = line
        while (remainingLine.length > maxLength) {
          chunks.push(remainingLine.substring(0, maxLength))
          remainingLine = remainingLine.substring(maxLength)
        }
        currentChunk = remainingLine
      } else {
        currentChunk = line
      }
    } else {
      currentChunk += (currentChunk ? '\n' : '') + line
    }
  }

  if (currentChunk.trim()) chunks.push(currentChunk.trim())
  return chunks
}

async function sendToDiscord(body: ConfirmRequestBody) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) return

  const avatarUrl = 'https://zemore.games/favicon.ico'

  let content = ''

  if (body.type === 'contact') {
    content = `**New Contact Form Submission**\n\n**Name:** ${body.name ?? ''}\n**Email:** ${body.email}\n**Subject:** ${body.subject ?? ''}\n**Message:**\n${body.message ?? ''}`
  } else {
    const payload =
      body.payload && typeof body.payload === 'object' && !Array.isArray(body.payload)
        ? (body.payload as Record<string, unknown>)
        : {}

    const platforms = getStringArray(payload.platforms).join(', ') || 'None selected'
    const screenshotUrls = getStringArray(payload.screenshotUrls).filter(u => u.trim()).join(', ') || 'None provided'
    const publishingNeeds = getStringArray(payload.publishingNeeds).join(', ') || 'None selected'

    content = `**New Game Submission**\n\n**Game Information:**\n**Title:** ${getString(payload.gameName) || body.gameName || ''}\n**Genre:** ${getString(payload.genre)}\n**Development Status:** ${getString(payload.developmentStatus)}\n\n**Platforms:** ${platforms}\n\n**Game Description:**\n**Short:** ${getString(payload.shortDescription)}\n**Detailed:** ${getString(payload.detailedDescription)}\n\n**Developer Information:**\n**Studio Name:** ${getString(payload.studioName) || body.name || ''}\n**Email:** ${body.email}\n**Phone:** ${getString(payload.phone)}\n**Location:** ${getString(payload.location)}\n\n**Media URLs:**\n**Pitch Deck URL:** ${getString(payload.pressKitUrl) || 'Not provided'}\n**Video URL:** ${getString(payload.videoUrl) || 'Not provided'}\n**Screenshot URLs:** ${screenshotUrls}\n\n**Publishing Needs:** ${publishingNeeds}\n\n**Additional Info:** ${getString(payload.additionalInfo) || 'None'}\n\n**Terms Agreed:** ${getBoolean(payload.agreeToTerms) ? 'Yes' : 'No'}`
  }

  const chunks = splitMessageIntoChunks(content, 2000)

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    const isLastChunk = i === chunks.length - 1

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: chunk,
        username:
          body.type === 'contact'
            ? i === 0
              ? 'Zemore Contact Form'
              : 'Zemore Contact Form (continued)'
            : i === 0
              ? 'Zemore Game Submissions'
              : 'Zemore Game Submissions (continued)',
        avatar_url: avatarUrl,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send to Discord')
    }

    if (!isLastChunk) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}

async function appendToSheet(body: ConfirmRequestBody) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const rangeRaw =
    body.type === 'contact'
      ? process.env.GOOGLE_SHEETS_CONTACT_RANGE
      : process.env.GOOGLE_SHEETS_SUBMIT_GAME_RANGE

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  if (!spreadsheetId || !rangeRaw || !clientEmail || !privateKeyRaw) {
    return
  }

  const range = normalizeSheetsRange(rangeRaw)

  const privateKey = normalizePrivateKey(privateKeyRaw)

  if (!privateKey.includes('BEGIN PRIVATE KEY') || !privateKey.includes('END PRIVATE KEY')) {
    throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY format (expected PEM)')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const now = new Date().toISOString()

  const row =
    body.type === 'contact'
      ? [
          now,
          body.type,
          body.email,
          body.name ?? '',
          body.subject ?? '',
          body.message ?? '',
        ]
      : (() => {
          const payload =
            body.payload && typeof body.payload === 'object' && !Array.isArray(body.payload)
              ? (body.payload as Record<string, unknown>)
              : {}

          const videoUrl = getString(payload.videoUrl)
          const screenshotUrls = getStringArray(payload.screenshotUrls).join(', ')
          const pressKitUrl = getString(payload.pressKitUrl)

          const phone = getString(payload.phone)
          const location = getString(payload.location)

          const genre = getString(payload.genre)
          const developmentStatus = getString(payload.developmentStatus)
          const platforms = getStringArray(payload.platforms).join(', ')

          const shortDescription = getString(payload.shortDescription)
          const detailedDescription = getString(payload.detailedDescription)
          const publishingNeeds = getStringArray(payload.publishingNeeds).join(', ')
          const additionalInfo = getString(payload.additionalInfo)
          const agreeToTerms = getBoolean(payload.agreeToTerms) ? 'Yes' : 'No'

          return [
            now,
            body.type,
            body.email,
            body.name ?? '',
            body.gameName ?? '',
            genre,
            developmentStatus,
            platforms,
            pressKitUrl,
            videoUrl,
            screenshotUrls,
            phone,
            location,
            shortDescription,
            detailedDescription,
            publishingNeeds,
            additionalInfo,
            agreeToTerms,
          ]
        })()

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const limitResult = rateLimit(request, { limit: 3, windowMs: 60 * 60_000, prefix: 'forms' })
    if (!limitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait and try again.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(limitResult.retryAfterSeconds),
          },
        }
      )
    }

    const body = (await request.json()) as ConfirmRequestBody

    if (!body?.type || !body?.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const from = process.env.RESEND_FROM

    if (!resendApiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 500 })
    }

    if (!from) {
      return NextResponse.json({ error: 'RESEND_FROM not configured' }, { status: 500 })
    }

    try {
      await appendToSheet(body)
    } catch (error) {
      console.error('Google Sheets append error:', error)
    }

    try {
      await sendToDiscord(body)
    } catch (error) {
      console.error('Discord webhook error:', error)
    }

    const resend = new Resend(resendApiKey)

    const subject =
      body.type === 'contact'
        ? "We've received your message"
        : "We've received your game submission"

    const introName = body.name?.trim() ? `Hi ${body.name.trim()},` : 'Hi,'

    const extraLine =
      body.type === 'submit_game' && body.gameName?.trim()
        ? `\n\nGame: ${body.gameName.trim()}`
        : ''

    const text = `${introName}\n\nThanks for reaching out to Zemore. We’ve received your submission and our team will review it.${extraLine}\n\nIf your game aligns with what we’re looking for, we’ll be in touch.\n\n— Zemore Indie Games`

    const replyTo = process.env.RESEND_REPLY_TO

    await resend.emails.send({
      from,
      to: body.email,
      subject,
      text,
      replyTo: replyTo ? [replyTo] : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Confirmation email error:', error)
    return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 })
  }
}
