'use client'

import { useState } from 'react'

export default function SubmitGameForm() {
  const [formData, setFormData] = useState({
    // Media URLs
    videoUrl: '',
    screenshotUrls: [''],
    pressKitUrl: '',
    
    // Developer Information
    studioName: '',
    email: '',
    phone: '',
    location: '',
    
    // Game Information
    gameName: '',
    genre: '',
    developmentStatus: '',
    
    // Platforms
    platforms: [] as string[],
    
    // Game Description
    shortDescription: '',
    detailedDescription: '',
    
    // Publishing Needs
    publishingNeeds: [] as string[],
    additionalInfo: '',
    
    // Agreement
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateScreenshotUrl = (index: number, url: string) => {
    setFormData(prev => {
      const newScreenshotUrls = [...prev.screenshotUrls]
      newScreenshotUrls[index] = url
      return { ...prev, screenshotUrls: newScreenshotUrls }
    })
  }

  const addScreenshotUrl = () => {
    setFormData(prev => ({
      ...prev,
      screenshotUrls: [...prev.screenshotUrls, '']
    }))
  }

  const removeScreenshotUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      screenshotUrls: prev.screenshotUrls.filter((_, i) => i !== index)
    }))
  }

  const togglePlatform = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }))
  }

  const togglePublishingNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      publishingNeeds: prev.publishingNeeds.includes(need)
        ? prev.publishingNeeds.filter(n => n !== need)
        : [...prev.publishingNeeds, need]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const messageContent = `**New Game Submission**\n\n**Game Information:**\n**Title:** ${formData.gameName}\n**Genre:** ${formData.genre}\n**Development Status:** ${formData.developmentStatus}\n\n**Platforms:** ${formData.platforms.join(', ') || 'None selected'}\n\n**Game Description:**\n**Short:** ${formData.shortDescription}\n**Detailed:** ${formData.detailedDescription}\n\n**Developer Information:**\n**Studio Name:** ${formData.studioName}\n**Email:** ${formData.email}\n**Phone:** ${formData.phone}\n**Location:** ${formData.location}\n\n**Media URLs:**\n**Pitch Deck URL:** ${formData.pressKitUrl || 'Not provided'}\n**Video URL:** ${formData.videoUrl || 'Not provided'}\n**Screenshot URLs:** ${formData.screenshotUrls.filter(url => url.trim()).join(', ') || 'None provided'}\n\n**Publishing Needs:** ${formData.publishingNeeds.join(', ') || 'None selected'}\n\n**Additional Info:** ${formData.additionalInfo || 'None'}\n\n**Terms Agreed:** ${formData.agreeToTerms ? 'Yes' : 'No'}`
      
      // Split message into chunks if it's over 2000 characters
      const chunks = splitMessageIntoChunks(messageContent, 2000)
      
      // Send each chunk sequentially
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i]
        const isLastChunk = i === chunks.length - 1
        
        const response = await fetch('/api/discord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: chunk,
            username: i === 0 ? 'Zemore Game Submissions' : 'Zemore Game Submissions (continued)',
            avatar_url: 'https://zemore.games/favicon.io'
          })
        })
        
        if (!response.ok) {
          throw new Error(`Failed to send submission chunk ${i + 1}`)
        }
        
        // Add small delay between chunks to avoid rate limiting
        if (!isLastChunk) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
      
      setSubmitted(true)
      // Reset form
      setFormData({
        videoUrl: '',
        screenshotUrls: [''],
        pressKitUrl: '',
        studioName: '',
        email: '',
        phone: '',
        location: '',
        gameName: '',
        genre: '',
        developmentStatus: '',
        platforms: [],
        shortDescription: '',
        detailedDescription: '',
        publishingNeeds: [],
        additionalInfo: '',
        agreeToTerms: false,
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending submission:', error)
      // You could show an error message here if needed
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const splitMessageIntoChunks = (message: string, maxLength: number): string[] => {
    if (message.length <= maxLength) {
      return [message]
    }
    
    const chunks: string[] = []
    let currentChunk = ''
    
    // Split by lines first to preserve formatting
    const lines = message.split('\n')
    
    for (const line of lines) {
      // If adding this line would exceed the limit
      if (currentChunk.length + line.length + 1 > maxLength) {
        // If current chunk is not empty, add it to chunks
        if (currentChunk.trim()) {
          chunks.push(currentChunk.trim())
        }
        
        // If the line itself is longer than maxLength, split it
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
        // Add line to current chunk
        currentChunk += (currentChunk ? '\n' : '') + line
      }
    }
    
    // Add the last chunk if it has content
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim())
    }
    
    return chunks
  }

  return (
    <>
      {submitted && (
        <div className="mb-6 p-4 bg-[var(--accent)]/20 border border-[var(--accent)]/50 rounded-lg text-[var(--accent)] text-center">
          Thank you for your game submission! We'll review your game and get back to you within 5-7 business days.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-8">
      {/* Game Information */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Game Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="gameName" className="block text-sm text-gray-400 mb-2">
              Game Title *
            </label>
            <input
              type="text"
              id="gameName"
              required
              value={formData.gameName}
              onChange={(e) => setFormData(prev => ({ ...prev, gameName: e.target.value }))}
              className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
              placeholder="Enter your game title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="genre" className="block text-sm text-gray-400 mb-2">
                Genre *
              </label>
              <select
                id="genre"
                required
                value={formData.genre}
                onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
              >
                <option value="">Select genre</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="rpg">RPG</option>
                <option value="strategy">Strategy</option>
                <option value="simulation">Simulation</option>
                <option value="puzzle">Puzzle</option>
                <option value="platformer">Platformer</option>
                <option value="horror">Horror</option>
              </select>
            </div>

            <div>
              <label htmlFor="developmentStatus" className="block text-sm text-gray-400 mb-2">
                Development Status
              </label>
              <select
                id="developmentStatus"
                value={formData.developmentStatus}
                onChange={(e) => setFormData(prev => ({ ...prev, developmentStatus: e.target.value }))}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
              >
                <option value="">Select status</option>
                <option value="concept">Concept</option>
                <option value="prototype">Prototype</option>
                <option value="alpha">Alpha</option>
                <option value="beta">Beta</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Platforms</h2>
        
        <div className="flex flex-wrap gap-3">
          {['PC', 'Console', 'Mobile'].map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => togglePlatform(platform)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                formData.platforms.includes(platform)
                  ? 'bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)]'
                  : 'bg-dark-bg text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>
      </section>

      {/* Game Description */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Game Description</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="shortDescription" className="block text-sm text-gray-400 mb-2">
              Short Description *
            </label>
            <textarea
              id="shortDescription"
              required
              value={formData.shortDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
              rows={3}
              maxLength={280}
              className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
              placeholder="Describe your game in 280 characters..."
            />
            <p className="text-xs text-gray-500 mt-1">{formData.shortDescription.length}/280 characters</p>
          </div>

          <div>
            <label htmlFor="detailedDescription" className="block text-sm text-gray-400 mb-2">
              What makes your game unique?
            </label>
            <textarea
              id="detailedDescription"
              value={formData.detailedDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, detailedDescription: e.target.value }))}
              rows={5}
              className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-5 00 transition-colors resize-none"
              placeholder="Share what sets your game apart..."
            />
          </div>
        </div>
      </section>

      {/* Developer Information */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Developer Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="studioName" className="block text-sm text-gray-400 mb-2">
              Your Studio name
            </label>
            <input
              type="text"
              id="studioName"
              value={formData.studioName}
              onChange={(e) => setFormData(prev => ({ ...prev, studioName: e.target.value }))}
              className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
              placeholder="Enter your studio name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm text-gray-400 mb-2">
              Select your Region
            </label>
            <select
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
            >
              <option value="">Select a Region</option>
              <option value="north-america">North America</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="south-america">South America</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </section>

      {/* Media URLs */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Media URLs</h2>
        
        <div className="mb-6">
          <label htmlFor="pressKitUrl" className="block text-sm text-gray-400 mb-2">
            Pitch Deck URL
          </label>
          <input
            type="url"
            id="pressKitUrl"
            value={formData.pressKitUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, pressKitUrl: e.target.value }))}
            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="https://drive.google.com/..."
          />
          <p className="text-xs text-gray-500 mt-1">Link to your pitch deck (Google Drive, Dropbox, etc.)</p>
        </div>

        <div className="mb-6">
          <label htmlFor="videoUrl" className="block text-sm text-gray-400 mb-2">
            Gameplay Video URL
          </label>
          <input
            type="url"
            id="videoUrl"
            value={formData.videoUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, videoUrl: e.target.value }))}
            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="https://youtube.com/watch?v=..."
          />
          <p className="text-xs text-gray-500 mt-1">YouTube, Vimeo, or other video platform link</p>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Screenshot URLs</label>
          <div className="space-y-3">
            {formData.screenshotUrls.map((url, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => updateScreenshotUrl(index, e.target.value)}
                  className="flex-1 bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="Enter screenshot URL"
                />
                {formData.screenshotUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeScreenshotUrl(index)}
                    className="px-3 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addScreenshotUrl}
              className="px-4 py-2 bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30 rounded-lg hover:bg-[var(--accent)]/30 transition-colors"
            >
              Add Another Screenshot
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Direct links to screenshots (Imgur, Dropbox, etc.)</p>
        </div>
      </section>

      {/* Publishing Needs */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Publishing Needs</h2>
        
        <div className="space-y-3">
          {[
            'Publishing',
            'Marketing & Promotion',
            'Funding',
            'Distribution',
            'QA Testing',
            'Platform Negotiation'
          ].map((need) => (
            <label key={need} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.publishingNeeds.includes(need)}
                onChange={() => togglePublishingNeed(need)}
                className="w-4 h-4 rounded border-white/20 bg-dark-bg text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {need}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label htmlFor="additionalInfo" className="block text-sm text-gray-400 mb-2">
            Any additional information or questions?
          </label>
          <textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
            rows={4}
            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            placeholder="Let us know if you have any specific requirements or questions..."
          />
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-lg shadow-lg shadow-[var(--accent)]/30 transition-all hover:shadow-[var(--accent)]/50 hover:scale-105"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Your Game'}
        </button>
      </div>

      <p className="text-center text-sm text-gray-200">
        We review every submission. If your project is a good fit for Zemore, we’ll be in touch.
      </p>
    </form>
    </>
  )
}
