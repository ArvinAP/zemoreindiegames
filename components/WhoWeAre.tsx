'use client'

export default function WhoWeAre() {
  const stats = [
    { value: '50+', label: 'Games Published', color: 'text-[var(--accent)]' },
    { value: '100+', label: 'Developers Supported', color: 'text-[var(--accent)]' },
    { value: '5M+', label: 'Players Reached', color: 'text-[var(--accent)]' },
    { value: '15+', label: 'Awards Won', color: 'text-[var(--accent)]' }
  ]

  return (
    <section id="about" className="py-[calc(6rem*1.1)] px-6 section-animate relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[calc(3.5rem*1.1)] items-center scale-105 origin-top">
          <div className="glass-panel rounded-[32px] p-[calc(2.5rem*1.1)]">
            <h2 className="text-[calc(2.5rem*1.1)] md:text-[calc(3rem*1.1)] font-bold mb-[calc(2rem*1.1)] text-[var(--text-primary)]">Who We Are</h2>
            <div className="space-y-[calc(1.5rem*1.1)] text-white/80 leading-relaxed">
              <p>
                Zemore Indie Games is an indie-focused game publisher built to solve a simple problem: <span className="text-[var(--accent)] font-semibold">great games don’t fail because they lack creativity, they fail because they lack reach.</span> 
              </p>
              <p>
                We partner with independent developers to provide the publishing, marketing, and strategic support needed to bring strong games to market without compromising their vision. From positioning and audience growth to launch execution and long-term sales strategy, we focus on the parts of development that are hardest to do alone.
              </p>
              <p>
                Our approach is collaborative, transparent, and creator-first. We don’t dictate creative direction. Zemore exists to help indie games find their audience, compete in a crowded market, and achieve sustainable success.
              </p>
            </div>
          </div>

          <div className="relative">
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
