import { DollarSign, TrendingUp, Clock, Users, Briefcase, Plane } from 'lucide-react'

const features = [
  { id: 1, icon: DollarSign, title: "Renda Exponencial", description: "Aprenda a gerar 10x mais do que seu salário CLT atual." },
  { id: 2, icon: TrendingUp, title: "Investimentos de Alto Retorno", description: "Descubra onde os ricos realmente investem para obter retornos surpreendentes." },
  { id: 3, icon: Clock, title: "Liberdade de Tempo", description: "Diga adeus ao ponto eletrônico e olá para uma vida sem horários fixos." },
  { id: 4, icon: Users, title: "Rede de Influência", description: "Conecte-se com empreendedores de sucesso que vão impulsionar sua jornada." },
  { id: 5, icon: Briefcase, title: "Adeus CLT", description: "Estratégias comprovadas para sair do regime CLT e se tornar seu próprio chefe." },
  { id: 6, icon: Plane, title: "Estilo de Vida dos Sonhos", description: "Viaje o mundo, passe mais tempo com a família e viva seus sonhos." },
]

export default function Features() {
  return (
    <section id="metodo" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-400">O Que Você Vai Conquistar</h2>
        <p className="text-xl text-center mb-12">Prepare-se para uma transformação de vida que vai muito além do financeiro</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <feature.icon className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
