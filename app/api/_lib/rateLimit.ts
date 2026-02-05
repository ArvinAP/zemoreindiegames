import { NextRequest } from 'next/server'

type RateLimitOptions = {
  limit: number
  windowMs: number
  prefix: string
}

type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number }

type Entry = {
  windowStartMs: number
  count: number
}

const store = new Map<string, Entry>()

function getClientIp(request: NextRequest) {
  const xForwardedFor = request.headers.get('x-forwarded-for')
  if (xForwardedFor) {
    const first = xForwardedFor.split(',')[0]?.trim()
    if (first) return first
  }

  const xRealIp = request.headers.get('x-real-ip')
  if (xRealIp) return xRealIp.trim()

  return 'unknown'
}

export function rateLimit(request: NextRequest, options: RateLimitOptions): RateLimitResult {
  const now = Date.now()
  const ip = getClientIp(request)
  const key = `${options.prefix}:${ip}`

  const existing = store.get(key)

  if (!existing || now - existing.windowStartMs >= options.windowMs) {
    store.set(key, { windowStartMs: now, count: 1 })
    return { allowed: true }
  }

  if (existing.count >= options.limit) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((options.windowMs - (now - existing.windowStartMs)) / 1000)
    )
    return { allowed: false, retryAfterSeconds }
  }

  existing.count += 1
  store.set(key, existing)
  return { allowed: true }
}
