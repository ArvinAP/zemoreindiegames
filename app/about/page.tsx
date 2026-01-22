import { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Who We Are - Zemore Indie Games',
  description: 'Learn about Zemore Indie Games - our origins as an outsourced marketing team and our mission to help indie developers reach their full potential.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1d] pt-24 pb-0 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10 space-y-16 pb-16">
        <div className="glass-panel rounded-[36px] p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Who We Are</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our journey from marketing specialists to passionate indie game publishers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-panel rounded-[32px] p-10 space-y-6">
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Our Origins</h2>
              <p className="text-white/80 leading-relaxed">
                Zemore Indie Games began as an outsourced marketing team, helping game developers bring their creations to the attention of players worldwide. We spent years crafting compelling campaigns, building communities, and understanding what makes games truly special.
              </p>
              <p className="text-white/80 leading-relaxed">
                Through our work, we discovered a deeper calling. We saw incredible games struggling to find their audience, talented developers facing overwhelming challenges, and amazing ideas that deserved better support. We realized we could do more than just market games—we could help them succeed from concept to launch.
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-[32px] p-10 text-center">
            <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">The Transition</h3>
            <p className="text-white/80">
              In 2026, we made the leap from marketing specialists to full-service indie game publishers, bringing our expertise in player engagement to every aspect of game development and distribution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-panel rounded-[32px] p-10 text-center order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">Our Mission</h3>
            <p className="text-white/80">
              To empower indie developers to reach their full potential by providing the support, resources, and expertise they need to succeed in the competitive gaming landscape.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="glass-panel rounded-[32px] p-10 space-y-6 relative">
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Our Evolution</h2>
              <p className="text-white/80 leading-relaxed">
                Today, Zemore Indie Games stands as a beacon for independent developers seeking more than just a publisher—we're partners in success. Our marketing background gives us unique insights into what players want, how to build communities, and how to make games stand out in a crowded market.
              </p>
              <p className="text-white/80 leading-relaxed">
                We've assembled a team of passionate gamers, marketing experts, and industry veterans who understand both the creative and business sides of game development. This comprehensive approach allows us to support developers at every stage of their journey.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[36px] p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--text-primary)]">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Partnership First', body: 'We believe in true partnerships where success is shared and developers maintain creative control.' },
              { title: 'Marketing Expertise', body: 'Our roots in marketing give us unique insights into player engagement and community building.' },
              { title: 'Developer Success', body: "Your success is our success. We're committed to helping you reach your full potential." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTA
        title="Join Our Family"
        body="Whether you have a completed game or just an idea, we're here to help you bring your vision to life. Let's create something amazing together."
        primary={{ label: 'Submit Your Game', href: '/submit' }}
        secondary={{ label: 'Get in Touch', href: '/contact' }}
      />
    </main>
  )
}
