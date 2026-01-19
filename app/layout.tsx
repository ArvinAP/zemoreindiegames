import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Zemore Indie Games - For Indies. By Indies.',
  description: 'Empowering independent game developers to bring their creative visions to life. We\'re more than a publisher—we\'re your partner in success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-dark-bg text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
