import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">Our Products</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto fade-in">
            Explore our comprehensive range of industrial solutions designed for excellence
          </p>
        </div>
      </section>

      <ProductGrid />
      <Footer />
    </div>
  )
}
