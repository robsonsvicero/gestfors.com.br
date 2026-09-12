import { Boxes, Infinity as InfinityIcon, Layers3, Network } from 'lucide-react'

const products = [
  {
    status: 'FLAGSHIP ATIVO',
    version: 'v1.2',
    title: 'MAEZTRO Gestão',
    description: 'Gestão simplificada e completa para professores e instrutores de música.',
    footer: 'Produção em uso',
    color: 'emerald',
    Icon: Layers3,
  },
  {
    status: 'EM DESENVOLVIMENTO',
    version: '#02',
    title: 'AgendaVitta',
    description: 'Organização de agenda e redução de faltas para dentistas e clínicas.',
    footer: 'Build em validação',
    color: 'violet',
    Icon: Boxes,
  },
  {
    status: 'PIPELINE CONTÍNUO',
    version: '+ EXPANSÃO',
    title: 'Novos Produtos',
    description: 'Mapeamento contínuo de novas dores e oportunidades em nichos de autônomos.',
    footer: 'Em prospecção',
    color: 'blue',
    Icon: InfinityIcon,
  },
]

const styles = {
  emerald: { dot: 'bg-[#27d8a3]', icon: 'border-[#116b5b] bg-[#0b2b2d] text-[#27d8a3]', text: 'text-[#27d8a3]', ring: 'border-[#27d8a3]' },
  violet: { dot: 'bg-[#913cff]', icon: 'border-[#5722a1] bg-[#211044] text-[#913cff]', text: 'text-[#c0a8ff]', ring: 'border-[#913cff]' },
  blue: { dot: 'bg-[#b6c9ff]', icon: 'border-[#38415b] bg-[#202536] text-[#b6c9ff]', text: 'text-[#b6c9ff]', ring: 'border-[#b6c9ff]' },
}

export default function Section5() {
  return (
    <section id="section5" className="relative overflow-hidden bg-[#070a14] px-8 pb-24 pt-20" aria-labelledby="section5-title">
      <div className="pointer-events-none absolute left-1/2 top-[260px] h-[390px] w-[520px] -translate-x-1/2 rounded-full bg-[#1e5cff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-[#762cff]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[690px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a3150] bg-[#101426] px-4 py-2 text-[10px] font-semibold tracking-[0.11em] text-[#b6c2e7]">
            <span className="h-2 w-2 rounded-full bg-[#913cff] shadow-[0_0_8px_#913cff]" />
            ECOSSISTEMA DE PRODUTOS
          </div>
          <h2 id="section5-title" className="mt-7 text-[2.45rem] font-bold leading-[1.13] tracking-[-0.04em] text-[#eef1ff] sm:text-[2.8rem]">
            Uma ideia pode se transformar
            <br />
            <span className="text-gradient-kinetic">em produto.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[650px] text-[1rem] leading-[1.55] text-[#9aa8c1]">
            Do mapeamento à entrega: uma esteira contínua de tecnologia e execução onde cada oportunidade vira uma aplicação independente.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-[710px]">
          <div className="absolute left-1/2 top-[98px] h-[118px] w-px -translate-x-1/2 bg-gradient-to-b from-[#2f6bff] to-[#913cff]" />
          <article className="relative z-10 mx-auto max-w-[328px] rounded-xl border border-[#204794] bg-[#101b36] p-5 shadow-[0_12px_32px_rgba(0,52,150,0.2)]">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#cbd7f3]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#3d7dff] shadow-[0_0_8px_#3d7dff]" />PARENT HUB • ENGENHARIA</span><span className="rounded bg-[#073b37] px-2 py-1 text-[8px] text-[#27d8a3]">CORE SYSTEM</span></div>
            <div className="my-3 border-t border-white/[0.08]" />
            <h3 className="text-center text-base font-semibold text-[#edf0ff]">GestFors Soluções Digitais</h3>
            <p className="mt-1 text-center text-[9px] text-[#8794ad]">Núcleo de inteligência, infraestrutura edge, governança e viabilidade.</p>
          </article>

          <div className="relative z-10 mx-auto mt-12 flex max-w-[224px] items-center gap-2 rounded-lg border border-[#45228a] bg-[#1a1237] px-4 py-3 text-[8px] text-[#bca9ed] shadow-[0_10px_25px_rgba(75,28,150,0.18)]"><Network className="h-3.5 w-3.5 text-[#913cff]" /><div><p className="font-mono font-semibold tracking-wide">CAMADA DE INCUBAÇÃO &amp; EXECUÇÃO</p><p className="mt-1 text-[7px] text-[#8793ad]">Arquitetura modular • Validação rápida • Zero bloat</p></div></div>

          <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-[300px] hidden h-px bg-[#4b5c87] md:block" />
          <div className="pointer-events-none absolute left-1/2 top-[270px] hidden h-[30px] w-px bg-[#913cff] md:block" />
          <div className="pointer-events-none absolute left-[16.5%] top-[300px] hidden h-[28px] w-px bg-[#4b5c87] md:block" />
          <div className="pointer-events-none absolute right-[16.5%] top-[300px] hidden h-[28px] w-px bg-[#4b5c87] md:block" />

          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            {products.map(({ status, version, title, description, footer, color, Icon }) => {
              const style = styles[color]

              return (
                <article key={title} className="flex min-h-[190px] flex-col rounded-xl border border-[#222b46] bg-[#101426] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
                  <div className="flex items-center justify-between text-[8px] font-mono tracking-wide"><span className={`flex items-center gap-1.5 font-semibold ${style.text}`}><span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />{status}</span><span className="text-[#8490a8]">{version}</span></div>
                  <div className={`mt-5 flex h-7 w-7 items-center justify-center rounded-md border ${style.icon}`}><Icon className="h-3.5 w-3.5" /></div>
                  <h3 className="mt-3 text-xs font-semibold text-[#edf0ff]">{title}</h3>
                  <p className="mt-2 text-[9px] leading-[1.5] text-[#95a2bc]">{description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-3 text-[8px] font-mono text-[#8490a8]"><span>{footer}</span><span className={`flex h-4 w-4 items-center justify-center rounded-full border ${style.ring} ${style.text}`}>{color === 'emerald' ? '✓' : color === 'violet' ? '◌' : '◎'}</span></div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
