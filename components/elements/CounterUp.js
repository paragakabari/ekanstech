'use client'
import { useEffect, useState } from 'react'
import Counter from './Counter'

export default function CounterUp({ end }) {
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('count-text')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0
            if (isInViewport && !inViewport) {
                setInViewport(true)
            }
        }
    }

    useEffect(() => {
        handleScroll() // Check on mount
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [inViewport]) // Add `inViewport` to dependencies to prevent multiple state updates

    return (
        <>
            <span className="count-text">{inViewport && <Counter end={end} duration={20} />}</span>
        </>
    )
}
