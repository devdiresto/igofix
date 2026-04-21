// App.jsx - Estrutura aprovada Google Ads (SmartPower style)
// Serviço de Atendimento Domiciliar
// Stack: React + Tailwind CSS

import React from "react";
import logo from "./assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "5551994309788";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20domiciliar`;

const DIFERENCIAIS = [
  {
    icon: "🏠",
    title: "Vamos até Você",
    desc: "Atendimento em domicílio, trabalho ou onde preferir. Zero deslocamento da sua parte.",
  },
  {
    icon: "⚡",
    title: "Rápido e Eficiente",
    desc: "A maioria dos atendimentos é concluída em até 1 hora. Você acompanha tudo.",
  },
  {
    icon: "🛡️",
    title: "Garantia de 90 Dias",
    desc: "Serviço com garantia. Se houver problema, resolvemos novamente sem custo extra.",
  },
  {
    icon: "👨‍💼",
    title: "Profissionais Qualificados",
    desc: "Mais de 500 atendimentos realizados com sucesso. Equipe experiente e confiável.",
  },
  {
    icon: "✓",
    title: "Qualidade Garantida",
    desc: "Utilizamos peças de qualidade e técnicas avançadas. Compromisso com sua satisfação.",
  },
  {
    icon: "💰",
    title: "Preço Justo",
    desc: "Avaliação gratuita. Você sabe o custo antes de autorizar o serviço.",
  },
];

const AVALIACOES = [
  {
    name: "Maria S.",
    text: "Não precisei sair de casa! Profissional muito atencioso. Serviço rápido e bem feito. Recomendo!",
    rating: 5,
  },
  {
    name: "João P.",
    text: "Excelente atendimento. Chegou no horário, diagnosticou rápido e resolveu na hora. Muito bom!",
    rating: 5,
  },
  {
    name: "Ana C.",
    text: "Adorei! Profissional qualificado, explicou tudo certinho. A garantia de 90 dias me tranquilizou.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "Melhor assistência que já usei. Sem esperar na fila, sem deslocamento. Perfeito!",
    rating: 5,
  },
];

const SERVICOS = [
  {
    icon: "📱",
    titulo: "Tela",
    texto: "Substituição completa do display. Resolve rachaduras, manchas, touch sem resposta e problemas de tela.",
  },
  {
    icon: "🔋",
    titulo: "Bateria",
    texto: "Bateria nova com 100% de capacidade. Resolve descarregamento rápido, desligamentos e superaquecimento.",
  },
  {
    icon: "🔧",
    titulo: "Troca de Componentes",
    texto: "Substituição de componentes: câmera, microfone, conector de carga, alto-falante e muito mais.",
  },
];

function LandingPage() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-teal-600 to-blue-600">
              <img src={logo} alt="IGo Service" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-lg">
              IGo<span className="text-teal-600">Service</span>
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Solicitar Agora
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO / CHAMADA PRINCIPAL COM IMAGEM ── */}
        <section 
          className="relative py-32 px-6 min-h-screen flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('/hero-iphone.png')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'right bottom',
            backgroundSize: '55%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay escuro para melhorar legibilidade */}
         <div className="absolute inset-0 bg-black/40" />
          
          {/* Conteúdo texto sobre a imagem */}
          <div className="relative z-10 max-w-4xl text-left pl-20">
            <div className="mb-8 flex justify-start">
              <img src={logo} alt="IGo Service" className="w-24 h-24 drop-shadow-lg" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Seja bem-vindo à <span className="text-teal-300">IGo Service</span>!
            </h1>
            
            <p className="text-xl text-white/95 mb-10 max-w-2xl leading-relaxed drop-shadow-lg font-medium">
              Atendimento profissional <strong>na sua porta</strong>. Você continua em casa, nós vamos até você. 
              Serviço rápido, de qualidade e com garantia de 90 dias.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blanks"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 text-white font-bold px-10 py-4 rounded-lg hover:bg-teal-600 transition text-lg shadow-xl hover:shadow-2xl"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Experiência e qualidade para atender todas as suas necessidades. 
            Atendimento domiciliar sem deslocamento, rápido e eficiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFERENCIAIS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white font-bold px-10 py-4 rounded-lg hover:bg-teal-700 transition"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>
        </section>

        {/* ── SOBRE / MISSÃO ── */}
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sabemos como é difícil ficar sem seu celular, notebook ou outros equipamentos. 
              Esses aparelhos fazem parte do seu dia a dia, do trabalho ao lazer. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A <strong>IGo Service</strong> vai além da parte técnica: 
              entregamos <strong>confiança, cuidado e transparência</strong>. 
              Vamos até você, realizamos o atendimento na hora, e você só paga quando estiver 100% satisfeito.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cuidamos de cada detalhe com responsabilidade, porque entendemos que o que está em jogo 
              é a sua <strong>conexão com o que mais importa</strong>.
            </p>

            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white font-bold px-10 py-4 rounded-lg hover:bg-teal-700 transition"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS / COMO FUNCIONA ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Serviços para iPhone
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Atendemos todos os modelos de iPhone. Escolha o serviço que seu celular precisa!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICOS.map(({ icon, titulo, texto }) => (
              <div key={titulo} className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition">
                <div className="text-6xl mb-6">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{titulo}</h3>
                <p className="text-gray-600 mb-6 text-sm">{texto}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-teal-700 transition"
                >
                  Solicitar Orçamento
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── AVALIAÇÕES ── */}
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Veja o que nossos clientes dizem!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AVALIACOES.map(({ name, text, rating }) => (
                <div key={name} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic min-h-12">"{text}"</p>
                  <p className="font-bold text-gray-900 text-sm">— {name}</p>
                </div>
              ))}
            </div>

            {/* Google Review Badge Placeholder */}
            <div className="text-center mt-12">
              <div className="inline-block bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Avaliações no Google</p>
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <span className="font-bold text-gray-900">4.9/5.0</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">500+ avaliações</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Visite nossa base de atendimento!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">IGo Service</h3>
              <p className="text-gray-700 mb-4">
                <strong>Localização:</strong><br/>
                Cachoeirinha, RS
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Horário de Atendimento:</strong><br/>
                Segunda a Sábado: 08:00h às 20:00h
              </p>
              <p className="text-gray-700 mb-6">
                <strong>WhatsApp:</strong><br/>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline">
                  (51) 9 9430-9788
                </a>
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                ENTRE EM CONTATO
              </a>
            </div>

            {/* Mapa Embed */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-51.5!3d-29.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIGo%20Service!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Links Sociais + Badge Google */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-gray-700">
            
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                WhatsApp
              </a>
              <a href="https://instagram.com/igofix_br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Facebook
              </a>
            </div>

            {/* Google Business Badge - Placeholder */}
            <div className="text-center text-sm">
              <p className="text-gray-400 mb-2">Avaliações verificadas</p>
              <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.9/5 (500+)</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 IGo Service. Todos os direitos reservados.</p>
            <p>
              <Link to="/politica-de-privacidade" className="hover:text-white transition">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* ── CTA FLUTUANTE ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition animate-pulse"
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline">Agendar</span>
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.114 1.527 5.845L0 24l6.335-1.527A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.656-.493-5.191-1.357l-.371-.22-3.763.907.923-3.667-.242-.381A9.95 9.95 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}
