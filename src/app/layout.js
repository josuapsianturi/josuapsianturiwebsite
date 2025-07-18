import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'josua sianturi',
  description: 'josua sianturi',
  keywords: 'josuasianturi, josua, josua putra sianturi',
  author: 'Josua Sianturi',
  image: 'https://www.josuasianturi.com/_next/image?url=%2Fjosua.png&w=384&q=75&dpl=dpl_BFUSbtTphUsQFNt89V5yRxDKpBcC',
  url: 'https://www.josuapsianturi.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph meta tags for better social media sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags for better sharing on Twitter */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {children} 
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
