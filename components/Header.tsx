'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="/images/zemore_logo.webp" 
              alt="Zemore Indie Games Logo"
              className="w-12 h-12 rounded-lg"
            />
            <span className="text-lg font-semibold">Zemore Indie Games</span>
          </Link>
          
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
            aria-controls="mobile-navigation"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/games" className="text-sm hover:text-cyan-400 transition-colors">
              Games
            </Link>
            <Link href="/about" className="text-sm hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/values" className="text-sm hover:text-cyan-400 transition-colors">
              Values
            </Link>
            <Link href="/contact" className="text-sm hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link href="/submit" className="text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Submit Game
            </Link>
          </div>
        </div>

        {mobileNavOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-4 rounded-xl border border-white/10 bg-dark-bg/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/games"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Games
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/values"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Values
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/submit"
                className="px-4 py-3 text-sm bg-purple-600 hover:bg-purple-700 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Submit Game
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
