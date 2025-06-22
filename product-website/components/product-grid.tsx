import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: "synthetic-coolants",
    name: "Synthetic Coolants",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-performance synthetic coolants for precision machining operations",
  },
  {
    id: "semi-synthetic-coolants",
    name: "Semi-Synthetic Coolants",
    image: "/placeholder.svg?height=300&width=400",
    description: "Balanced performance coolants combining synthetic and mineral oil benefits",
  },
  {
    id: "cutting-fluids",
    name: "Cutting Fluids",
    image: "/placeholder.svg?height=300&width=400",
    description: "Specialized cutting fluids for enhanced tool life and surface finish",
  },
  {
    id: "grinding-coolants",
    name: "Grinding Coolants",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced coolants designed specifically for grinding applications",
  },
  {
    id: "cnc-coolants",
    name: "CNC Coolants",
    image: "/placeholder.svg?height=300&width=400",
    description: "Precision coolants optimized for CNC machining centers",
  },
  {
    id: "specialty-coolants",
    name: "Specialty Coolants",
    image: "/placeholder.svg?height=300&width=400",
    description: "Custom formulated coolants for specific machining requirements",
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Coolant Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive range of synthetic coolants engineered for superior machining performance and
            extended tool life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 fade-in border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-slate-600">{product.description}</p>
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
