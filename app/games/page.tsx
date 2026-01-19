import { Metadata } from 'next'
import GameCard from '@/components/GameCard'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Our Games - Zemore Indie Games',
  description: 'Discover the incredible indie games we\'ve helped bring to players worldwide.',
}

export default function GamesPage() {
  const games = [
    {
      id: 1,
      title: 'LAG KILLS',
      description: 'LAG KILLS is a single-player and online co-op survival horror. Break into a house, but beware, the owner is home. Loot, hide, survive, and escape',
      image: '/images/lag-kills.jpg',
      gradient: 'from-green-500/30 to-blue-500/20',
      developer: 'DERANGED GAMES',
      link: 'https://store.steampowered.com/app/3667380/LAG_KILLS/'
    },
    {
      id: 2,
      title: 'Shroomwood',
      description: 'Shroomwood is a top-down 2D action roguelike. Play as a little mushroom, battle forest creatures, dual wield weapons, and collect enchanted items.',
      image: '/images/shroomwood.jpg',
      gradient: 'from-purple-500/30 to-pink-500/20',
      developer: 'Sporelite Games',
      link: 'https://store.steampowered.com/app/3504020/Shroomwood/'
    }
  ]

  return (
    <main className="page-surface min-h-screen bg-dark-bg pt-24 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute -left-16 top-32 w-[320px] h-[320px] bg-gradient-to-br from-purple-500/25 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-[280px] h-[280px] bg-gradient-to-tr from-cyan-400/25 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 pb-16">
        <div className="glass-panel rounded-[36px] p-10 text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Games</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover the incredible titles we've helped bring to players worldwide. Each game represents the unique vision of talented indie developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {games.map((game) => (
            <GameCard 
              key={game.id}
              title={game.title}
              description={game.description}
              image={game.image}
              gradient={game.gradient}
              developer={game.developer}
              link={game.link}
            />
          ))}
        </div>
      </div>
      <CTA />
    </main>
  )
}
