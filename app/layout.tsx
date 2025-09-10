import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joanna\'s Art Portfolio',
  description: 'A collection of my artwork, including sketches, paintings, and digital art.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
