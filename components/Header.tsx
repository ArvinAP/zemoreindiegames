'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
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
      </nav>
    </header>
  )
}
