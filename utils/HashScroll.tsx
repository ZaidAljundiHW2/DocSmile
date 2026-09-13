"use client"
import { useEffect } from "react"

const HashScroll = (): null => {
    useEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        const timer = setTimeout(() => {
            const el = document.querySelector(hash)
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return null
}

export default HashScroll