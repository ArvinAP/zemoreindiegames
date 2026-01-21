'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'

export default function SubmitGameForm() {
  const [formData, setFormData] = useState({
    // Media Preview
    mediaFiles: [] as File[],
    screenshots: [] as File[],
    
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

  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setFormData(prev => ({
        ...prev,
        mediaFiles: [...prev.mediaFiles, ...files]
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData(prev => ({
        ...prev,
        mediaFiles: [...prev.mediaFiles, ...files]
      }))
    }
  }

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setFormData(prev => ({
        ...prev,
        screenshots: [...prev.screenshots, ...files]
      }))
    }
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      mediaFiles: prev.mediaFiles.filter((_, i) => i !== index)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your submission! This is a demo - in production, this would send your game details to our team.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Media Preview */}
      <section className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <h2 className="text-xl font-semibold mb-4">Media Preview</h2>
        
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Gameplay Video</label>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? 'border-[var(--accent)] bg-[var(--accent)]/10' : 'border-white/10 hover:border-white/20'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                <Upload className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">MP4, MOV, or AVI (max. 500MB)</p>
              </div>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="px-4 py-2 bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] rounded-lg text-sm font-medium cursor-pointer transition-colors"
              >
                Choose File
              </label>
            </div>
          </div>
          
          {formData.mediaFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.mediaFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-dark-bg rounded-lg p-3">
                  <span className="text-sm text-gray-300">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Screenshots</label>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="aspect-video bg-dark-bg rounded-lg border border-white/10 flex items-center justify-center hover:border-[var(--accent)]/50 transition-colors cursor-pointer relative overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  id={`screenshot-${num}`}
                />
                <span className="text-2xl text-gray-600">{num}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Press Alt+Shift to upload</p>
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

      {/* Terms Agreement */}
      <div className="glass-panel rounded-[32px] p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)]/70"></div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
            className="w-4 h-4 mt-1 rounded border-white/20 bg-dark-bg text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            I confirm that I own the rights/license to this game and understand that submitting this 
            form doesn't guarantee publication. By submitting, I agree to Zemore's terms of service.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-4 bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] rounded-lg font-semibold text-lg shadow-lg shadow-[var(--accent)]/30 transition-all hover:shadow-[var(--accent)]/50 hover:scale-105"
        >
          Submit Your Game
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        We'll review your submission and get back to you within 5-7 business days
      </p>
    </form>
  )
}
