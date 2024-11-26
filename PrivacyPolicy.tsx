import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function PrivacyPolicy() {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Política de Privacidade</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Coleta de Informações</AccordionTrigger>
              <AccordionContent>
                Coletamos informações pessoais que você nos fornece voluntariamente ao se registrar para o curso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Uso de Informações</AccordionTrigger>
              <AccordionContent>
                Usamos suas informações para fornecer e melhorar nosso curso, bem como para comunicar-nos com você sobre atualizações e ofertas relacionadas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Proteção de Dados</AccordionTrigger>
              <AccordionContent>
                Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado ou alteração.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Compartilhamento de Dados</AccordionTrigger>
              <AccordionContent>
                Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Seus Direitos</AccordionTrigger>
              <AccordionContent>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    )
  }
  