import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''


const products = [
  {
    id: "flx1",
    name: "WillCool Synthetic Solutions: FLX1",
    image: `${basePath}/coolant1.jpg`,
    description: "Extreme heavy-duty synthetic cutting & grinding fluid for ferrous and nonferrous applications.",
  },
  {
    id: "apx-av",
    name: "WillCool Semi Synthetic Solutions: APX AV",
    image: `${basePath}/coolant2.jpg`,
    description: "Heavy duty micro emulsion with high lubricity profile and bio-resistance.",
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Coolant Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our flagship synthetic formulas, crafted for peak machining performance and dependable protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 justify-items-center">
          {products.map((product, index) => (
            <Link key={product.id} href={`/products/${product.id}`} className="w-full md:w-[420px] lg:w-[460px]">
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 fade-in border border-white/50 bg-white/70 backdrop-blur">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={600}
                      className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
