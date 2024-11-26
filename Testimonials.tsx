import Image from 'next/image'
import { Star, StarHalf } from 'lucide-react'

const testimonials = [
  { 
    id: 1,
    name: "Ana Silva", 
    role: "Empreendedora", 
    image: "https://images.unsplash.com/photo-1632318676766-a64e84632e31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlc3NvYXN8ZW58MHx8MHx8fDA%3D", 
    quote: "O eBook foi fundamental para a minha transição de CLT para empreendedora. Hoje consigo faturar cerca de R$15.000 mensais com o meu negócio, o que me proporciona mais liberdade e qualidade de vida.", 
    rating: 4.5,
    income: "R$15.000/mês"
  },
  { 
    id: 2,
    name: "Carlos Oliveira", 
    role: "Consultor Financeiro", 
    image: "https://images.unsplash.com/photo-1712189142408-39a2e77645d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", 
    quote: "Com o conteúdo do eBook, consegui melhorar a rentabilidade dos meus investimentos. Hoje consigo uma média de R$20.000 mensais com meus aportes e consultorias.", 
    rating: 4.5,
    income: "R$20.000+/mês"
  },
  { 
    id: 3,
    name: "Mariana Santos", 
    role: "Empresária Digital", 
    image: "https://images.unsplash.com/photo-1652476959529-737ff4a82ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8", 
    quote: "Após ler o eBook, consegui criar um negócio online que me proporciona uma renda de R$25.000 mensais, o que me deu mais flexibilidade para passar mais tempo com a minha família.", 
    rating: 5,
    income: "R$25.000/mês"
  },
  {
    id: 4,
    name: "Roberto Lima",
    role: "Investidor Independente",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "Graças ao eBook, aprendi estratégias que me permitiram criar uma carteira de investimentos sólida. Hoje tenho uma renda passiva de R$22.000 por mês e total liberdade financeira.",
    rating: 5,
    income: "R$22.000/mês"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const starId = `star-${i}`
        if (i < Math.floor(rating)) {
          return <Star key={starId} className="text-yellow-400 w-5 h-5 fill-current" />
        } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={starId} className="text-yellow-400 w-5 h-5 fill-current" />
        } else {
          return <Star key={starId} className="text-gray-400 w-5 h-5" />
        }
      })}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="resultados" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-400">Histórias de Sucesso</h2>
        <p className="text-xl text-center mb-12">Veja como nossos alunos transformaram suas vidas saindo do CLT</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-green-400">{testimonial.role}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="italic my-4">{testimonial.quote}</p>
              </div>
              <p className="text-green-400 font-bold mt-4">Renda Atual: {testimonial.income}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
