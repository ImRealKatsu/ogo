'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { id: 1, name: 'Segredo', href: '#segredo', description: 'Descubra o que os ricos não querem que você saiba' },
    { id: 2, name: 'Método', href: '#metodo', description: 'Conheça o sistema comprovado para multiplicar sua renda' },
    { id: 3, name: 'Resultados', href: '#resultados', description: 'Veja histórias reais de pessoas que mudaram de vida' },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">RiquezaTotal</Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link 
                href={item.href} 
                className="text-white hover:text-green-400 transition-colors duration-300 flex items-center"
              >
                {item.name} <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {hoveredItem === item.name && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <p className="block px-4 py-2 text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Button 
          className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = 'https://pay.cakto.com.br/8cC33Vu'}
        >
          <ShoppingCart className="mr-2" /> Quero Liberdade Financeira
        </Button>
      </div>
    </header>
  )
}
