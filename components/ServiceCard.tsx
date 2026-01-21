import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="card-surface p-8 text-center">
      <h3 className="text-lg font-semibold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
