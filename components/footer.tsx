import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="flex items-start gap-4"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/willcool-logo.svg`} alt="" width={48} height={67} /><div><Link href="/" className="text-2xl font-bold tracking-tight">WillCool</Link><p className="mt-2 text-sm font-medium">Quality. Integrity. Service.</p><p className="mt-2 text-sm text-slate-600">Precision Customized Metal Cutting Fluids</p></div></div>
        <div><h2 className="eyebrow mb-4">Our fluids</h2><div className="flex flex-col items-start gap-3 text-sm text-slate-600"><Link href="/products/apx" className="hover:text-blue-700">WillCool APX</Link><Link href="/products/flx1" className="hover:text-blue-700">WillCool FLX1</Link><Link href="/products" className="hover:text-blue-700">All products</Link></div></div>
        <div><h2 className="eyebrow mb-4">Let’s talk</h2><div className="flex flex-col items-start gap-3 text-sm text-slate-600"><a href="tel:+15137398939" className="hover:text-blue-700">513-739-8939</a><a href="mailto:info@will-cool.com" className="hover:text-blue-700">info@will-cool.com</a><Link href="/contact" className="hover:text-blue-700">Contact our team</Link></div></div>
      </div>
      <div className="site-container border-t border-slate-200 py-6 text-xs text-slate-500">© {new Date().getFullYear()} WillCool. All rights reserved.</div>
    </footer>
  )
}
