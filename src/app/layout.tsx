import Header from '@/Components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Tourism',
  description: 'Explore the universe with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+"overflow-x-hidden"}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
