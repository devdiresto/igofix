export default function PrivacyPolicy() {
  return (
    <div className="bg-[#080c10] text-[#e8f0f8] min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-8 transition-colors">
            ← Voltar ao site
          </a>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#6b7f92]">
            Última atualização: Abril de 2026
          </p>
        </div>

        {/* Conteúdo */}
        <article className="space-y-8">

          {/* Introdução */}
          <section>
            <p className="text-[#6b7f92] leading-relaxed text-lg">
              A <strong>IGo Service</strong> valoriza sua privacidade e está comprometida com a proteção de dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, protegemos e compartilhamos suas informações, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e outras legislações aplicáveis no Brasil.
            </p>
          </section>

          {/* 1. Dados Coletados */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Dados que coletamos</h2>
            <p className="text-[#6b7f92] leading-relaxed mb-4">
              Podemos coletar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92]">
              <li>Nome completo e sobrenome</li>
              <li>Número de telefone e endereço de e-mail</li>
              <li>Endereço residencial ou comercial para atendimento</li>
              <li>Informações sobre o tipo de atendimento solicitado</li>
              <li>Dados de pagamento (quando aplicável)</li>
              <li>Histórico de interações e comunicações</li>
              <li>Informações técnicas do dispositivo (IP, navegador, etc.)</li>
              <li>Dados de geolocalização (apenas quando autorizado)</li>
            </ul>
          </section>

          {/* 2. Finalidades */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Para que usamos seus dados</h2>
            <p className="text-[#6b7f92] leading-relaxed mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92]">
              <li>Prestar o serviço de atendimento solicitado</li>
              <li>Agendar e confirmar atendimentos</li>
              <li>Comunicação com você sobre seu atendimento</li>
              <li>Processamento de pagamentos</li>
              <li>Melhoria contínua de nossos serviços</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Análise de segurança e prevenção de fraudes</li>
              <li>Envio de informações sobre atualizações e promoções (com consentimento)</li>
              <li>Pesquisa de satisfação e feedback dos clientes</li>
            </ul>
          </section>

          {/* 3. Base Legal */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Base legal para coleta e uso</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              O processamento de seus dados é realizado com base em:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92] mt-4">
              <li><strong>Execução de contrato:</strong> Dados necessários para prestar o serviço contratado</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Dados necessários para cumprir a lei</li>
              <li><strong>Consentimento:</strong> Quando você concorda com envio de comunicações promocionais</li>
              <li><strong>Interesse legítimo:</strong> Melhorar serviços e prevenir fraudes</li>
            </ul>
          </section>

          {/* 4. Compartilhamento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de dados</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              <strong>Não compartilhamos seus dados pessoais com terceiros</strong>, exceto quando:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92] mt-4">
              <li>Necessário para executar o serviço (ex: processador de pagamento)</li>
              <li>Exigido por lei ou autoridade competente</li>
              <li>Para proteger nossos direitos legais</li>
              <li>Com seu consentimento prévio</li>
            </ul>
            <p className="text-[#6b7f92] leading-relaxed mt-4">
              Qualquer terceiro que acesse seus dados é obrigado a manter confidencialidade e usar os dados apenas para fins específicos.
            </p>
          </section>

          {/* 5. Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Segurança das informações</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92] mt-4">
              <li>Acesso não autorizado</li>
              <li>Alteração, perda ou destruição</li>
              <li>Vazamento ou divulgação</li>
              <li>Ataques cibernéticos</li>
            </ul>
            <p className="text-[#6b7f92] leading-relaxed mt-4">
              Apesar dos esforços, nenhum sistema é 100% seguro. Se detectarmos uma violação de dados, notificaremos você conforme exigido pela lei.
            </p>
          </section>

          {/* 6. Cookies e Rastreamento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies e rastreamento</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Nosso site utiliza cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92] mt-4">
              <li>Melhorar a experiência do usuário</li>
              <li>Analisar estatísticas de acesso</li>
              <li>Personalizar conteúdo</li>
              <li>Rastrear conversões (Google Ads)</li>
            </ul>
            <p className="text-[#6b7f92] leading-relaxed mt-4">
              Você pode controlar cookies nas configurações do seu navegador. Desabilitar cookies pode afetar a funcionalidade do site.
            </p>
          </section>

          {/* 7. Retenção de dados */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Quanto tempo retemos seus dados</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Mantemos seus dados pessoais apenas pelo tempo necessário para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92] mt-4">
              <li>Prestar o serviço contratado</li>
              <li>Cumprir obrigações legais (até 5 anos para registros fiscais)</li>
              <li>Resolver disputas</li>
              <li>Proteger nossos direitos legais</li>
            </ul>
            <p className="text-[#6b7f92] leading-relaxed mt-4">
              Após esse período, seus dados serão deletados ou anonimizados.
            </p>
          </section>

          {/* 8. Seus Direitos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Seus direitos (LGPD)</h2>
            <p className="text-[#6b7f92] leading-relaxed mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6b7f92]">
              <li><strong>Acessar:</strong> Saber quais dados temos sobre você</li>
              <li><strong>Corrigir:</strong> Atualizar dados imprecisos ou incompletos</li>
              <li><strong>Deletar:</strong> Solicitar exclusão de seus dados</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Revogar consentimento:</strong> Parar o processamento baseado em consentimento</li>
              <li><strong>Contestar:</strong> Questionar processamento legítimo de dados</li>
              <li><strong>Oposição:</strong> Opor-se a marketing direto</li>
            </ul>
            <p className="text-[#6b7f92] leading-relaxed mt-4">
              Para exercer qualquer desses direitos, entre em contato conosco conforme indicado na seção de contato.
            </p>
          </section>

          {/* 9. Dados de menores */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Proteção de menores de idade</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Nossos serviços não são direcionados a menores de 18 anos. Se descobrirmos que coletamos dados de um menor sem consentimento dos pais ou responsáveis, deletaremos imediatamente.
            </p>
          </section>

          {/* 10. Contato e Exercício de Direitos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Como entrar em contato</h2>
            <p className="text-[#6b7f92] leading-relaxed mb-4">
              Para exercer seus direitos ou tirar dúvidas sobre esta política:
            </p>
            <div className="bg-[#111820] border border-teal-500/15 rounded-lg p-6">
              <p className="text-[#6b7f92] mb-4">
                <strong className="text-white">WhatsApp:</strong><br />
                <a href="https://wa.me/5551994309788" className="text-teal-400 hover:text-teal-300">(51) 9 9430-9788</a>
              </p>
              <p className="text-[#6b7f92]">
                <strong className="text-white">Localização:</strong><br />
                Cachoeirinha, RS - Brasil
              </p>
            </div>
          </section>

          {/* 11. Alterações */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Alterações nesta política</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Podemos atualizar esta política ocasionalmente. Alterações significativas serão comunicadas via e-mail ou aviso destacado no site. Seu uso contínuo do site após mudanças constitui aceitação da política atualizada.
            </p>
          </section>

          {/* 12. Lei Aplicável */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Lei aplicável</h2>
            <p className="text-[#6b7f92] leading-relaxed">
              Esta Política de Privacidade é regida pela <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e pelas leis brasileiras aplicáveis.
            </p>
          </section>

        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-teal-500/10 text-center">
          <p className="text-[#6b7f92] mb-6">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp
          </p>
          <a
            href="https://wa.me/5551994309788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-400 text-black font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all"
          >
            ✓ Abrir WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
