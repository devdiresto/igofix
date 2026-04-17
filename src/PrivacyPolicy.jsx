
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080c10] text-[#e8f0f8] px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Política de Privacidade
        </h1>

        <p className="text-sm text-[#6b7f92] mb-10">
          Última atualização: Abril de 2026
        </p>

        {/* Introdução */}
        <section className="mb-8">
          <p className="text-[#6b7f92] leading-relaxed">
            A IGo Delivery valoriza a sua privacidade e se compromete a proteger
            os dados pessoais coletados em nosso site. Esta Política de Privacidade
            descreve como coletamos, usamos e protegemos suas informações, em
            conformidade com a legislação aplicável, incluindo a Lei Geral de
            Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
        </section>

        {/* Coleta */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            1. Dados coletados
          </h2>
          <p className="text-[#6b7f92] leading-relaxed mb-3">
            Podemos coletar as seguintes informações:
          </p>
          <ul className="list-disc pl-5 text-[#6b7f92] space-y-2">
            <li>Nome e número de telefone (via WhatsApp)</li>
            <li>Endereço para atendimento</li>
            <li>Informações sobre o dispositivo (modelo do iPhone e problema relatado)</li>
          </ul>
        </section>

        {/* Uso */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            2. Uso das informações
          </h2>
          <p className="text-[#6b7f92] leading-relaxed">
            Utilizamos seus dados para:
          </p>
          <ul className="list-disc pl-5 text-[#6b7f92] space-y-2 mt-3">
            <li>Realizar atendimento e suporte técnico</li>
            <li>Agendar visitas e serviços</li>
            <li>Entrar em contato com você</li>
            <li>Melhorar nossos serviços</li>
          </ul>
        </section>

        {/* Compartilhamento */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            3. Compartilhamento de dados
          </h2>
          <p className="text-[#6b7f92] leading-relaxed">
            Não compartilhamos seus dados com terceiros, exceto quando necessário
            para cumprimento de obrigações legais ou prestação do serviço solicitado.
          </p>
        </section>

        {/* Segurança */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            4. Segurança das informações
          </h2>
          <p className="text-[#6b7f92] leading-relaxed">
            Adotamos medidas técnicas e organizacionais para proteger seus dados
            contra acesso não autorizado, perda ou alteração.
          </p>
        </section>

        {/* Direitos */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            5. Seus direitos
          </h2>
          <p className="text-[#6b7f92] leading-relaxed">
            Você tem o direito de acessar, corrigir ou solicitar a exclusão dos
            seus dados pessoais a qualquer momento.
          </p>
        </section>

        {/* Contato */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">
            6. Contato
          </h2>
          <p className="text-[#6b7f92] leading-relaxed">
            Em caso de dúvidas sobre esta política, entre em contato pelo WhatsApp:
            <br />
            <strong className="text-teal-400">(51) 9 9430-9788</strong>
          </p>
        </section>

        {/* Botão voltar */}
        <div className="mt-12">
          <a
            href="/"
            className="inline-block bg-teal-400 text-black font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            ← Voltar ao site
          </a>
        </div>

      </div>
    </div>
  );
}