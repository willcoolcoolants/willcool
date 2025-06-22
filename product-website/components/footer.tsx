import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">WillCool</div>
                <div className="text-xs text-slate-400">SYNTHETIC COOLANTS</div>
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
              <li>
                <Link
                  href="/products/cutting-fluids"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Cutting Fluids
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
                <span className="text-slate-400">1-800-WILLCOOL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-slate-400">info@willcool.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-slate-400">123 Industrial Way, Coolant City, MI 48201</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 WillCool. All rights reserved. | Premium Synthetic Coolants for Precision Machining
          </p>
        </div>
      </div>
    </footer>
  )
}
