'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Facebook, Instagram } from 'lucide-react'

function BlueskyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 11.1c-1.27-1.9-4.72-6.24-7.31-8.07C2.2 1.22 1 1.64 1 3.62c0 1.98 1.13 16.59 1.8 19.03.37 1.33 1.73 1.78 3.02 1.55 2.25-.39 5.08-2.03 6.18-4.68 1.1 2.65 3.93 4.29 6.18 4.68 1.29.23 2.65-.22 3.02-1.55.67-2.44 1.8-17.05 1.8-19.03 0-1.98-1.2-2.4-3.69-.59-2.59 1.83-6.04 6.17-7.31 8.07Z"
        fill="currentColor"
      />
    </svg>
  )
}

function RedditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 12.14c0-1.33-1.07-2.4-2.4-2.4-.65 0-1.23.25-1.67.66-1.99-1.4-4.7-2.3-7.7-2.43l1.31-6.16 4.28.91a1.6 1.6 0 1 0 .16-.75l-4.72-1.01a.54.54 0 0 0-.64.42l-1.46 6.87c-3 .14-5.7 1.04-7.69 2.43a2.39 2.39 0 0 0-4.07 1.69c0 .97.58 1.8 1.4 2.18-.04.24-.06.49-.06.75 0 3.5 4.92 6.35 11 6.35S23 16.4 23 12.9c0-.26-.02-.51-.06-.75.83-.38 1.41-1.2 1.41-2.18Zm-17.14 2.2c0-.88.7-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .89-.72 1.6-1.6 1.6-.9 0-1.6-.71-1.6-1.6Zm9.86 4.15c-1.12 1.12-3.26 1.2-3.72 1.2-.46 0-2.6-.08-3.72-1.2a.54.54 0 0 1 .76-.77c.66.66 2.07.9 2.96.9.9 0 2.3-.24 2.96-.9a.54.54 0 1 1 .76.77Zm-.32-2.55c-.88 0-1.6-.71-1.6-1.6 0-.88.72-1.6 1.6-1.6.9 0 1.6.72 1.6 1.6 0 .89-.7 1.6-1.6 1.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Since this is a client component, we'll handle metadata differently
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send to Discord webhook
      const response = await fetch('https://discord.com/api/webhooks/1463925611541041258/1ZpvRPWYy-9mOVpaG0p8VNdysPbkQ4YiTPMZQhfUDw7MhbB7WO0m4-2Kxm5CrvYj6Snk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `**New Contact Form Submission**\n\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Subject:** ${formData.subject}\n**Message:**\n${formData.message}`,
          username: 'Zemore Contact Form',
          avatar_url: 'https://zemoregames.com/favicon.ico'
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      // You could show an error message here if needed
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: BlueskyIcon, label: 'Bluesky', href: 'https://bsky.app' },
    { icon: RedditIcon, label: 'Reddit', href: 'https://reddit.com' }
  ]

  return (
    <main className="min-h-screen bg-dark-bg pt-24 pb-16 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10 space-y-16">
        <div className="glass-panel rounded-[36px] p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Get in Touch</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about our publishing services? Want to discuss your game? 
            We'd love to hear from you. Send us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-panel rounded-[32px] p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-[var(--accent)]" />
              Send us a Message
            </h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-[var(--accent)]/20 border border-[var(--accent)]/50 rounded-lg text-[var(--accent)]">
                Thank you for your message! We'll get back to you within 24-48 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="submission">Game Submission</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell us about your project or ask your questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
              className="w-full bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] disabled:opacity-50 disabled:cursor-not-allowed font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel rounded-[32px] p-8">
              <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Let's Connect</h2>
              <p className="text-white/80 mb-6">
                Whether you're a developer with a game ready for publishing, or just curious about our services, 
                we're here to help. Our team is passionate about supporting indie developers and would love to 
                learn about your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">contact@zemoregames.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <p className="text-white/80 mb-6">
                Stay updated with our latest news, game releases, and developer success stories.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg border border-white/10 hover:border-[var(--accent)]/50 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent)] transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
