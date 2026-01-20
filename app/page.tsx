'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Gamepad2, BookOpen, Rocket, Gem } from 'lucide-react'
import ShroomwoodHero from '@/components/ShroomwoodHero'
import Games from '@/components/Games'
import WhoWeAre from '@/components/WhoWeAre'
import WhatWeDo from '@/components/WhatWeDo'
import Values from '@/components/Values'
import Community from '@/components/Community'
import CTA from '@/components/CTA'

const SectionBreak = () => (
  <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70"></div>
)

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.section-animate')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <main>
      <ShroomwoodHero />
      <SectionBreak />
      
      {/* Preview Sections */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute -left-20 top-1/3 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/25 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute -right-10 bottom-0 w-[260px] h-[260px] bg-gradient-to-tr from-cyan-400/30 via-transparent to-transparent blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass-panel rounded-[36px] p-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Explore What We Do</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover our games, learn about our story, and see how we help indie developers succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { href: '/games', Icon: Gamepad2, title: 'Our Games', body: "Explore the incredible indie games we've published", accent: 'from-purple-500 to-blue-400' },
              { href: '/about', Icon: BookOpen, title: 'Who We Are', body: 'Learn about our journey and mission', accent: 'from-blue-500 to-indigo-400' },
              { href: '/services', Icon: Rocket, title: 'What We Do', body: 'Discover our personalized publishing services', accent: 'from-cyan-400 to-emerald-400' },
              { href: '/values', Icon: Gem, title: 'Our Values', body: 'See what drives our commitment to developers', accent: 'from-teal-400 to-sky-400' },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="glass-panel rounded-[28px] p-8 border border-white/10 hover:-translate-y-1 transition duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-2xl mb-4`}>
                  <card.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-white/70">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SectionBreak />
      
      <Games />
      <SectionBreak />
      <WhoWeAre />
      <SectionBreak />
      <Community />
      <SectionBreak />
      <WhatWeDo />
      <SectionBreak />
      <Values />
      <SectionBreak />
      <section className="bg-[#04060f]">
        <CTA />
      </section>
    </main>
  )
}
