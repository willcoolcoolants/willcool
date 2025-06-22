import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductGrid />
      <AboutSection />
      <Footer />
    </div>
  )
}
