import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { products } from "@/lib/products"

export default function ProductGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-stone-50 py-16 md:py-20" aria-label="WillCool products">
      <div className="site-container">
        {showHeading && <div className="mb-10 max-w-2xl"><p className="eyebrow mb-3">Our fluids</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Two solutions. One standard.</h2><p className="mt-4 leading-relaxed text-slate-600">Synthetic and semi-synthetic fluids to help you choose the right fit.</p></div>}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(products).map(([slug, product]) => (
            <Link key={slug} href={`/products/${slug}`} className="group overflow-hidden rounded-md border border-slate-200 bg-white transition-colors hover:border-slate-400">
              <div className="relative h-56 overflow-hidden bg-slate-100 lg:h-64"><Image src={product.image} alt={`${product.name} machining application`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div>
              <div className="p-6 md:p-8"><p className="eyebrow text-blue-700">{slug === "flx1" ? "02 / Synthetic" : "01 / Semi-synthetic"}</p><div className="mt-3 flex items-center justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{product.name}</h3><ArrowUpRight className="text-blue-700" size={24} /></div><p className="mt-4 leading-relaxed text-slate-600">{slug === "flx1" ? "Extreme synthetic cutting and grinding fluid for ferrous and nonferrous applications." : product.description}</p><span className="mt-6 inline-flex text-sm font-semibold text-blue-700 group-hover:underline">View product details</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
