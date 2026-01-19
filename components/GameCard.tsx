'use client'

interface GameCardProps {
  title: string
  description: string
  image: string
  gradient: string
  developer?: string
  link?: string
}

export default function GameCard({ title, description, image, gradient, developer, link }: GameCardProps) {
  const CardContent = (
    <div className="group relative cursor-pointer">
      <div className="card-surface rounded-3xl overflow-hidden">
        <div className={`relative aspect-[4/2.2] bg-gradient-to-br ${gradient}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 transition duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement!.innerHTML = '<div class="h-full flex items-center justify-center text-5xl text-white/30">🎮</div>'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] bg-white/10 text-white/80">
            Featured Game
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm text-white/70">{developer || 'Indie Collective'}</p>
            <p className="text-2xl font-semibold">{title}</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-sm text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    )
  }

  return CardContent
}
