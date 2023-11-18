import { Inter, Noto_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Code Interns',
  description: 'Maximum help for self-learners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans.variable}>{children}</body>
    </html>
  )
}