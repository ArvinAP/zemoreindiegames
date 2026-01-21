import { Metadata } from 'next'
import SubmitGameForm from '@/components/SubmitGameForm'

export const metadata: Metadata = {
  title: 'Submit Your Game - Zemore Indie Games',
  description: 'Submit your indie game to Zemore Indie Games for publishing consideration.',
}

export default function SubmitPage() {
  return (
    <main className="page-surface min-h-screen bg-dark-bg pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute -left-16 top-32 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/25 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute -right-16 bottom-10 w-[260px] h-[260px] bg-gradient-to-tr from-cyan-400/25 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="glass-panel rounded-[32px] p-10 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Submit Your Game</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            We're always excited to discover new indie games. To review the game, we'll 
            need the info below. If you have any questions, we want to hear it.
          </p>
        </div>
        
        <SubmitGameForm />
      </div>
    </main>
  )
}
