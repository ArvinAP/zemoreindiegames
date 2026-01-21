import React from 'react'

interface ValueCardProps {
  title: string
  description: string
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="card-surface p-8 text-center">
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
