import { Box, Lightbulb, Power, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    label: 'PROBLEMA',
    title: 'Gargalos Operacionais',
    description: 'Identificação cirúrgica de gargalos operacionais e atritos reais de profissionais autônomos.',
    color: 'blue',
    Icon: Power,
  },
  {
    number: '02',
    label: 'IDEIA',
    title: 'Validação de Hipótese',
    description: 'Validação rápida de hipóteses, modelagem de viabilidade e escopo enxuto.',
    color: 'violet',
    Icon: Lightbulb,
  },
  {
    number: '03',
    label: 'TECNOLOGIA',
    title: 'Engenharia Modular',
    description: 'Engenharia modular, edge routing e código proprietário sem desperdício (zero bloat).',
    color: 'tint',
    Icon: Box,
  },
  {
    number: '04',
    label: 'PRODUTO',
    title: 'Micro-SaaS Ativo',
    description: 'Micro-SaaS independente, de alta performance e pronto para escala comercial.',
    color: 'emerald',
    Icon: Rocket,
  },
]

const colorStyles = {
  blue: {
    number: 'text-[#3d7dff]',
    icon: 'border-[#21469d] bg-[#102052] text-[#3d7dff]',
    label: 'text-[#3d7dff]',
    dot: 'bg-[#3d7dff]',
  },
  violet: {
    number: 'text-[#913cff]',
    icon: 'border-[#5722a1] bg-[#211044] text-[#913cff]',
    label: 'text-[#913cff]',
    dot: 'bg-[#913cff]',
  },
  tint: {
    number: 'text-[#b6c9ff]',
    icon: 'border-[#264889] bg-[#102052] text-[#b6c9ff]',
    label: 'text-[#b6c9ff]',
    dot: 'bg-[#b6c9ff]',
  },
  emerald: {
    number: 'text-[#27d8a3]',
    icon: 'border-[#116b5b] bg-[#0b2b2d] text-[#27d8a3]',
    label: 'text-[#27d8a3]',
    dot: 'bg-[#27d8a3]',
  },
}

export default function Section1() {
  return (
    <section id="section1" className="relative overflow-hidden bg-[#090c16] px-8 pb-20 pt-16 sm:pb-24 sm:pt-16" aria-labelledby="section1-title">
      <div className="mx-auto max-w-[1216px]">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a3150] bg-[#101426] px-4 py-2 text-[11px] font-semibold tracking-[0.11em] text-[#b6c2e7] shadow-[0_0_16px_rgba(123,47,247,0.08)]">
            <span className="h-2 w-2 rounded-full bg-[#8e32ff] shadow-[0_0_8px_#8e32ff]" />
            MANIFESTO DE ENGENHARIA &amp; PRODUTO
          </div>

          <h2 id="section1-title" className="mt-7 text-[2.45rem] font-bold leading-[1.14] tracking-[-0.035em] text-[#eef1ff] sm:text-[2.8rem]">
            Problemas específicos pedem
            <br />
            <span className="text-gradient-kinetic">soluções específicas.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-[1.05rem] leading-[1.55] text-[#9aa8c1]">
            A GestFors identifica necessidades reais em diferentes mercados e transforma essas oportunidades em produtos digitais especializados.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[51px] hidden h-px bg-[#334274] lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-[47px] hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#913cff] shadow-[0_0_10px_#913cff] lg:block" />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, label, title, description, color, Icon }) => {
              const styles = colorStyles[color]

              return (
                <article key={number} className="flex min-h-[270px] flex-col rounded-2xl border border-[#242b43] bg-[#101426] p-6 shadow-[0_14px_32px_rgba(0,0,0,0.14)]">
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-2xl font-semibold tracking-[0.08em] ${styles.number}`}>{number}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${styles.icon}`}>
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className={`mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.13em] ${styles.label}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                      {label}
                    </p>
                    <h3 className="text-lg font-semibold text-[#edf0ff]">{title}</h3>
                    <p className="mt-2 text-sm leading-[1.65] text-[#95a2bc]">{description}</p>
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
