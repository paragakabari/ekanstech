'use client'
import { useEffect, useState } from 'react'
import Counter from './Counter'

export default function CounterUp({ end }) {
  const [inViewport, setInViewport] = useState(false)

  const handleScroll = () => {
    const element = document.querySelector('.count-text')
    if (element) {
      const rect = element.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0
      if (isInViewport && !inViewport) {
        setInViewport(true)
      }
    }
  }

  useEffect(() => {
    // Check if element is in viewport on mount
    handleScroll()

    // Throttle or debounce the scroll event listener
    const debounceScroll = () => {
      let timeout
      return () => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(handleScroll, 100) // adjust the delay if needed
      }
    }

    const debouncedScroll = debounceScroll()
    window.addEventListener('scroll', debouncedScroll)
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll)
    }
  }, [inViewport])

  return (
    <span className="count-text">
      {inViewport && <Counter end={end} duration={20} />}
    </span>
  )
}
