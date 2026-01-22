import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'What We Do - Zemore Indie Games',
  description: 'Learn about our personalized, grassroots approach to indie game publishing - from game design to marketing and distribution.',
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Personalized Game Design',
      description: 'We work closely with developers to refine gameplay mechanics, improve user experience, and ensure your game reaches its full potential. Our hands-on approach means we\'re with you every step of the way.'
    },
    {
      id: 2,
      title: 'Playtesting & QA',
      description: 'Comprehensive testing services to identify bugs, balance gameplay, and gather valuable player feedback. We ensure your game is polished and ready for launch.'
    },
    {
      id: 3,
      title: 'Marketing & Planning',
      description: 'Strategic marketing campaigns tailored to your game\'s unique identity. From social media to press outreach, we help you build a community around your game.'
    },
    {
      id: 4,
      title: 'Publishing & Distribution',
      description: 'End-to-end publishing support across all major platforms. We handle the complexities of distribution so you can focus on creating amazing games.'
    },
    {
      id: 5,
      title: 'Community Building',
      description: 'We help you build and engage with your player community, creating lasting relationships that drive long-term success for your game.'
    },
      {
      id: 6,
      title: 'Funding & Resources',
      description: 'Access to funding opportunities and development resources to help you bring your vision to life without compromising your creative control.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0a0f1d] pt-24 pb-0 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10 space-y-16 pb-16">
        <div className="glass-panel rounded-[36px] p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">What We Do</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/85 mb-6 leading-relaxed">
              At Zemore Indie Games, we believe in a <span className="text-[var(--accent)] font-semibold">personalized, grassroots approach</span> to game publishing. 
              We're not just another publisher—we're your dedicated partners in success.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our hands-on support ensures that every game we work with receives the attention and expertise it deserves. 
              From concept to launch and beyond, we're committed to helping indie developers reach their full potential through 
              long-term partnerships built on trust and mutual success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="glass-panel rounded-[32px] p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Our Commitment</h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              We're committed to providing hands-on support that goes beyond traditional publishing. 
              Our team becomes an extension of your development process, offering insights, resources, 
              and expertise when you need them most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{ label: 'Support Availability', value: '24/7' }, { label: 'Creative Ownership', value: '100%' }, { label: 'Long-term Partnership', value: '∞' }].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <p className="text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <CTA
        title="Ready to Work Together?"
        body="Let's discuss how our personalized approach can help your game succeed. We're excited to learn about your project and explore how we can support your journey."
        primary={{ label: 'Submit Your Game', href: '/submit' }}
        secondary={{ label: 'Get in Touch', href: '/contact' }}
      />
    </main>
  )
}
