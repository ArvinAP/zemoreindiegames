 
import ShroomwoodHero from '@/components/ShroomwoodHero'
import Games from '@/components/Games'
import WhoWeAre from '@/components/WhoWeAre'
import WhatWeDo from '@/components/WhatWeDo'
import Values from '@/components/Values'
import Community from '@/components/Community'
import CTA from '@/components/CTA'

const SectionBreak = () => (
  <div className="max-w-5xl mx-auto h-px bg-[var(--accent)]/30 opacity-70"></div>
)

export default function Home() {
  return (
    <main>
      <ShroomwoodHero />
      <SectionBreak />
      
      <Games />
      <SectionBreak />
      <WhoWeAre />
      <SectionBreak />
      <Community />
      <SectionBreak />
      <WhatWeDo />
      <SectionBreak />
      <Values />
      <SectionBreak />
      <section className="bg-[#04060f]">
        <CTA />
      </section>
    </main>
  )
}
