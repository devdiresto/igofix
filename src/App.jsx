// LandingPage.jsx
// Assistência Técnica de iPhone Delivery
// Otimizado para SEO + Google Ads
// Stack: React + Tailwind CSS

import React from "react";

// ─── Dados ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "5551994309788"; // ← troque pelo seu número
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const DIFERENCIAIS = [
  {
    icon: "🏠",
    title: "Vamos até você",
    desc: (
      <>
        Atendemos em domicílio, trabalho ou onde for mais conveniente.{" "}
        <strong className="text-teal-400 font-semibold">Zero deslocamento</strong> da sua parte.
      </>
    ),
  },
  {
    icon: "🔧",
    title: "Peças de qualidade",
    desc: (
      <>
        Utilizamos{" "}
        <strong className="text-teal-400 font-semibold">peças de alta qualidade</strong> testadas e
        aprovadas para garantir a durabilidade do reparo.
      </>
    ),
  },
  {
    icon: "🛡️",
    title: "Garantia de 90 dias",
    desc: (
      <>
        Todo serviço tem{" "}
        <strong className="text-teal-400 font-semibold">garantia de 90 dias</strong>. Problema
        voltou? Resolvemos sem custo extra.
      </>
    ),
  },
  {
    icon: "⚡",
    title: "Reparo na hora",
    desc: (
      <>
        A maioria dos reparos é concluída{" "}
        <strong className="text-teal-400 font-semibold">em até 1 hora</strong> no local. Você
        acompanha tudo.
      </>
    ),
  },
];

const SERVICOS = [
  {
    icon: "📺",
    title: "Troca de Tela",
    desc: "Substituição completa do display com tela original ou de alta qualidade. Resolve rachaduras, manchas e touch sem resposta.",
    tag: "Mais solicitado",
  },
  {
    icon: "🔋",
    title: "Troca de Bateria",
    desc: (
      <>
        Bateria nova com{" "}
        <strong className="text-blue-400 font-semibold">100% de capacidade</strong>. Resolve
        descarregamento rápido, desligamentos e superaquecimento.
      </>
    ),
    tag: "Rápido",
  },
  {
    icon: "🎙️",
    title: "Troca de Microfone",
    desc: "Sua voz não chega clara nas chamadas? Realizamos a substituição do microfone com diagnóstico gratuito.",
    tag: "Diagnóstico grátis",
  },
  {
    icon: "🔌",
    title: "Conector de Carga",
    desc: "iPhone não está carregando ou reconhecendo o cabo? Trocamos o conector Lightning ou USB-C com rapidez.",
    tag: "Rápido",
  },
  {
    icon: "📸",
    title: "Câmera Traseira / Frontal",
    desc: "Fotos fora de foco, câmera preta ou selfie com problema. Substituição completa do módulo de câmera.",
    tag: "Alta qualidade",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Fale pelo WhatsApp",
    desc: "Descreva o problema do seu iPhone e informe seu endereço. Respondemos em minutos e confirmamos a visita.",
  },
  {
    n: "2",
    title: "Agendamos o horário",
    desc: "Você escolhe o melhor horário e local — casa, trabalho ou onde preferir. Nos adaptamos à sua rotina.",
  },
  {
    n: "3",
    title: "Diagnóstico no local",
    desc: (
      <>
        Chegamos no horário combinado, avaliamos o aparelho e informamos o custo antes de começar
        qualquer reparo.{" "}
        <strong className="text-teal-400 font-semibold">Sem surpresas.</strong>
      </>
    ),
  },
  {
    n: "4",
    title: "Reparo e entrega",
    desc: (
      <>
        Realizamos o reparo na hora, você testa o aparelho e só paga quando estiver{" "}
        <strong className="text-teal-400 font-semibold">100% satisfeito</strong>.
      </>
    ),
  },
];

