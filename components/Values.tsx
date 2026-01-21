import ValueCard from './ValueCard'

const values = [
  {
    title: 'Developer-First Partnership',
    description: 'We put developers first. Fair terms, transparent deals, and mutual respect. Your success is our success.'
  },
  {
    title: 'Hands-On Support',
    description: 'We work closely with you on game design, playtesting, and polish to help your game become the best version of itself.'
  },
  {
    title: 'Creative Ownership',
    description: 'Your game stays yours. We do not take credit for your hard work. Your vision, your voice, your recognition.'
  },
  {
    title: 'Long-Term Commitment',
    description: 'We do not disappear after launch. From release to updates and beyond, we stay invested in your game\'s journey.'
  },
  {
    title: 'Reaching Full Potential',
    description: 'Our goal is to help passionate indie games reach as high as they can, creatively, commercially, and sustainably.'
  }
]

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 section-animate relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">Our Values</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Fair partnerships and grassroots support for passionate developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}
