import Link from 'next/link'

type CTAButton = {
  label: string
  href: string
}

interface CTAProps {
  id?: string
  title?: string
  body?: string
  primary?: CTAButton
  secondary?: CTAButton
}

export default function CTA({
  id = 'contact',
  title = 'Ready to Publish Your Game?',
  body = "Join a community of passionate indie developers who are making their dreams a reality. Let's create something amazing together.",
  primary = { label: 'Submit Your Project', href: '/submit' },
  secondary = { label: 'Get in Touch', href: '/contact' },
}: CTAProps) {
  return (
    <section id={id} className="py-24 px-6 bg-[#04060f]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="glass-panel rounded-[36px] p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            {title}
          </h2>
          
          <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            {body}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primary.href}
              className="bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition-colors"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
