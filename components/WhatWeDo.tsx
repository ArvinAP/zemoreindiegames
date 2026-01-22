import React from 'react'

const services = [
  {
    title: 'Personalized Game Design',
    description: 'Hands-on help with game design, mechanics, and gameplay to ensure your vision reaches its full potential.'
  },
  {
    title: 'Comprehensive Playtesting',
    description: 'Thorough playtesting and feedback loops to polish your game until it\'s the best it can possibly be.'
  },
  {
    title: 'Fair Revenue Sharing',
    description: 'Unlike most publishers, we ensure developers get what they deserve. No credit stealing, just fair partnerships.'
  },
  {
    title: 'Long-Term Success',
    description: 'We don\'t just launch and leave. From release to profitability, we\'re invested in your long-term success.'
  }
]

export default function WhatWeDo() {
  return (
    <section id="services" className="py-28 px-6 section-animate relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-panel rounded-[32px] p-[calc(0.8rem*1.1)] md:p-[calc(2.5rem*1.1)] max-w-4xl mx-auto scale-105 origin-top">
          <div className="text-center mb-[calc(2.5rem*1.1)]">
            <h2 className="text-[calc(2.25rem*1.1)] md:text-[calc(3rem*1.1)] font-bold mb-4 text-[var(--text-primary)]">What We Do</h2>
            <p className="text-white/80 text-[calc(1.125rem*1.1)]">
              Grassroots support that goes beyond publishing - we're your partners in success
            </p>
          </div>

          <div className="space-y-[calc(1.5rem*1.1)]">
            {services.map((service, index) => (
              <div key={index} className="card-surface p-[calc(1.5rem*1.1)] md:p-[calc(1.75rem*1.1)] text-left rounded-2xl">
                <h3 className="inline-block text-[calc(0.875rem*1.1)] font-semibold text-white px-[calc(0.75rem*1.1)] py-[calc(0.25rem*1.1)] rounded-lg bg-white/10">
                  {service.title}
                </h3>
                <p className="mt-[calc(0.75rem*1.1)] text-[calc(0.875rem*1.1)] md:text-[calc(1rem*1.1)] text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
