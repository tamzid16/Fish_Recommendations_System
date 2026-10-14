import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import UserAuth from './components/UserAuth'
import { Fish, Waves } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fish Recommendations System',
  description: 'Explore fish species based on purpose, habitat and care conditions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <header className="site-header">
            <a className="brand" href="/" aria-label="Fish Recommendations System home">
              <span className="brand-mark"><Fish size={23} strokeWidth={2.1} /></span>
              <span className="brand-name">Aqua<span>Guide</span><small>FISH RECOMMENDATIONS</small></span>
            </a>
            <div className="header-right"><span className="header-status"><Waves size={15} /> Explore aquatic life</span><UserAuth /></div>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer"><span className="footer-brand"><span className="footer-dot" /> AquaGuide</span><span>Thoughtful choices start with better information.</span><span>Fish Recommendations System</span></footer>
        </body>
      </SessionProvider>
    </html>
  )
}
