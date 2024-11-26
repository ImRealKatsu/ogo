import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2">
          Contato: <Mail className="w-5 h-5 text-green-400" />
          <a href="mailto:suporte@riquezatotal.site" className="text-green-400 hover:underline">
            suporte@riquezatotal.site
          </a>
        </p>
      </div>
    </footer>
  )
}
