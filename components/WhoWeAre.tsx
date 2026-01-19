'use client'

export default function WhoWeAre() {
  const stats = [
    { value: '50+', label: 'Games Published', color: 'text-purple-400' },
    { value: '100+', label: 'Developers Supported', color: 'text-blue-400' },
    { value: '5M+', label: 'Players Reached', color: 'text-green-400' },
    { value: '15+', label: 'Awards Won', color: 'text-pink-400' }
  ]

  return (
    <section id="about" className="py-24 px-6 section-animate relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="glass-panel rounded-[32px] p-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Who We Are</h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Zemore Indie Games began as an outsourced marketing team working closely with independent developers. Over time, we saw a common pattern: great games with strong creative vision often struggled to reach the audience they deserved. The problem was not the quality of the games, but the lack of access to the right support, visibility, and publishing opportunities.
              </p>
              
              <p>
                Driven by a deep respect for indie development, we evolved into a full-fledged publisher. Our mission is simple: <span className="text-cyan-300 font-semibold">to help indie games reach their full potential without compromising creative freedom</span>. Built by people who have worked alongside indie developers, Zemore exists to bridge the gap between passionate creators and the success they deserve.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 blur-[90px] bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-transparent"></div>
            <div className="relative rounded-[32px] overflow-hidden border border-white/10">
              <img
                src="/images/who-we-are.jpg"
                alt="Who We Are"
                className="w-full h-full object-cover opacity-80"
                style={{ maxHeight: '520px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="glass-panel rounded-[32px] p-12">
                        <div class="grid grid-cols-2 gap-6">
                          ${stats.map((stat) => `
                            <div class="text-center">
                              <div class="text-4xl md:text-5xl font-bold mb-2 ${stat.color}">${stat.value}</div>
                              <p class="text-sm text-white/70">${stat.label}</p>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    `
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
