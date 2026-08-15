"use client"
import React, { useRef, useLayoutEffect } from 'react'
import GeneralInfo from './GeneralInfo'
import Navbar from './Navbar'

const HeaderFull = () => {
  const headerRef = useRef(null)

  useLayoutEffect(() => {
    const node = headerRef.current
    if (!node) return

    const setVar = (px) => {
      document.documentElement.style.setProperty('--header-height', `${px}px`)
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.offsetHeight
        setVar(height)
      }
    })

    observer.observe(node, { box: 'border-box' })

    const recheck = () => setVar(node.offsetHeight)

    const images = node.querySelectorAll('img')
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', recheck, { once: true })
      }
    })

    if (document.fonts?.ready) {
      document.fonts.ready.then(recheck)
    }

    window.addEventListener('resize', recheck)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', recheck)
      images.forEach((img) => img.removeEventListener('load', recheck))
    }
  }, [])

  return (
    <div ref={headerRef} className="fixed top-0 z-[100] w-full">
      <GeneralInfo />
      <Navbar />
    </div>
  )
}

export default HeaderFull