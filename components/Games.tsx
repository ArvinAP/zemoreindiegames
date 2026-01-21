import GameCard from './GameCard'

const games = [
  {
    id: 1,
    title: 'LAG KILLS',
    description: 'LAG KILLS is a single-player and online co-op survival horror. Break into a house, but beware, the owner is home. Loot, hide, survive, and escape',
    image: '/images/lag-kills.jpg',
    gradient: 'from-green-500/20 to-blue-500/20',
    developer: 'DERANGED GAMES',
    link: 'https://store.steampowered.com/app/3667380/LAG_KILLS/'
  },
  {
    id: 2,
    title: 'Shroomwood',
    description: 'Shroomwood is a top-down 2D action roguelike. Play as a little mushroom, battle forest creatures, dual wield weapons, and collect enchanted items.',
    image: '/images/shroomwood.jpg',
    gradient: 'from-purple-500/20 to-pink-500/20',
    developer: 'Sporelite Games',
    link: 'https://store.steampowered.com/app/3504020/Shroomwood/'
  }
]

export default function Games() {
  return (
    <section id="games" className="py-24 px-6 section-animate relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Our Games</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Discover the incredible titles we've helped bring to players worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {games.map((game) => (
            <div key={game.id} className="h-full min-h-[320px] flex">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
