import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    { question: "Quanto tempo leva para ver resultados?", answer: "Os resultados variam de pessoa para pessoa, mas muitos de nossos leitores começam a ver melhorias significativas em suas finanças dentro de 3 a 6 meses após iniciar a leitura do eBook." },
    { question: "Preciso ter conhecimento prévio em finanças?", answer: "Não, nosso eBook é projetado para atender desde iniciantes até pessoas com conhecimento intermediário em finanças." },
    { question: "O eBook oferece garantia de resultados?", answer: "Oferecemos uma garantia de satisfação de 7 dias. Se você não estiver satisfeito, devolveremos 100% do seu investimento." },
    { question: "Quanto tempo tenho acesso ao conteúdo do eBook?", answer: "Você terá acesso vitalício ao conteúdo do eBook, incluindo todas as atualizações futuras." },
    { question: "Existe suporte disponível durante a leitura do eBook?", answer: "Sim, oferecemos suporte via e-mail." },
  ]
  
  export default function FAQ() {
    return (
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  