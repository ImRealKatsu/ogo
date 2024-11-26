import './globals.css'

import { Inter } from 'next/font/google'

import Header from '@/components/Header'

import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {

  title: 'Curso de Liberdade Financeira',

  description: 'Conquiste sua liberdade financeira com nosso curso exclusivo',

}


export default function RootLayout({

  children,

}: {

  children: React.ReactNode

}) {

  return (

    <html lang="pt-BR">

      <body className={inter.className}>

        <Header />

        {children}

        <Footer />

      </body>

    </html>

  )

}

