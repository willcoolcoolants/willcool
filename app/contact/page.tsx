"use client"

import type React from "react"
import { useRef, useState } from "react"
import { sendInquiry } from "@/lib/send-inquiry"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const sending = useRef(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    data.set("_subject", `WillCool inquiry${data.get("company") ? ` — ${data.get("company")}` : ""}`)
    sending.current = true
    setStatus("sending")
    setErrorMessage("")

    try {
      await sendInquiry(formEndpoint, data)
      form.reset()
      setStatus("success")
    } catch (error) {
      setErrorMessage(error instanceof TypeError
        ? "Could not connect. Please check your connection and try again, or email info@will-cool.com."
        : error instanceof Error ? error.message : "Your inquiry could not be sent. Please try again.")
      setStatus("error")
    } finally {
      sending.current = false
    }
  }

  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="page-heading"><div className="site-container"><p className="eyebrow mb-4">Contact WillCool</p><h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Let’s get to work.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Need help choosing a fluid or placing an order? Tell us about your materials and machining process.</p></div></section>
        <section className="site-container grid gap-12 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="flex flex-col"><h2 className="text-2xl font-semibold tracking-tight">A direct line to our team.</h2><div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 lg:grid lg:flex-1 lg:grid-rows-3">
            {[{ label: "Call us", text: "513-739-8939", href: "tel:+15137398939" }, { label: "Product questions", text: "info@will-cool.com", href: "mailto:info@will-cool.com" }, { label: "Orders", text: "orders@will-cool.com", href: "mailto:orders@will-cool.com" }].map(item => <a key={item.label} href={item.href} className="group flex items-center justify-between gap-4 py-5"><div><span className="block text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</span><span className="mt-2 block text-lg font-medium group-hover:text-blue-700 lg:text-xl">{item.text}</span></div><ArrowUpRight size={20} className="shrink-0 text-blue-700" /></a>)}
          </div></div>
          <div className="rounded-md border border-slate-200 p-6 md:p-8"><h2 className="mb-7 text-2xl font-semibold tracking-tight">Start an inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "sending"}>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <fieldset disabled={status === "sending"} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="name" className="mb-2 block text-sm font-medium">Full name <span className="text-slate-500">(required)</span></label><Input id="name" name="name" autoComplete="name" required className="min-h-12" /></div><div><label htmlFor="email" className="mb-2 block text-sm font-medium">Email <span className="text-slate-500">(required)</span></label><Input id="email" name="email" type="email" autoComplete="email" required className="min-h-12" /></div></div>
              <div><label htmlFor="company" className="mb-2 block text-sm font-medium">Company</label><Input id="company" name="company" autoComplete="organization" className="min-h-12" /></div>
              <div><label htmlFor="message" className="mb-2 block text-sm font-medium">How can we help? <span className="text-slate-500">(required)</span></label><Textarea id="message" name="message" rows={5} required placeholder="Materials, application, or order details…" /></div>
              <button type="submit" disabled={!formEndpoint || status === "sending"} className="button-primary disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Sending…" : "Send inquiry"} <ArrowRight size={18} /></button>
              </fieldset>
              {!formEndpoint && <p className="text-sm text-slate-600">Online inquiries are currently unavailable. Please <a href="mailto:info@will-cool.com" className="font-medium text-blue-700 underline">email our team</a>.</p>}
              {status === "success" && <p role="status" className="rounded border border-green-200 bg-green-50 p-4 text-sm text-green-800">Thank you. Your inquiry has been submitted to our team.</p>}
              {status === "error" && <p role="alert" className="rounded border border-red-200 bg-red-50 p-4 text-sm text-red-800">{errorMessage}</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
