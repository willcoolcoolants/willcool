import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white">
                <Image
                  src={`${basePath}/logo.png`}
                  alt="WillCool Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <div className="font-bold text-lg">WillCool</div>
                <div className="text-xs text-slate-400">Premium Metal Cutting Fluids and Lubricants</div>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Leading manufacturer of premium synthetic coolant materials for precision machining.
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Coolant Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/synthetic-coolants"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Synthetic Coolants
                </Link>
              </li>
              <li>
                <Link
                  href="/products/semi-synthetic-coolants"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Semi-Synthetic
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-slate-400">1-513-739-8939</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-slate-400">info@will-cool.com</span>
              </div>
              {/*<div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-slate-400">123 Industrial Way, Coolant City, MI 48201</span>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 WillCool. All rights reserved. | Premium Synthetic Coolants for Precision Machining
          </p>
        </div>
      </div>
    </footer>
  )
}
