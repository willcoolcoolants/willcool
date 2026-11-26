import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-700 bg-slate-900 text-white">
      <div className="fluid-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content site-container grid items-center gap-12 py-16 md:grid-cols-2 md:gap-0 md:py-24">
        <div className="md:pr-10">
          <p className="eyebrow mb-6 text-blue-200">Precision starts with the right fluid</p>
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Quality.<br />Integrity.<br /><span className="text-blue-300">Service.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-200">Metal cutting fluids and lubricants for demanding machining and grinding applications. The right solution, your way.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5"><Link href="/products" className="button-primary">Explore our fluids <ArrowRight size={18} /></Link><Link href="/contact" className="text-sm font-semibold underline underline-offset-4 hover:text-blue-200">Talk to our team</Link></div>
        </div>
        <div className="space-y-4 border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <h2 className="eyebrow mb-5 text-blue-200">Two solutions. One standard.</h2>
          {Object.entries(products).map(([slug, product]) => (
            <article key={slug} className="rounded-md border border-slate-200 bg-white/95 p-6 text-slate-950">
              <p className="text-xs font-medium text-blue-700">{product.type}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{slug === "apx" ? product.description : "Extreme synthetic cutting and grinding fluid for ferrous and nonferrous materials, including all grades of aluminum and titanium."}</p>
              <Link href={`/products/${slug}`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">View product details <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
