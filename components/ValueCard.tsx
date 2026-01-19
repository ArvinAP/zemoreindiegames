import React from 'react'
import { Handshake, Wrench, Palette, Link, Rocket } from 'lucide-react'

interface ValueCardProps {
  icon: 'handshake' | 'tools' | 'palette' | 'link' | 'rocket'
  title: string
  description: string
  color: string
}

const icons = {
  handshake: Handshake,
  tools: Wrench,
  palette: Palette,
  link: Link,
  rocket: Rocket
}

export default function ValueCard({ icon, title, description, color }: ValueCardProps) {
  return (
    <div className="card-surface p-8 text-center">
      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        {React.createElement(icons[icon], { className: 'w-7 h-7 text-white' })}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