// ─── Componente Principal ──────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="bg-[#080c10] text-[#e8f0f8] font-sans antialiased overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pl-12 bg-[rgba(8,12,16,0.85)] backdrop-blur-md border-b border-teal-500/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-lg">
            📱
          </div>
          <span className="font-bold text-base tracking-tight">
            IGoFix<span className="text-teal-400">Delivery</span>
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-400 text-black font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all"
        >
          Solicitar Visita
        </a>
      </header>

      <main className="pl-8">
        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20"
          aria-labelledby="hero-title"
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(0,144,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0,212,180,0.07) 0%, transparent 60%)",
            }}
          />
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,180,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,180,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 rounded-full px-4 py-1.5 text-teal-400 text-sm font-medium mb-7">
              <span className="text-[8px] animate-pulse">●</span>
              Atendimento em Porto Alegre e região
            </div>

            {/* H1 — palavra-chave principal */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-5"
            >
              Assistência Técnica de<br />
              iPhone{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Delivery
              </span>
              <br />
              em Porto Alegre
            </h1>

            <p className="text-lg text-[#6b7f92] font-light max-w-lg mb-10">
              Seu iPhone consertado sem sair de casa. Vamos até você, realizamos o reparo na hora e
              você acompanha tudo em tempo real.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-600 text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(0,212,180,0.25)] hover:shadow-[0_4px_40px_rgba(0,212,180,0.4)] hover:-translate-y-0.5 transition-all"
              >
                <WhatsAppIcon />
                Agendar Agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 border border-teal-500/15 text-[#e8f0f8] font-semibold px-7 py-4 rounded-xl hover:border-teal-400 hover:text-teal-400 transition-all"
              >
                Ver Serviços →
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { n: "500+", label: "Reparos realizados" },
                { n: "90d", label: "Garantia no serviço" },
                { n: "~1h", label: "Tempo médio de reparo" },
              ].map(({ n, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-white font-display">{n}</span>
                  <span className="text-xs text-[#6b7f92]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="max-w-5xl mx-auto px-6 py-20" aria-labelledby="diff-title">
          <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase">
            Por que nos escolher?
          </span>
          <h2 id="diff-title" className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            Confiança que você pode ver
          </h2>
          <p className="text-[#6b7f92] max-w-lg mb-12">
            Cada detalhe do nosso serviço foi pensado para você ter a melhor experiência possível.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFERENCIAIS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#111820] border border-teal-500/15 rounded-2xl p-7 hover:border-teal-400/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#6b7f92] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <div id="servicos" className="bg-[#0d1318] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase">
              O que consertamos
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
              Serviços Disponíveis
            </h2>
            <p className="text-[#6b7f92] max-w-lg mb-12">
              Atendemos todos os modelos de iPhone, do SE ao 15 Pro Max.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
              {SERVICOS.map(({ icon, title, desc, tag }) => (
                <article
                  key={title}
                  role="listitem"
                  className="bg-[#111820] border border-teal-500/15 rounded-2xl p-7 flex flex-col gap-3 hover:border-blue-500/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-3xl">
                    {icon}
                  </div>
                  <h3 className="font-bold text-white text-lg">{title}</h3>
                  <p className="text-sm text-[#6b7f92] leading-relaxed flex-1">{desc}</p>
                  <span className="self-start text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1">
                    {tag}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── COMO FUNCIONA ── */}
        <section className="max-w-5xl mx-auto px-6 py-20" aria-labelledby="steps-title">
          <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase">
            Processo
          </span>
          <h2 id="steps-title" className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            Como funciona o atendimento?
          </h2>
          <p className="text-[#6b7f92] max-w-lg mb-12">
            Simples, rápido e transparente — do contato à entrega.
          </p>
          <div className="flex flex-col gap-5 max-w-2xl" role="list">
            {STEPS.map(({ n, title, desc }) => (
              <div
                key={n}
                role="listitem"
                className="flex gap-5 items-start bg-[#111820] border border-teal-500/15 rounded-2xl p-6 hover:border-teal-400/30 transition-all"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center font-extrabold text-black text-lg">
                  {n}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-[#6b7f92] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1318] border-t border-teal-500/10 pt-12 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-lg">
                📱
              </div>
              <span className="font-bold">
                IGoFix<span className="text-teal-400">Delivery</span>
              </span>
            </div>
            <p className="text-sm text-[#6b7f92] leading-relaxed max-w-xs">
              Assistência técnica de iPhone delivery em Porto Alegre. Reparos com qualidade,
              agilidade e garantia.
            </p>
          </div>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h4 className="font-bold text-xs text-white uppercase tracking-widest mb-4">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#6b7f92]">
              {["Troca de Tela", "Troca de Bateria", "Conector de Carga", "Câmera", "Dano por Líquido"].map(
                (s) => (
                  <li key={s}>
                    <a href="#servicos" className="hover:text-teal-400 transition-colors">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contato */}
          <address className="not-italic">
            <h4 className="font-bold text-xs text-white uppercase tracking-widest mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#6b7f92]">
              <li>📍 Porto Alegre, RS</li>
              <li>📱 WhatsApp: (51) 9 0000-0000</li>
              <li>🕘 Seg–Sáb: 8h às 20h</li>
              <li>
                <a
                  href="https://instagram.com/"
                  className="hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-3 mt-10 pt-6 border-t border-teal-500/10 text-xs text-[#6b7f92]">
          <span>© 2025 IGoFixDelivery. Todos os direitos reservados.</span>
          <span>CNPJ: 00.000.000/0001-00</span>
        </div>
      </footer>

      {/* ── CTA FLUTUANTE WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-7 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:-translate-y-1 hover:scale-105 transition-all sm:rounded-full"
      >
        <WhatsAppIcon />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </a>
    </div>
  );
}

// ─── Ícone WhatsApp ────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.114 1.527 5.845L0 24l6.335-1.527A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.656-.493-5.191-1.357l-.371-.22-3.763.907.923-3.667-.242-.381A9.95 9.95 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}
