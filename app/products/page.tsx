import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="page-heading"><div className="site-container"><p className="eyebrow mb-4">WillCool metalworking fluids</p><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Built for your application.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Explore WillCool APX and WillCool FLX1. Compare applications and features to find your fluid.</p></div></section>
        <ProductGrid showHeading={false} />
      </main>
      <Footer />
    </>
  )
}
