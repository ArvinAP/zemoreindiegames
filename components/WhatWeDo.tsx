import ServiceCard from './ServiceCard'

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
        <div className="glass-panel rounded-[36px] p-10 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">What We Do</h2>
          <p className="text-white/80 text-lg">
            Grassroots support that goes beyond publishing - we're your partners in success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
