import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"

export async function generateStaticParams() {
  // Keep existing APX links usable while new links use the simplified name.
  return [...Object.keys(products), "apx-av"].map((slug) => ({ slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const key = slug === "apx-av" ? "apx" : slug
  if (!(key in products)) notFound()
  const product = products[key as keyof typeof products]

  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="relative overflow-hidden bg-slate-900" aria-labelledby="product-title">
          <div className="fluid-background" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content site-container py-6 text-white md:py-8">
            <Link href="/products" className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm text-white hover:text-blue-200"><ArrowLeft size={16} /> All products</Link>
          <div className="mx-auto mb-8 grid w-full max-w-4xl items-center gap-5 md:grid-cols-2 md:gap-12">
            <div>
              <p className="eyebrow mb-3 text-blue-200">{product.type}</p>
              <h1 id="product-title" className="text-4xl font-semibold tracking-tight md:text-5xl">{product.name}</h1>
            </div>
            <p className="text-lg leading-relaxed text-slate-200">{product.description}</p>
          </div>
            <Image src={product.image} alt={`${product.name} machining application`} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 896px) 100vw, 896px" priority className="mx-auto h-auto w-full max-w-4xl rounded-md border border-white/20 object-contain" />
          </div>
        </section>
        <section className="site-container py-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-8">
              {[{ title: "Key features", items: product.features }, { title: "Applications", items: product.applications }].map(({ title, items }) => <section key={title}><h2 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h2><ul className="list-disc space-y-2 pl-5 leading-relaxed text-slate-600 marker:text-blue-700">{items.map(item => <li key={item}>{item}</li>)}</ul></section>)}
            </div>
            <section>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">Advantages & usage notes</h2>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-slate-600 marker:text-blue-700">{product.advantages.map(item => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="button-primary">Discuss this product <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
