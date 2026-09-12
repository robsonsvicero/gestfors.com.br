import { Code2, Layers3, Rocket, Target } from 'lucide-react'

const principles = [
  {
    label: 'PROBLEMA',
    description: 'Identificação cirúrgica de atritos e demandas reais do mercado autônomo.',
    Icon: Target,
    color: 'blue',
  },
  {
    label: 'EXPERIÊNCIA',
    description: 'Interfaces limpas, objetivas, sem fricção e com foco no uso prático.',
    Icon: Layers3,
    color: 'violet',
  },
  {
    label: 'TECNOLOGIA',
    description: 'Código modular, infraestrutura edge de alta velocidade e zero bloat.',
    Icon: Code2,
    color: 'tint',
  },
  {
    label: 'PRODUTO',
    description: 'Micro-SaaS independente, escalável e de modelo comercial sustentável.',
    Icon: Rocket,
    color: 'emerald',
  },
]

const colors = {
  blue: { icon: 'border-[#21469d] bg-[#102052] text-[#3d7dff]', label: 'text-[#3d7dff]' },
  violet: { icon: 'border-[#5722a1] bg-[#211044] text-[#913cff]', label: 'text-[#913cff]' },
  tint: { icon: 'border-[#38415b] bg-[#202536] text-[#b6c9ff]', label: 'text-[#b6c9ff]' },
  emerald: { icon: 'border-[#116b5b] bg-[#0b2b2d] text-[#27d8a3]', label: 'text-[#27d8a3]' },
}

export default function Section4() {
  return (
    <section id="section4" className="relative overflow-hidden bg-[#090c16] px-8 py-20 sm:py-24" aria-labelledby="section4-title">
      <div className="pointer-events-none absolute right-[-160px] top-[90px] h-[420px] w-[360px] rounded-full bg-[#1e5cff]/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[42%] h-[300px] w-[380px] rounded-full bg-[#752cff]/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1216px] items-start gap-12 lg:grid-cols-[1fr_0.86fr] lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a3150] bg-[#101426] px-4 py-2 text-[11px] font-semibold tracking-[0.11em] text-[#b6c2e7]">
            <span className="h-2 w-2 rounded-full bg-[#913cff] shadow-[0_0_8px_#913cff]" />
            SOBRE A GESTFORS
          </div>

          <h2 id="section4-title" className="mt-7 max-w-[580px] text-[2.55rem] font-bold leading-[1.13] tracking-[-0.04em] text-[#eef1ff] sm:text-[3rem]">
            Construímos produtos
            <br />
            digitais com <span className="text-gradient-kinetic">propósito.</span>
          </h2>

          <div className="mt-7 max-w-[570px] space-y-4 text-[1rem] leading-[1.65] text-[#9aa8c1]">
            <p>A GestFors Soluções Digitais é uma empresa de tecnologia dedicada à criação, desenvolvimento e comercialização de produtos digitais.</p>
            <p>Criamos aplicações e soluções SaaS pensadas para resolver problemas específicos de negócios e profissionais, transformando necessidades reais em produtos simples, funcionais e acessíveis.</p>
            <p className="font-medium text-[#b4c5ef]">Nosso foco está no desenvolvimento de micro-SaaS para autônomos e nichos ligados a profissionais autônomos.</p>
          </div>

          <div className="mt-7 border-t border-white/[0.1] pt-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map(({ label, description, Icon, color }) => {
                const style = colors[color]

                return (
                  <article key={label} className="flex min-h-[98px] gap-3 rounded-xl border border-[#202943] bg-[#101426] p-3.5">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${style.icon}`}><Icon className="h-4 w-4" /></span>
                    <div><h3 className={`text-[10px] font-bold tracking-[0.1em] ${style.label}`}>{label}</h3><p className="mt-1 text-[11px] leading-[1.45] text-[#95a2bc]">{description}</p></div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 lg:pt-24">
          <article className="rounded-xl border border-[#18418a] bg-[#101b36] p-5 shadow-[0_12px_30px_rgba(0,40,120,0.16)]">
            <div className="flex items-center justify-between text-xs text-[#dce6ff]"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#27d8a3] shadow-[0_0_8px_#27d8a3]" />Camada 03 • Micro-SaaS Pronto para Produção</span><span className="rounded bg-[#073c37] px-2 py-1 text-[8px] font-mono text-[#27d8a3]">COMMERCIAL ACTIVE</span></div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-[#080d1b] px-3 py-3 text-center"><p className="text-[9px] text-[#7e8aa3]">Módulos</p><p className="mt-2 text-xs font-bold text-[#b6c9ff]">100% Edge</p></div>
              <div className="rounded-lg bg-[#080d1b] px-3 py-3 text-center"><p className="text-[9px] text-[#7e8aa3]">Ativação</p><p className="mt-2 text-xs font-bold text-[#27d8a3]">Instantânea</p></div>
              <div className="rounded-lg bg-[#080d1b] px-3 py-3 text-center"><p className="text-[9px] text-[#7e8aa3]">Escopo</p><p className="mt-2 text-xs font-bold text-[#913cff]">Específico</p></div>
            </div>
          </article>

          <article className="rounded-xl border border-[#4c238c] bg-[#17132f] p-5 shadow-[0_12px_30px_rgba(80,20,160,0.14)]">
            <div className="flex items-center justify-between text-xs text-[#dce6ff]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#913cff] shadow-[0_0_8px_#913cff]" />Camada 02 • Schema Declarativo de Produto</span><span className="font-mono text-[9px] text-[#913cff]">TypeScript • v4</span></div>
            <div className="mt-4 rounded-lg bg-[#080a16] p-4 font-mono text-[10px] leading-[1.7] text-[#aab4ca] shadow-inner"><p><span className="text-[#913cff]">export const</span> <span className="text-[#dce4f8]">digitalProduct</span> = <span className="text-[#3d7dff]">defineProduct</span>({'{'}</p><p className="pl-4">target: <span className="text-[#27d8a3]">"autônomos & especialistas"</span>,</p><p className="pl-4">approach: <span className="text-[#27d8a3]">"micro-saas enxuto"</span>,</p><p className="pl-4">bloatware: <span className="text-[#913cff]">false</span>,</p><p className="pl-4">operationalFriction: <span className="text-[#913cff]">0</span></p><p>{'}'});</p></div>
          </article>

          <article className="rounded-xl border border-[#222b46] bg-[#101426] p-5">
            <div className="flex items-center justify-between text-xs text-[#dce6ff]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#3d7dff] shadow-[0_0_8px_#3d7dff]" />Camada 01 • Pilares Fundamentais</span><span className="font-mono text-[9px] text-[#3d7dff]">GestFors Core</span></div>
            <div className="mt-3 flex flex-wrap gap-2"><span className="rounded-md bg-[#1a2035] px-2 py-1 text-[9px] text-[#8793ad]">#ProblemaReal</span><span className="rounded-md bg-[#1a2035] px-2 py-1 text-[9px] text-[#8793ad]">#UXObjetiva</span><span className="rounded-md bg-[#1a2035] px-2 py-1 text-[9px] text-[#8793ad]">#EngenhariaEdge</span><span className="rounded-md bg-[#0a3a35] px-2 py-1 text-[9px] text-[#27d8a3]">#SaaSAtivo</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}
