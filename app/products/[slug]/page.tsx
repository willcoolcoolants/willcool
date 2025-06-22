import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

const productData: Record<string, any> = {
  "industrial-lubricants": {
    name: "Industrial Lubricants",
    description:
      "High-performance lubricants designed for the most demanding industrial applications. Our advanced formulation provides superior protection and extends equipment life.",
    image: "/placeholder.svg?height=500&width=600",
    features: [
      "Superior wear protection",
      "Extended equipment life",
      "High temperature stability",
      "Corrosion resistance",
    ],
    applications: ["Heavy machinery", "Manufacturing equipment", "Automotive applications", "Marine engines"],
    specifications: {
      Viscosity: "10W-30",
      "Flash Point": "220°C",
      "Pour Point": "-25°C",
      "API Rating": "SN/CF",
    },
  },
  "cutting-fluids": {
    name: "Cutting Fluids",
    description:
      "Advanced cutting fluids engineered for precision machining operations. Provides excellent cooling and lubrication for superior surface finish.",
    image: "/placeholder.svg?height=500&width=600",
    features: [
      "Excellent cooling properties",
      "Superior surface finish",
      "Extended tool life",
      "Environmentally friendly",
    ],
    applications: ["CNC machining", "Turning operations", "Milling applications", "Grinding processes"],
    specifications: {
      "pH Level": "8.5-9.5",
      Concentration: "5-10%",
      "Foam Control": "Excellent",
      Biostability: "High",
    },
  },
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Product Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">{product.name}</h1>
          <p className="text-xl text-blue-200 max-w-3xl fade-in">{product.description}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="slide-in-left">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={500}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Product Info */}
            <div className="slide-in-right">
              <div className="space-y-8">
                {/* Features */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Applications */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
                    <ul className="space-y-2">
                      {product.applications.map((application: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Download PDF */}
                <Button
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Product PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <Card className="fade-in">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">{key}</div>
                    <div className="text-blue-600 font-medium">{value as string}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
