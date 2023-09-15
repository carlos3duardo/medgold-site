import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const font = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedGold',
  description: 'MedGold - Saúde + Benefícios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  )
}
