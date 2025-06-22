import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Fluid Background */}
      <div className="fluid-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 slide-in-left">
            <Droplets className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-sm font-medium">Premium Synthetic Coolants</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-left">
            Advanced Coolant
            <span className="block bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed slide-in-right">
            Engineered synthetic coolants for precision machining. Superior performance, extended tool life, and
            exceptional surface finishes for the most demanding applications.
          </p>

          <div className="flex justify-center fade-in">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">25+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-300 mb-2">500+</div>
              <div className="text-slate-300">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-300">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
