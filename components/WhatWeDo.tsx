import ServiceCard from './ServiceCard'
import { HeartHandshake, Gamepad2, Scale, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: HeartHandshake,
    title: 'Personalized Game Design',
    description: 'Hands-on help with game design, mechanics, and gameplay to ensure your vision reaches its full potential.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Gamepad2,
    title: 'Comprehensive Playtesting',
    description: 'Thorough playtesting and feedback loops to polish your game until it\'s the best it can possibly be.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Scale,
    title: 'Fair Revenue Sharing',
    description: 'Unlike most publishers, we ensure developers get what they deserve. No credit stealing, just fair partnerships.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Success',
    description: 'We don\'t just launch and leave. From release to profitability, we\'re invested in your long-term success.',
    color: 'from-blue-500 to-blue-600'
  }
]

export default function WhatWeDo() {
  return (
    <section id="services" className="py-28 px-6 section-animate relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute -right-32 top-1/4 w-[360px] h-[360px] bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-transparent blur-3xl"></div>
      <div className="absolute -left-20 bottom-10 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-400/25 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-panel rounded-[36px] p-10 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">What We Do</h2>
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
