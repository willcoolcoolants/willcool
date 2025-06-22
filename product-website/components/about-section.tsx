import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              We Know <span className="text-blue-600">Coolant Technology</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with a commitment to innovation, WillCool continues to manufacture the most advanced synthetic
              coolant materials on the market today. Our team of chemical engineers and machining specialists have
              decades of combined experience developing cutting-edge coolant solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We manufacture a complete line of synthetic coolants that are recognized as the most reliable and
              performance-driven solutions in the industry. Our coolants provide superior lubrication, excellent heat
              dissipation, and extended tool life in the most demanding machining environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-slate-800">ISO Certified</div>
                <div className="text-sm text-slate-600">Quality Standards</div>
              </div>
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-slate-800">Expert Team</div>
                <div className="text-sm text-slate-600">Chemical Engineers</div>
              </div>
              <div className="text-center p-4">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-slate-800">Innovation</div>
                <div className="text-sm text-slate-600">R&D Focused</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download Company Brochure
            </Button>
          </div>

          <div className="slide-in-right">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="WillCool manufacturing facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-slate-700 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
