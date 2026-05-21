"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, User } from "lucide-react"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-1 px-4">
        <div className="container mx-auto flex justify-center items-center">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">CALL TODAY! 1-513-739-8939</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="glass-nav relative rounded-2xl md:rounded-3xl px-4 md:px-6">
            <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white">
                <Image
                  src={`${basePath}/logo.png`}
                  alt="WillCool Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
              <div>
                <div className="font-bold text-2xl text-slate-800">WillCool</div>
                <div className="text-xs text-slate-500 font-medium tracking-wider">Premium Metal Cutting Fluids and Lubricants</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-black hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-slate-700 hover:text-black hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-black hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
              >
                Contact
              </Link>
              
            </div>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden py-3 border-t border-white/20 fade-in">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                  className="text-slate-700 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-slate-700 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                 
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
