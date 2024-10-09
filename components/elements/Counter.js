import { useEffect, useRef, useState } from 'react'

export default function Counter({ end, duration }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const intervalRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount()
                    observer.disconnect()
                }
            },
            { threshold: 0 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (observer) observer.disconnect()
        }
    }, [])

    const startCount = () => {
        // Increase increment for faster counting
        const stepTime = (duration * 50) / end // Decreased interval to speed up counting
        const increment = Math.max(1, Math.round(end / (duration * 2))) // Adjust increment

        intervalRef.current = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                if (newCount >= end) {
                    clearInterval(intervalRef.current)
                    return end
                }
                return newCount
            })
        }, stepTime)
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}
