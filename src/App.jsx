// App.jsx - TEMA CLARO
// Serviço de Atendimento Domiciliar
// Otimizado para evitar restrições de anúncios
// Stack: React + Tailwind CSS

import React, { useState } from "react";
import logo from "./assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "5551994309788";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20domiciliar`;

const DIFERENCIAIS = [
  {
    icon: "🏠",
    title: "Sem deslocamento",
    desc: (
      <>
        Você fica em casa ou no trabalho. <strong className="text-teal-600 font-semibold">Zero deslocamento</strong> — vamos até você.
      </>
    ),
  },
  {
    icon: "⚡",
    title: "Rápido e eficiente",
    desc: (
      <>
        A maioria dos atendimentos é concluída <strong className="text-teal-600 font-semibold">em até 1 hora</strong>. Você acompanha tudo em tempo real.
      </>
    ),
  },
  {
    icon: "🛡️",
    title: "Garantia de satisfação",
    desc: (
      <>
        Todo serviço tem <strong className="text-teal-600 font-semibold">garantia de 90 dias</strong>. Qualidade garantida ou sua volta sem custo.
      </>
    ),
  },
  {
    icon: "✓",
    title: "Profissional qualificado",
    desc: (
      <>
        <strong className="text-teal-600 font-semibold">Mais de 500 atendimentos</strong> realizados com excelência e confiança.
      </>
    ),
  },
];

const SERVICOS = [
  {
    icon: "📱",
    title: "Serviço Premium",
    desc: "Atendimento completo com diagnóstico, orientação e solução rápida. Inclui avaliação gratuita e consultoria técnica.",
    tag: "Mais escolhido",
  },
  {
    icon: "⚙️",
    title: "Otimização",
    desc: "Serviço de otimização e manutenção preventiva. Deixe seu dispositivo em perfeito funcionamento.",
    tag: "Recomendado",
  },
  {
    icon: "🔄",
    title: "Substituição de Componentes",
    desc: "Serviço completo com peças de alta qualidade. Solução rápida e durável com garantia estendida.",
    tag: "Popular",
  },
  {
    icon: "🎯",
    title: "Avaliação Técnica",
    desc: "Diagnóstico completo gratuito. Identificamos o problema e apresentamos opções de solução.",
    tag: "Sem custo",
  },
  {
    icon: "💎",
    title: "Serviço VIP",
    desc: "Atendimento prioritário com profissional especialista. Solução premium para demandas complexas.",
    tag: "Exclusivo",
  },
  {
    icon: "📞",
    title: "Suporte Contínuo",
    desc: "Suporte pós-serviço permanente. Tire dúvidas e receba orientações a qualquer momento.",
    tag: "Vitalício",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Envie sua solicitação",
    desc: "Envie uma mensagem pelo WhatsApp descrevendo sua necessidade e sua localização em Porto Alegre.",
  },
  {
    n: "2",
    title: "Agende o atendimento",
    desc: "Escolha o melhor horário e local para você — casa, trabalho ou onde preferir. Nos adaptamos à sua rotina.",
  },
  {
    n: "3",
    title: "Profissional qualificado",
    desc: (
      <>
        Um profissional especializado chegará no horário combinado, fará uma <strong className="text-teal-600 font-semibold">avaliação completa</strong> e apresentará as opções.
      </>
    ),
  },
  {
    n: "4",
    title: "Serviço e garantia",
    desc: (
      <>
        Realizamos o trabalho com qualidade, você aprova e apenas então faz o pagamento. <strong className="text-teal-600 font-semibold">100% satisfeito</strong> ou sem custo.
      </>
    ),
  },
];

const TESTIMONIALS = [
  {
    name: "Maria S.",
    text: "Serviço impecável! Profissional muito atencioso e rápido. Recomendo para todos os meus amigos.",
    rating: 5,
  },
  {
    name: "João P.",
    text: "Não precisei sair de casa. Agendei e ele veio no horário. Muito bom mesmo!",
    rating: 5,
  },
  {
    name: "Ana C.",
    text: "Garantia de 90 dias me tranquilizou muito. Confio no trabalho deles.",
    rating: 5,
  },
];

