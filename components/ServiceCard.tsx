import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export default function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  return (
    <div className="card-surface p-8 text-center">
      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
        {React.createElement(icon, { className: 'w-6 h-6 text-white' })}
      </div>
      
      <h3 className="text-lg font-semibold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
