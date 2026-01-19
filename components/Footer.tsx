import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

function BlueskyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 11.1c-1.27-1.9-4.72-6.24-7.31-8.07C2.2 1.22 1 1.64 1 3.62c0 1.98 1.13 16.59 1.8 19.03.37 1.33 1.73 1.78 3.02 1.55 2.25-.39 5.08-2.03 6.18-4.68 1.1 2.65 3.93 4.29 6.18 4.68 1.29.23 2.65-.22 3.02-1.55.67-2.44 1.8-17.05 1.8-19.03 0-1.98-1.2-2.4-3.69-.59-2.59 1.83-6.04 6.17-7.31 8.07Z"
        fill="currentColor"
      />
    </svg>
  )
}

function RedditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 12.14c0-1.33-1.07-2.4-2.4-2.4-.65 0-1.23.25-1.67.66-1.99-1.4-4.7-2.3-7.7-2.43l1.31-6.16 4.28.91a1.6 1.6 0 1 0 .16-.75l-4.72-1.01a.54.54 0 0 0-.64.42l-1.46 6.87c-3 .14-5.7 1.04-7.69 2.43a2.39 2.39 0 0 0-4.07 1.69c0 .97.58 1.8 1.4 2.18-.04.24-.06.49-.06.75 0 3.5 4.92 6.35 11 6.35S23 16.4 23 12.9c0-.26-.02-.51-.06-.75.83-.38 1.41-1.2 1.41-2.18Zm-17.14 2.2c0-.88.7-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .89-.72 1.6-1.6 1.6-.9 0-1.6-.71-1.6-1.6Zm9.86 4.15c-1.12 1.12-3.26 1.2-3.72 1.2-.46 0-2.6-.08-3.72-1.2a.54.54 0 0 1 .76-.77c.66.66 2.07.9 2.96.9.9 0 2.3-.24 2.96-.9a.54.54 0 1 1 .76.77Zm-.32-2.55c-.88 0-1.6-.71-1.6-1.6 0-.88.72-1.6 1.6-1.6.9 0 1.6.72 1.6 1.6 0 .89-.7 1.6-1.6 1.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Games', href: '/games' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Values', href: '/values' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  'Publishing',
  'Marketing',
  'Funding',
  'Distribution',
  'Submit Game'
]

const socials = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: BlueskyIcon, href: 'https://bsky.app' },
  { icon: RedditIcon, href: 'https://reddit.com' }
]

export default function Footer() {
  return (
    <footer className="bg-[#050916] border-t border-white/5 py-12 px-6 text-white/70 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/zemore_logo.webp" alt="Zemore Logo" className="w-12 h-12 rounded-xl" />
              <div>
                <p className="text-xs tracking-[0.35em] text-white/40 uppercase">Zemore</p>
                <p className="text-base font-semibold text-white">Indie Games</p>
              </div>
            </div>
            <p>
              For indies, by indies. We champion distinctive worlds and the creators behind them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-xs uppercase tracking-[0.3em] text-white/50">
            <div>
              <p className="mb-3">Navigate</p>
              <ul className="space-y-2 text-white/70 normal-case tracking-normal">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3">Services</p>
              <ul className="space-y-2 text-white/70 normal-case tracking-normal">
                {services.map((service) => (
                  <li key={service}>
                    <Link href={service === 'Submit Game' ? '/submit' : '/services'} className="hover:text-white transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Stay Connected</p>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Zemore Indie Games. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