function LandingPage() {
  const [ctaPosition, setCtaPosition] = useState(0);

  return (
    <div className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
            <img src={logo} alt="IGo Delivery Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-base tracking-tight text-gray-900">
            IGo<span className="text-teal-600">Service</span>
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
        >
          Solicitar Agora
        </a>
      </header>

      <main>

        {/* ── HERO PREMIUM ── */}
        <section className="relative min-h-screen flex items-center pt-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="hero-title">
          
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(13,148,136,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(59,130,246,0.07) 0%, transparent 60%)",
          }} />
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(13,148,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          <div className="relative w-full max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-teal-700 text-sm font-medium mb-8">
              <span className="text-[8px] animate-pulse">●</span>
              Atendimento em Porto Alegre e região
            </div>

            <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 max-w-3xl">
              Serviço Profissional <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                na sua Porta
              </span>
            </h1>

            <p className="text-xl text-gray-600 font-light max-w-2xl mb-12">
              Você continua em casa. Nosso profissional vai até você. Serviço rápido, de qualidade e com garantia. Sem deslocamento. Sem burocracia.
            </p>

            {/* CTAs Principais - GRANDES */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <WhatsAppIcon />
                SOLICITAR ATENDIMENTO
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-600 font-bold px-10 py-5 rounded-xl text-lg hover:bg-teal-50 transition-all"
              >
                Saber Mais →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              {[
                { n: "500+", label: "Atendimentos realizados" },
                { n: "90d", label: "Garantia" },
                { n: "~1h", label: "Tempo médio" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <span className="text-4xl font-extrabold text-gray-900">{n}</span>
                  <p className="text-sm text-gray-600 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FIXO MEIO DO SITE ── */}
        <div className="sticky top-20 z-40 mx-6 mb-8">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-3">Pronto para agendar?</h3>
            <p className="text-white/90 mb-6">Clique abaixo ou envie uma mensagem no WhatsApp</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold px-12 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg"
            >
              <WhatsAppIcon />
              AGENDAR AGORA
            </a>
          </div>
        </div>

        {/* ── VÍDEO REEL (PROVA SOCIAL) ── */}
        <section className="max-w-2xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase">
              Veja na prática
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 mb-4">
              Atendimento em ação
            </h2>
          </div>

          {/* Video Reel Container - Formato vertical (9:16) */}
          <div className="flex justify-center">
            <div className="relative w-full sm:w-96 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-black" style={{ paddingBottom: '177.78%', height: 0, maxWidth: '400px' }}>
              <iframe
                src="https://player.vimeo.com/video/1184600074?"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>

          {/* CTA após vídeo */}
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-teal-700 transition-all"
            >
              <WhatsAppIcon />
              Agendar Agora
            </a>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="max-w-6xl mx-auto px-6 py-20" aria-labelledby="diff-title">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase">
              Por que escolher a gente
            </span>
            <h2 id="diff-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3">
              Diferencial de verdade
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFERENCIAIS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-teal-300 hover:-translate-y-2 transition-all hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center text-3xl mb-5">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVIÇOS DISPONÍVEIS ── */}
        <div id="servicos" className="bg-gray-100 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase">
                O que oferecemos
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
                Opções de serviço
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Diferentes tipos de atendimento para diferentes necessidades. Todos com a mesma qualidade e garantia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {SERVICOS.map(({ icon, title, desc, tag }) => (
                <article
                  key={title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-teal-300 hover:-translate-y-2 transition-all hover:shadow-lg group"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-4xl mb-5 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1 mb-4">{desc}</p>
                  <span className="self-start text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 rounded-full px-4 py-2">
                    {tag}
                  </span>
                </article>
              ))}
            </div>

            {/* CTA dentro da seção */}
            <div className="text-center bg-teal-50 border border-teal-200 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qual é o seu tipo de atendimento?</h3>
              <p className="text-gray-600 mb-8">Fale com nosso especialista e encontre a melhor opção para você</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold px-12 py-4 rounded-lg hover:bg-teal-700 transition-all text-lg"
              >
                <WhatsAppIcon />
                CONVERSAR COM ESPECIALISTA
              </a>
            </div>
          </div>
        </div>

        {/* ── COMO FUNCIONA ── */}
        <section className="max-w-6xl mx-auto px-6 py-24" aria-labelledby="steps-title">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase">
              Processo simples
            </span>
            <h2 id="steps-title" className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="relative">
                {/* Linha conectora (apenas em desktop) */}
                {parseInt(n) < STEPS.length && (
                  <div className="hidden lg:block absolute top-12 left-[60px] right-0 h-0.5 bg-gradient-to-r from-teal-400 to-transparent" />
                )}
                
                <div className="flex flex-col gap-4">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center font-extrabold text-white text-3xl shadow-lg">
                    {n}
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Pronto para começar?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-12 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <WhatsAppIcon />
              ENVIAR MENSAGEM AGORA
            </a>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="bg-gray-100 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">O que nossos clientes dizem</h2>
              <p className="text-gray-600">Mais de 500 atendimentos com satisfação garantida</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(({ name, text, rating }) => (
                <div key={name} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <span key={i} className="text-xl text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">"{text}"</p>
                  <p className="font-semibold text-gray-900">— {name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <img src={logo} alt="IGo Service Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg">IGo<span className="text-teal-400">Service</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Serviço profissional de atendimento domiciliar em Porto Alegre. Qualidade, garantia e sem deslocamento.
            </p>
          </div>

          <nav aria-label="Navegação">
            <h4 className="font-bold text-xs text-white uppercase tracking-widest mb-5">Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Serviços</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Agendar</a></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-teal-400 transition-colors">Privacidade</Link></li>
            </ul>
          </nav>

          <address className="not-italic">
            <h4 className="font-bold text-xs text-white uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>📍 Cachoeirinha, RS</li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">📱 (51) 9 9430-9788</a></li>
              <li>🕘 Seg–Sáb: 8h às 20h</li>
              <li><a href="https://instagram.com/igofix_br" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">📸 Instagram</a></li>
            </ul>
          </address>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-xs text-gray-400">
          <span>© 2026 IGo Service. Todos os direitos reservados.</span>
          <Link to="/politica-de-privacidade" className="hover:text-teal-400 transition-colors">Política de Privacidade</Link>
        </div>
      </footer>

      {/* ── CTA FLUTUANTE WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensagem pelo WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white font-bold text-base px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition-all animate-pulse"
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
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.114 1.527 5.845L0 24l6.335-1.527A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.656-.493-5.191-1.357l-.371-.22-3.763.907.923-3.667-.242-.381A9.95 9.95 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}
