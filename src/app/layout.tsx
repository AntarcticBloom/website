import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'antarctic bloom',
  description:
    'A 501(c)(3) and software development collective dedicated to making the world more hospitable for everyone.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${dmMono.variable} ${dmSans.variable}`}>{children}</body>
  </html>
)

export default RootLayout
