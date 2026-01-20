'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type HeroSlide = {
  id: string
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  headingLogo: {
    src: string
    alt: string
    className: string
  }
  rightImage?: {
    src: string
    alt: string
    className: string
  }
  primaryCta: {
    href: string
    label: string
  }
  secondaryCta: {
    href: string
    label: string
  }
}

export default function ShroomwoodHero() {
  const slides: HeroSlide[] = useMemo(
    () => [
      {
        id: 'lag-kills',
        title: 'LAG KILLS',
        subtitle: 'Single-player & online co-op survival horror',
        description:
          'Break into a house, but beware, the owner is home. Loot, hide, survive, and escape.',
        backgroundImage: '/images/lag-kills-header/lag-kills-background.png',
        headingLogo: {
          src: '/images/lag-kills-header/lag-kills-logo.png',
          alt: 'LAG KILLS logo',
          className:
            'w-[330px] sm:w-[450px] md:w-[570px] lg:w-[720px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]',
        },
        rightImage: {
          src: '/images/lag-kills-header/lag-kills-fat-boy.png',
          alt: 'LAG KILLS character',
          className:
            'w-[480px] sm:w-[600px] md:w-[720px] lg:w-[840px] drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]',
        },
        primaryCta: {
          href: 'https://store.steampowered.com/app/3667380/LAG_KILLS/',
          label: 'Wishlist on Steam',
        },
        secondaryCta: {
          href: '/games',
          label: 'Browse all games',
        },
      },
      {
        id: 'shroomwood',
        title: 'Shroomwood',
        subtitle: 'Top-down 2D action roguelike',
        description:
          'Play as a little mushroom, battle forest creatures, dual wield weapons, and collect enchanted items.',
        backgroundImage: '/images/shroomwood-header/shroomwood-background.png',
        headingLogo: {
          src: '/images/shroomwood-header/Shroomwood Logo Transparent Large.png',
          alt: 'Shroomwood logo',
          className:
            'w-[390px] sm:w-[510px] md:w-[630px] lg:w-[780px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]',
        },
        rightImage: {
          src: '/images/shroomwood-header/shroomy.png',
          alt: 'Shroomy character',
          className:
            'w-[207px] sm:w-[259px] md:w-[311px] lg:w-[363px] drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]',
        },
        primaryCta: {
          href: 'https://store.steampowered.com/app/3504020/Shroomwood/',
          label: 'Wishlist on Steam',
        },
        secondaryCta: {
          href: '/games',
          label: 'Browse all games',
        },
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(newIndex)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 600)
  }

  useEffect(() => {
    if (slides.length <= 1) return

    const id = window.setTimeout(() => {
      changeSlide((activeIndex + 1) % slides.length)
    }, 8000)

    return () => window.clearTimeout(id)
  }, [activeIndex, slides.length, isTransitioning])

  const goPrev = () => {
    changeSlide((activeIndex - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    changeSlide((activeIndex + 1) % slides.length)
  }

  const active = slides[activeIndex]

  return (
    <section className="relative overflow-hidden px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-20 h-[90vh] flex items-start md:items-center">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={active.backgroundImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[rgba(4,6,15,0.92)]"></div>
        <div className="absolute inset-0 grid-overlay opacity-80"></div>
      </div>

      {active.rightImage && (
        <div className={`absolute bottom-0 right-0 z-10 pointer-events-none ${active.id === 'shroomwood' ? 'right-16 lg:right-32' : ''}`}>
          <div key={active.id} className="hero-right-image-slide-in">
            <img
              src={active.rightImage.src}
              alt={active.rightImage.alt}
              className={active.rightImage.className}
            />
          </div>
        </div>
      )}

      <div
        className={`relative z-20 container mx-auto lg:mx-0 lg:mr-auto lg:ml-12 xl:ml-16 max-w-3xl hero-content-fade ${
          isTransitioning ? 'hero-content-fade-out' : 'hero-content-fade-in'
        }`}
      >
        <div
          className="grid gap-12 items-center grid-cols-1"
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 sm:mt-0 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.3em] text-white/80">
              Featured Game
            </div>

            <h1 className="mt-6 font-semibold leading-tight flex justify-start">
              <img
                src={active.headingLogo.src}
                alt={active.headingLogo.alt}
                className={active.headingLogo.className}
              />
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-100">
              {active.subtitle}
            </p>

            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              {active.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              <a
                href={active.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold px-8 py-3 rounded-full transition-transform hover:-translate-y-1 ${
                  active.id === 'lag-kills'
                    ? 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                    : active.id === 'shroomwood'
                    ? 'bg-[#e5ca89] text-[#2e222f] border-2 border-[#2e222f] hover:bg-[#d9ba73]'
                    : 'glow-ring bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                }`}
              >
                {active.primaryCta.label}
              </a>
              <Link
                href={active.secondaryCta.href}
                className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition-colors"
              >
                {active.secondaryCta.label}
              </Link>
            </div>

            {slides.length > 1 && (
              <div className="mt-10 flex items-center gap-2 justify-start relative z-20">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? 'w-8 bg-white/80'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to ${s.title}`}
                    onClick={() => changeSlide(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
