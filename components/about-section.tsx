import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="bg-blue-950 py-16 text-white md:py-20">
      <div className="site-container grid gap-8 md:grid-cols-2 md:gap-20">
        <div><p className="eyebrow mb-4 text-blue-200">The WillCool approach</p><h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Performance in the machine.<br />People you can count on.</h2></div>
        <div><p className="text-lg leading-relaxed text-blue-100">Your material, your process, your application. We help you find the right cutting fluid for dependable lubrication, cooling, and surface finish.</p><Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-3 font-medium text-white underline underline-offset-4 hover:text-blue-200">Let’s discuss your application <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  )
}
