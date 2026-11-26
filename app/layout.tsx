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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const metadata: Metadata = {
  title: "WillCool | Metal Cutting Fluids & Lubricants",
  icons: {
    icon: [{ url: `${basePath}/favicon.png`, sizes: "96x96", type: "image/png" }],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
  },
  description: "Quality. Integrity. Service. Explore WillCool FLX1 synthetic and WillCool APX semi-synthetic fluids for machining and grinding."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LandingIntro />
        {children}
      </body>
    </html>
  )
}
