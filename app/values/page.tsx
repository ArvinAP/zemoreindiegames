import { Metadata } from 'next'
import ValueCard from '@/components/ValueCard'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Our Values - Zemore Indie Games',
  description: 'Learn about our core values: Developer-First Partnership, Hands-On Support, Creative Ownership, Long-Term Commitment, and Reaching Full Potential.',
}

export default function ValuesPage() {
  const values = [
    {
      id: 1,
      title: 'Developer-First Partnership',
      description: 'We believe in true partnerships where developers come first. Your success is our success, and we work together as equals to bring your vision to life.',
    },
    {
      id: 2,
      title: 'Hands-On Support',
      description: 'We provide personalized, hands-on support throughout your development journey. From concept to launch, we\'re with you every step of the way.',
    },
    {
      id: 3,
      title: 'Creative Ownership',
      description: 'Your creative vision remains yours. We support and enhance your ideas without compromising your artistic integrity or creative control.',
    },
    {
      id: 4,
      title: 'Long-Term Commitment',
      description: 'Our partnerships don\'t end at launch. We\'re committed to long-term success, providing ongoing support to help your game thrive.',
    },
    {
      id: 5,
      title: 'Reaching Full Potential',
      description: 'We\'re dedicated to helping every game and developer reach their full potential through expertise, resources, and unwavering support.',
    }
  ]

  return (
    <main className="page-surface min-h-screen bg-dark-bg pt-24 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute -left-20 top-32 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/25 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute -right-16 bottom-10 w-[280px] h-[280px] bg-gradient-to-tr from-cyan-400/25 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 pb-16">
        <div className="glass-panel rounded-[36px] p-10 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Our Values</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            The principles that guide everything we do at Zemore Indie Games. 
            These values aren't just words—they're the foundation of our partnerships 
            and the promise we make to every developer we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <ValueCard 
              key={value.id}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        <div className="glass-panel rounded-[32px] p-10 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Our Promise to Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">What We Stand For</h3>
                <ul className="space-y-3 text-white/75">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparency in all our dealings and partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fair revenue sharing and business practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Respect for creative vision and artistic integrity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">How We Deliver</h3>
                <ul className="space-y-3 text-white/75">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized attention for every project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert guidance from industry professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Long-term partnership beyond initial launch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <CTA
        title="Join Our Values-Driven Community"
        body="If you share our values and are looking for a publishing partner who truly cares about your success, we'd love to hear from you. Together, we can create something extraordinary."
        primary={{ label: 'Submit Your Game', href: '/submit' }}
        secondary={{ label: 'Learn More About Us', href: '/about' }}
      />
    </main>
  )
}
