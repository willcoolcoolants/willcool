import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LandingIntro from "@/components/landing-intro"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "WillCool | Metal Cutting Fluids & Lubricants",
  description: "Quality. Integrity. Service. Explore WillCool FLX1 synthetic and WillCool APX semi-synthetic fluids for machining and grinding."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/willcool-logo.svg`} type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <LandingIntro />
        {children}
      </body>
    </html>
  )
}
