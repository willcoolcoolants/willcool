import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

const productData: Record<string, any> = {
  "flx1": {
    name: "WillCool Synthetic Solutions: FLX1",
    description:
      "FLX1 is an extreme heavy-duty synthetic cutting and grinding fluid designed for both ferrous and nonferrous applications. Exceptional lubrication coupled with low PH mix makes FLX1 an ideal choice for tough applications on all grades of aluminum.",
    image: "/coolant1.jpg",
    features: [
      "Operator safe; runs extremely clean and clear",
      "Excellent cooling and lubrication at the cutting interface",
      "Corrosion protection",
      "Rejects tramp oil for simple removal",
      "Excellent choice for aerospace aluminum applications",
    ],
    applications: [
      "All grades of aluminum",
      "Ferrous and nonferrous cutting",
      "Grinding applications",
      "Aerospace machining",
    ],
    specifications: {
      "Physical Appearance": "Light Yellow / Clear",
      Odor: "Mild",
      "Solubility in Water": "Water Soluble",
      "PH 5% Mix": "7.7",
      "PH Concentration": "8.0",
      Residue: "Liquid Film",
      "Refractometer Factor": "1.7",
    },
    advantages: [
      "No sump stench, no bad odors",
      "Extremely long sump life",
      "DCHA free",
      "Non-Chlorinated",
      "Low mist levels",
      "Low carry-off on parts",
      "Extremely clean",
      "Extreme Low foam formula",
      "Does not contain nitrites, sulfur, phenolic biocides, chlorinated Eps or DCHA",
      "Not for use on Magnesium",
    ],
  },
  "apx-av": {
    name: "WillCool Semi Synthetic Solutions: APX AV",
    description:
      "APX AV is a heavy duty micro emulsion with a high lubricity profile that optimizes tool life for both ferrous and non-ferrous materials. Utilizes proprietary C80 Shield™ Technology for bacterial bio-resistance and mold prevention.",
    image: "/coolant2.jpg",
    features: [
      "High lubricity profile = excellent tool life",
      "C80 Shield™ Technology provides bio-resistance and mold prevention",
      "Stable in poor/hard water conditions",
      "Non-staining premium solution for aerospace materials",
    ],
    applications: [
      "Ferrous and non-ferrous machining",
      "Aerospace materials",
      "High pressure systems",
      "General purpose machining and grinding",
    ],
    specifications: {
      "Physical Appearance": "Yellow / Light Amber",
      "PH @ 5%": "9.0",
      "Density (lbs/gal)": "8.2",
      "Grinding Dilution": "3% - 6%",
      "Machining Dilution": "5% - 12%",
      "Refractometer Factor": "1.2",
    },
    advantages: [
      "Premium cutting solution for ferrous and non-ferrous materials",
      "High lubricity formula = excellent tool life",
      "Extended sump life",
      "C80 Shield™ Technology eliminates sump stench",
      "Low foaming; great for high pressure systems",
      "No formaldehyde release biocides",
      "Extremely stable in hard water conditions",
      "Boeing BAC 5008 Revision V compliant",
      "Does not contain nitrites, sulfur, formaldehyde release biocides, phenolic biocides, triazine, chlorine or DCHA",
      "Not for use on Magnesium",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }));
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
            {/* Product Image and Specs (Left) */}
            <div className="slide-in-left space-y-6">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={500}
                className="w-full rounded-lg shadow-2xl"
              />

              {/* Specifications under image, condensed horizontally */}
              <Card className="fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-900 mb-1">{key}</div>
                        <div className="text-blue-600 text-sm font-medium">{value as string}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Info (Right) */}
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

                {/* Advantages */}
                {product.advantages && product.advantages.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Advantages</h3>
                      <ul className="space-y-2">
                        {product.advantages.map((adv: string, index: number) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

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
        </div>
      </section>

      <Footer />
    </div>
  );
}
