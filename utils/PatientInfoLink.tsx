"use client"
import Link from "next/link"
import { ReactNode, MouseEvent, CSSProperties } from "react"

interface PatientInfoLinkProps {
    href: string
    children: ReactNode
    className?: string
    style?: CSSProperties
}

const PatientInfoLink = ({ href, children, className, style }: PatientInfoLinkProps) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const [path, hash] = href.split("#")
        if (!hash) return

        if (window.location.pathname === path) {
            e.preventDefault()
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <Link href={href} onClick={handleClick} scroll={false} className={className} style={style}>
            {children}
        </Link>
    )
}

export default PatientInfoLink