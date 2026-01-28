'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if consent cookie exists
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('analytics_consent='))
    
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const setConsent = (accepted: boolean) => {
    // Set consent cookie for 1 year
    document.cookie = `analytics_consent=${accepted}; max-age=31536000; path=/; sameSite=Lax`
    setShowBanner(false)
    
    // Reload page to apply consent changes
    window.location.reload()
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm flex-1">
          We use cookies to analyze website traffic and improve your experience. 
          By accepting, you consent to our use of analytics cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setConsent(false)}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            Reject Cookies
          </button>
          <button
            onClick={() => setConsent(true)}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded transition-colors"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  )
}
