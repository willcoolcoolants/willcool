"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, User } from "lucide-react"
import { getSupabaseClient } from "@/lib/supabase"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabaseClient()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-1 px-4">
        <div className="container mx-auto flex justify-center items-center">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">CALL TODAY! 1-800-WILLCOOL</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 text-white"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-2xl text-slate-800">WillCool</div>
                <div className="text-xs text-slate-500 font-medium tracking-wider">SYNTHETIC COOLANTS</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </Link>
              <Link
                href="/products"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              {loading ? (
                <>
                  <div className="h-6 w-24 rounded-md bg-slate-200 animate-pulse" />
                  <div className="h-10 w-32 rounded-full bg-slate-200 animate-pulse" />
                </>
              ) : user ? (
                <>
                  <Link
                    href="/account"
                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                  >
                    <User className="w-4 h-4 mr-1" />
                    Account
                  </Link>
                  <Link href="/dashboard">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                      Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-2 border-t fade-in">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                {loading ? (
                  <div className="space-y-4">
                    <div className="h-6 w-24 rounded-md bg-slate-200 animate-pulse" />
                    <div className="h-10 w-full rounded-full bg-slate-200 animate-pulse" />
                  </div>
                ) : user ? (
                  <>
                    <Link
                      href="/account"
                      className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-4 h-4 mr-1" />
                      Account
                    </Link>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 w-full">
                        Dashboard
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 w-full">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
