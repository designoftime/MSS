import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mega Solar Solutions',
  description: 'Premium solar energy solutions for residential and commercial properties.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white bg-midnight-950`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
