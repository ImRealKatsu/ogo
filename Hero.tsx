'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-400">Cansado da Rotina CLT?</h1>
        <p className="text-xl md:text-2xl mb-8">Descubra como se tornar milionário e conquistar a verdadeira liberdade para viver com sua família</p>
        <div id="segredo" className="w-full max-w-3xl mx-auto mb-8">
          <div className="relative pt-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/zSvguk-VsDc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4 rounded-full animate-pulse transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = 'https://pay.cakto.com.br/8cC33Vu'}
          >
            Quero Liberdade Financeira <ArrowRight className="ml-2" />
          </Button>
          <p className="mt-4 text-yellow-400">Vagas limitadas! Descubra o segredo que os milionários não querem que você saiba.</p>
        </div>
      </div>
    </section>
  )
}
