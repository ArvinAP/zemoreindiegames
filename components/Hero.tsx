import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute -right-32 -top-32 w-[420px] h-[420px] bg-gradient-to-br from-purple-500/40 via-pink-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -left-10 bottom-0 w-[320px] h-[320px] bg-gradient-to-br from-cyan-400/30 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-center lg:text-left">
            <span className="text-[var(--text-primary)] font-bold">Zemore Indie Games</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100 text-center lg:text-left">
            For Indies. By Indies.
          </p>

          <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Empowering independent game developers to bring their creative visions to life. We're more than a publisher—we're your partner in success.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/submit" className="bg-[var(--dark-bg)] text-[var(--text-primary)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--dark-bg)] font-semibold px-8 py-3 rounded-full transition-transform hover:-translate-y-1">
              Submit Your Game
            </Link>
            <Link href="/games" className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition-colors">
              Browse Releases
            </Link>
          </div>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <div className="absolute -inset-10 blur-[90px] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent"></div>
          <div className="relative glass-panel rounded-[32px] p-8 shadow-2xl overflow-hidden">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
                <p className="text-lg font-semibold text-white mb-2">Our Games</p>
                <p className="text-sm text-white/70">Discover the incredible titles we've helped bring to players worldwide.</p>
              </div>
              <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
                <p className="text-lg font-semibold text-white mb-2">Who We Are</p>
                <p className="text-sm text-white/70">Zemore Indie Games was founded by developers who understand the indie game journey firsthand.</p>
              </div>
              <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
                <p className="text-lg font-semibold text-white mb-2">What We Do</p>
                <p className="text-sm text-white/70">Comprehensive support to help your game succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
