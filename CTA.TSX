'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Pronto para Deixar o CLT para Trás?</h2>
        <p className="text-xl mb-8">A vida que você sempre sonhou está a um clique de distância. Não deixe o medo te impedir de alcançar a verdadeira liberdade.</p>
        <Button 
          size="lg" 
          className="bg-white text-green-600 hover:bg-gray-100 text-xl px-8 py-4 rounded-full animate-pulse transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = 'https://pay.cakto.com.br/8cC33Vu'}
        >
          Quero Liberdade Financeira <ArrowRight className="ml-2" />
        </Button>
        <p className="mt-4 text-sm text-green-200">Este Ebook oferece resultados comprovados quando aplicado corretamente. Lembre-se: o sucesso depende do seu comprometimento e dedicação.</p>
      </div>
    </section>
  )
}
