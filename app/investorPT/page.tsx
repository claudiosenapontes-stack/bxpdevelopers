import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investidores | SENA Enterprises",
  description:
    "Acesso passivo a empreendimentos residenciais premium no Sul da Flórida — projetados, construídos e entregues do início ao fim pela SENA Enterprises.",
  alternates: { canonical: "https://www.senaenterprises.com/investorPT" },
  openGraph: {
    title: "SENA Enterprises | Investidores",
    description:
      "Acesso passivo a empreendimentos residenciais premium no Sul da Flórida.",
    url: "https://www.senaenterprises.com/investorPT",
    siteName: "SENA Enterprises",
    locale: "pt_BR",
    type: "website",
  },
};

const DECK = "https://gamma.app/docs/Sena-Enterprises-Investor-Pack-ddljzkrcbs5oi0t";

export default function Page() {
  const html = `<main class="min-h-screen bg-[#faf9f7] text-[#1a1a1a]"><nav class="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/80 backdrop-blur-md"><div class="max-w-7xl mx-auto px-6 h-24 md:h-32 flex items-center justify-between"><a href="/" class="flex items-center"><img src="/sena-logo.png" alt="SENA Enterprises" class="h-8 md:h-10 object-contain" /></a><div class="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/60"><a href="/invest" class="hover:text-[#1a1a1a] transition-colors">English</a><a href="/#contact" class="hidden sm:inline hover:text-[#1a1a1a] transition-colors">Contato</a><a href="tel:+13399277803" class="border border-[#1a1a1a]/20 px-4 py-2 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-colors">Ligar</a></div></div></nav><section class="pt-36 md:pt-44 pb-12 px-6 max-w-4xl mx-auto text-center"><p class="text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/45">Oportunidades de Investimento</p><h1 class="mt-6 text-3xl md:text-5xl font-light leading-tight">Invista em uma plataforma imobiliária totalmente integrada</h1><p class="mt-6 text-base md:text-lg text-[#1a1a1a]/60 leading-relaxed max-w-2xl mx-auto">Acesso passivo a empreendimentos residenciais premium — projetados, construídos e entregues do início ao fim.</p></section><section class="px-6 pb-24 max-w-4xl mx-auto"><a href="${DECK}" target="_blank" rel="noopener noreferrer" class="group block rounded-xl overflow-hidden bg-[#1a1a1a] text-[#faf9f7] px-8 md:px-16 py-16 md:py-24 text-center transition-transform hover:-translate-y-0.5"><p class="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#faf9f7]/45">Apresentação Completa</p><h2 class="mt-6 text-2xl md:text-4xl font-light leading-tight">Sena Enterprises<br />Desenvolvimento Imobiliário Integrado</h2><p class="mt-5 text-sm md:text-base text-[#faf9f7]/55">Sul da Flórida · Residencial de Luxo · Totalmente Verticalizado</p><span class="mt-10 inline-flex items-center gap-3 border border-[#faf9f7]/30 px-8 py-4 text-[11px] tracking-[0.2em] uppercase group-hover:bg-[#faf9f7] group-hover:text-[#1a1a1a] transition-colors">Abrir apresentação<span aria-hidden="true">&rarr;</span></span><p class="mt-6 text-[11px] text-[#faf9f7]/35">Abre em uma nova aba</p></a><div class="mt-12 grid gap-8 sm:grid-cols-3 text-center"><div><p class="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/40">Modelo</p><p class="mt-3 text-sm text-[#1a1a1a]/70 leading-relaxed">Ecossistema verticalizado: aquisição, projeto, construção e venda sob um único teto.</p></div><div><p class="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/40">Retorno</p><p class="mt-3 text-sm text-[#1a1a1a]/70 leading-relaxed">Estrutura de capital e projeções de resultado detalhadas na apresentação.</p></div><div><p class="text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/40">Portfólio</p><p class="mt-3 text-sm text-[#1a1a1a]/70 leading-relaxed">Projetos entregues em Lighthouse Point, Deerfield Beach e Coral Gables.</p></div></div></section><section class="border-t border-[#e8e4df] bg-[#f5f3f0] px-6 py-20 text-center"><h2 class="text-2xl md:text-3xl font-light">Torne-se um investidor</h2><p class="mt-4 text-[#1a1a1a]/60 max-w-xl mx-auto leading-relaxed">Fale com a nossa equipe para receber o material completo e discutir a próxima rodada de captação.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a href="/#contact" class="bg-[#1a1a1a] text-[#faf9f7] text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-80 transition-opacity">Fale conosco</a><a href="tel:+13399277803" class="border border-[#1a1a1a]/20 text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#1a1a1a] hover:text-[#faf9f7] transition-colors">+1 (339) 927-7803</a></div></section><footer class="px-6 py-10 text-center text-xs text-[#1a1a1a]/40">© 2026 SENA Enterprises. Todos os direitos reservados.</footer></main>`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
