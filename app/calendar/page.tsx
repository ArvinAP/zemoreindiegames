import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar - Zemore Indie Games',
  description: 'Stay updated with our upcoming events, deadlines, and important dates.',
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1d] pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-[36px] p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Calendar</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with our upcoming events, submission deadlines, and important dates.
          </p>
        </div>

        <div className="glass-panel rounded-[32px] p-8 mt-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-white/70">
              Our calendar feature is currently under development. Check back soon for upcoming events and deadlines.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
