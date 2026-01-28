import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

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
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // TODO: Uncomment when Google Analytics Measurement ID is available
              /*
              // Check consent before loading GA
              const consent = document.cookie
                .split('; ')
                .find(row => row.startsWith('analytics_consent='));
              
              if (consent && consent.split('=')[1] === 'true') {
                // Google Analytics
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX', {
                  anonymize_ip: true,
                });
                
                // Load GA script
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
                script.async = true;
                document.head.appendChild(script);
              }
              */
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
