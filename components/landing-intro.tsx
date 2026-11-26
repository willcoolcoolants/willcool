"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function LandingIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 2200)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="landing-intro" aria-hidden="true">
      <div className="intro-brand flex flex-col items-center gap-8 px-6 text-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/willcool-logo.svg`}
          alt=""
          width={842}
          height={1169}
          priority
          className="h-auto max-h-[50svh] w-40 object-contain sm:w-48"
        />
        <p className="intro-motto flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-700 sm:gap-5 sm:text-xs sm:tracking-[0.3em]">
          <span>Quality.</span>
          <span>Integrity.</span>
          <span>Service.</span>
        </p>
      </div>
    </div>
  )
}
