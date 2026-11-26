"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const links = [{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { href: "/contact", label: "Contact" }]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="site-container" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-6 py-5">
          <Link href="/" className="flex items-center gap-3" aria-label="WillCool home">
            <Image src={`${basePath}/willcool-logo.svg`} alt="" width={48} height={67} priority className="h-14 w-auto md:h-16" />
            <div><span className="block text-2xl font-bold tracking-tight md:text-3xl">WillCool</span><span className="block max-w-[190px] text-xs leading-relaxed text-slate-600 sm:max-w-none">Precision Customized Metal Cutting Fluids</span></div>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`nav-link ${pathname === href ? "text-blue-700" : ""}`}>{label}</Link>)}
            <a href="tel:+15137398939" className="button-secondary">513-739-8939 <ArrowUpRight size={16} /></a>
          </div>
          <button type="button" className="flex h-11 w-11 items-center justify-center shrink-0 rounded border border-slate-200 lg:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {isOpen && <div id="mobile-navigation" className="border-t border-slate-200 pb-4 lg:hidden">{links.map(({ href, label }) => <Link key={href} href={href} onClick={() => setIsOpen(false)} aria-current={pathname === href ? "page" : undefined} className="block py-3 font-medium">{label}</Link>)}<a href="tel:+15137398939" className="block py-3 text-blue-700">Call 513-739-8939</a></div>}
      </nav>
    </header>
  )
}
