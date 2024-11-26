import { BookOpen, Video, Users, Award } from 'lucide-react'

const steps = [
  { icon: BookOpen, title: "Material Didático Exclusivo", description: "Acesse conteúdo premium desenvolvido por especialistas do mercado financeiro." },
  { icon: Video, title: "Aulas em Vídeo", description: "Assista a aulas detalhadas e práticas para aplicar imediatamente." },
  { icon: Users, title: "Mentoria em Grupo", description: "Participe de sessões de mentoria ao vivo com nossos instrutores." },
  { icon: Award, title: "Certificação", description: "Receba um certificado reconhecido ao concluir o curso." },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <step.icon className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
