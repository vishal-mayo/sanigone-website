import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Sanigone | Professional Antiviral Sanitisation', template: '%s | Sanigone' },
  description: 'UK-made antiviral sanitisation products killing 99.99% of viruses and bacteria. Trusted by homes, businesses, and healthcare professionals. EN-certified.',
  keywords: ['antiviral sanitiser', 'disinfectant spray', 'room sanitiser', 'dog disinfectant', 'EN 14476', 'UK made'],
  openGraph: {
    siteName: 'Sanigone',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
