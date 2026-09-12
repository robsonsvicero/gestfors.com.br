const processSteps = [
  {
    number: '01',
    badge: 'SCANNER',
    title: 'IDENTIFICAR',
    description: 'Encontramos problemas recorrentes e oportunidades em nichos específicos.',
    color: 'blue',
    visual: 'radar',
  },
  {
    number: '02',
    badge: 'BLUEPRINT',
    title: 'PROJETAR',
    description: 'Transformamos necessidades em experiências digitais claras e funcionais.',
    color: 'violet',
    visual: 'blueprint',
  },
  {
    number: '03',
    badge: 'BUILD',
    title: 'DESENVOLVER',
    description: 'Construímos produtos utilizando a tecnologia adequada para cada problema.',
    color: 'tint',
    visual: 'code',
  },
  {
    number: '04',
    badge: 'FEEDBACK',
    title: 'EVOLUIR',
    description: 'Os produtos são continuamente aprimorados a partir de uso, dados e necessidades reais.',
    color: 'emerald',
    visual: 'chart',
  },
]

const colorStyles = {
  blue: {
    number: 'text-[#3d7dff]',
    badge: 'border-[#21469d] bg-[#102052] text-[#3d7dff]',
    dot: 'bg-[#3d7dff]',
  },
  violet: {
    number: 'text-[#913cff]',
    badge: 'border-[#5722a1] bg-[#211044] text-[#913cff]',
    dot: 'bg-[#913cff]',
  },
  tint: {
    number: 'text-[#b6c9ff]',
    badge: 'border-[#38415b] bg-[#202536] text-[#b6c9ff]',
    dot: 'bg-[#b6c9ff]',
  },
  emerald: {
    number: 'text-[#27d8a3]',
    badge: 'border-[#116b5b] bg-[#0b2b2d] text-[#27d8a3]',
    dot: 'bg-[#27d8a3]',
  },
}

function RadarVisual() {
  return (
    <div className="relative h-[110px] overflow-hidden rounded-xl bg-[#080c1b] px-3 py-3">
      <div className="flex items-center justify-between text-[9px] font-semibold text-[#7d899e]"><span>OPPORTUNITY RADAR</span><span className="text-[#27d8a3]">DETECTED</span></div>
      <div className="absolute bottom-3 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border border-dashed border-[#273b70]">
        <div className="absolute inset-2 rounded-full border border-[#203365]" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d7dff] shadow-[0_0_8px_#3d7dff]" />
        <span className="absolute -right-1 top-2 h-1.5 w-1.5 rounded-full bg-[#3d7dff]" />
        <span className="absolute -bottom-1 left-2 h-1.5 w-1.5 rounded-full bg-[#913cff]" />
        <span className="absolute -right-1 bottom-2 h-1.5 w-1.5 rounded-full bg-[#b6c9ff]" />
      </div>
      <div className="absolute bottom-6 left-8 right-8 h-px bg-[#172341]" />
    </div>
  )
}

function BlueprintVisual() {
  return (
    <div className="relative h-[110px] overflow-hidden rounded-xl bg-[#080c1b] px-3 py-3">
      <div className="flex items-center justify-between text-[9px] font-semibold text-[#7d899e]"><span>UX ARCHITECTURE</span><span className="text-[#913cff]">GRID V2</span></div>
      <div className="mt-3 grid h-[58px] grid-cols-[1fr_2fr] gap-2 rounded border border-[#1f2a4a] p-1">
        <div className="rounded border border-[#254b9d] bg-[#112352] p-1"><div className="h-full rounded border border-[#2f6bff]/40" /></div>
        <div className="space-y-2 rounded border border-[#30215d] bg-[#1d123b] p-1.5"><div className="h-2 rounded bg-[#8235ee]" /><div className="h-2 rounded bg-[#4b4c58]" /></div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="relative h-[110px] overflow-hidden rounded-xl bg-[#080c1b] px-3 py-3 font-mono">
      <div className="flex items-center justify-between text-[9px] font-semibold text-[#7d899e]"><span>ENGINE / EDGE</span><span className="text-[#27d8a3]">COMPILED</span></div>
      <div className="mt-3 text-[9px] leading-[1.65] text-[#96a0b8]">
        <p><span className="text-[#913cff]">const</span> <span className="text-[#dce3f8]">mod</span> = <span className="text-[#3d7dff]">createSaaS</span>({'{'}</p>
        <p className="pl-3"><span className="text-[#913cff]">runtime:</span> <span className="text-[#27d8a3]">"edge"</span>,</p>
        <p className="pl-3"><span className="text-[#913cff]">bloat:</span> <span className="text-[#3d7dff]">false</span></p>
        <p>{'}'});</p>
      </div>
    </div>
  )
}

