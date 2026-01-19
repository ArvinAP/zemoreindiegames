'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('.section-animate')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
}
