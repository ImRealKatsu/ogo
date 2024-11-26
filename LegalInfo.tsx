import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function LegalInfo() {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Informações Legais</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about-us">
              <AccordionTrigger>Sobre Nós</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Somos um grupo de empreendedores e investidores de sucesso que se uniram com um objetivo em comum: ajudar pessoas a conquistarem sua liberdade financeira.
                </p>
                <p className="mb-4">
                  Após anos de experiência no mercado financeiro e tendo alcançado nossos próprios objetivos de riqueza e liberdade, decidimos criar este curso para compartilhar nossos conhecimentos e estratégias comprovadas.
                </p>
                <p>
                  Nossa missão é capacitar indivíduos a saírem do ciclo do trabalho CLT e construírem uma vida de abundância financeira e liberdade pessoal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="terms">
              <AccordionTrigger>Termos de Serviço</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="terms-1">
                    <AccordionTrigger>1. Aceitação dos Termos</AccordionTrigger>
                    <AccordionContent>
                      Ao acessar e usar este curso, você concorda em cumprir e estar vinculado a estes Termos de Serviço.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="terms-2">
                    <AccordionTrigger>2. Uso do Conteúdo</AccordionTrigger>
                    <AccordionContent>
                      Todo o conteúdo fornecido neste curso é apenas para fins educacionais. Você não pode reproduzir, distribuir ou vender qualquer parte do conteúdo sem permissão expressa.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="terms-3">
                    <AccordionTrigger>3. Política de Reembolso</AccordionTrigger>
                    <AccordionContent>
                      Todas as vendas são finais. Não oferecemos reembolsos para este curso.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy">
              <AccordionTrigger>Política de Privacidade</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="privacy-1">
                    <AccordionTrigger>1. Coleta de Informações</AccordionTrigger>
                    <AccordionContent>
                      Coletamos informações pessoais que você nos fornece voluntariamente ao se registrar para o curso.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy-2">
                    <AccordionTrigger>2. Uso de Informações</AccordionTrigger>
                    <AccordionContent>
                      Usamos suas informações para fornecer e melhorar nosso curso, bem como para comunicar-nos com você sobre atualizações e ofertas relacionadas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy-3">
                    <AccordionTrigger>3. Proteção de Dados</AccordionTrigger>
                    <AccordionContent>
                      Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado ou alteração.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    )
  }
  