function ChartVisual() {
  return (
    <div className="relative h-[110px] overflow-hidden rounded-xl bg-[#080c1b] px-3 py-3">
      <div className="flex items-center justify-between text-[9px] font-semibold text-[#7d899e]"><span>TELEMETRY &amp; DATA</span><span className="text-[#27d8a3]">+34% ROI</span></div>
      <div className="relative mt-3 h-[58px]">
        <div className="absolute bottom-2 left-0 h-px w-full rotate-[-10deg] bg-gradient-to-r from-[#3d7dff] via-[#913cff] to-[#27d8a3]" />
        <div className="absolute bottom-3 left-[35%] h-px w-[34%] rotate-[-18deg] bg-[#913cff]" />
        <div className="absolute bottom-[21px] right-0 h-1.5 w-1.5 rounded-full bg-[#27d8a3] shadow-[0_0_8px_#27d8a3]" />
      </div>
    </div>
  )
}

function StepVisual({ type }) {
  if (type === 'radar') return <RadarVisual />
  if (type === 'blueprint') return <BlueprintVisual />
  if (type === 'code') return <CodeVisual />
  return <ChartVisual />
}

export default function Section2() {
  return (
    <section id="section2" className="relative overflow-hidden bg-[#070a14] px-8 pb-20 pt-20 sm:pb-24" aria-labelledby="section2-title">
      <div className="mx-auto max-w-[1216px]">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#283556] bg-[#0d1426] px-4 py-2 text-[11px] font-semibold tracking-[0.11em] text-[#9eadd6] shadow-[0_0_16px_rgba(47,107,255,0.08)]">
            <span className="h-2 w-2 rounded-full bg-[#3d7dff] shadow-[0_0_8px_#3d7dff]" />
            PROCESSO DE PRODUTO
          </div>

          <h2 id="section2-title" className="mt-7 text-[2.45rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#eef1ff] sm:text-[2.8rem]">
            Do problema ao <span className="text-gradient-kinetic">produto.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[1.05rem] leading-[1.55] text-[#9aa8c1]">
            Transformamos necessidades específicas em produtos digitais pensados para fazer sentido na prática.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[44px] hidden h-px bg-[#334274] lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-[40px] hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#913cff] shadow-[0_0_10px_#913cff] lg:block" />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, badge, title, description, color, visual }) => {
              const styles = colorStyles[color]

              return (
                <article key={number} className="flex min-h-[348px] flex-col rounded-2xl border border-[#222a43] bg-[#101426] p-6 shadow-[0_14px_32px_rgba(0,0,0,0.16)]">
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-2xl font-semibold tracking-[0.08em] ${styles.number}`}>{number}</span>
                    <span className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 text-[8px] font-semibold tracking-wide ${styles.badge}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                      {badge}
                    </span>
                  </div>

                  <div className="mt-10">
                    <StepVisual type={visual} />
                  </div>

                  <div className="mt-auto pt-5">
                    <h3 className="text-lg font-semibold text-[#edf0ff]">{title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.55] text-[#95a2bc]">{description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
