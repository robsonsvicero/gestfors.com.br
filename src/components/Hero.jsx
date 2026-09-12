import { ArrowRight, Database, Info, Network } from 'lucide-react'

const metrics = [
  { label: 'LATÊNCIA', value: '< 38ms', detail: 'Edge routing' },
  { label: 'UPTIME', value: '99.98%', detail: 'SLA contínuo' },
  { label: 'ARQUITETURA', value: 'Modular', detail: 'Micro-SaaS ativos' },
]

function StatusDot({ color = 'blue' }) {
  const colorClass = color === 'violet' ? 'bg-violet-500' : 'bg-blue-500'

  return <span className={`h-2 w-2 rounded-full ${colorClass} shadow-[0_0_8px_currentColor]`} />
}

export default function Hero({ id = 'hero' }) {
  return (
    <section id={id} className="relative mx-auto min-h-[616px] max-w-[1280px] overflow-hidden px-8 pb-12 pt-20 lg:pt-20" aria-labelledby={`${id}-title`}>
      <div className="pointer-events-none absolute left-[56%] top-[12%] h-[430px] w-[470px] rounded-full bg-[#6e2cff]/20 blur-[105px]" />
      <div className="pointer-events-none absolute right-[4%] top-[28%] h-[330px] w-[360px] rounded-full bg-[#2f6bff]/20 blur-[100px]" />

      <div className="relative z-10 grid h-full items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(540px,1fr)] lg:gap-8">
        <div className="max-w-[570px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#34436b] bg-[#0c1223] px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#aebce7] shadow-[0_0_18px_rgba(47,107,255,0.08)]">
            <span className="h-2 w-2 rounded-full bg-[#2f6bff] shadow-[0_0_8px_#2f6bff]" />
            GESTFORS SOLUÇÕES DIGITAIS
          </div>

          <h1 id={`${id}-title`} className="mt-7 max-w-[520px] text-[3.35rem] font-bold leading-[1.13] tracking-[-0.035em] text-[#f4f5ff] sm:text-[3.65rem]">
            Tecnologia
            <br />
            transformada
            <br />
            em <span className="text-gradient-kinetic">produto.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[1.1rem] leading-[1.55] text-[#9aa8c1]">
            Criamos micro-SaaS que transformam problemas específicos de profissionais e negócios em soluções digitais simples, funcionais e acessíveis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#produtos"
              className="inline-flex h-14 items-center gap-3 rounded-xl bg-gradient-to-r from-[#329dff] to-[#6734f5] px-6 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(47,107,255,0.42)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Conheça nossos produtos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-[#3c4767] bg-[#11172a] px-6 text-sm font-semibold text-[#e9edff] transition-colors hover:border-[#6070a0] hover:bg-[#171e35]"
            >
              <Info className="h-4 w-4 text-[#338fff]" />
              Sobre a GestFors
            </a>
          </div>

          <div className="mt-12 flex max-w-[545px] border-t border-white/[0.14] pt-6">
            {metrics.map((metric, index) => (
              <div key={metric.label} className={`flex-1 ${index > 0 ? 'border-l border-white/[0.14] pl-4 sm:pl-5' : ''} ${index < metrics.length - 1 ? 'mr-4 sm:mr-5' : ''}`}>
                <p className="text-[11px] font-semibold tracking-[0.08em] text-[#8490aa]">{metric.label}</p>
                <p className="mt-1 text-lg font-bold text-[#f2f4ff]">{metric.value}</p>
                <p className="mt-0.5 text-[11px] font-medium text-[#3d8cff]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[540px] lg:block" aria-label="Visão técnica da plataforma">
          <div className="absolute left-[38px] top-[28px] h-[183px] w-[310px] rounded-[28px] bg-[#722cff]/20 blur-[42px]" />
          <div className="absolute right-[44px] top-[154px] h-[315px] w-[330px] rounded-[45%] bg-[#3d28ff]/25 blur-[50px]" />

          <div className="absolute left-[72px] top-[18px] z-20 h-[108px] w-[255px] rounded-2xl border border-[#222d4d] bg-[#10162a]/95 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between text-xs text-[#e4e8f8]">
              <span className="flex items-center gap-2"><StatusDot />Auth &amp; Session Node</span>
              <span className="rounded bg-[#003f3c] px-2 py-1 text-[9px] font-mono tracking-wide text-[#31e6b1]">ACTIVE</span>
            </div>
            <div className="my-3 border-t border-white/[0.08]" />
            <div className="flex justify-between text-[10px] text-[#8793ad]"><span>Protocolo de Token</span><span className="font-mono text-[#dae1f5]">JWT-HS256</span></div>
            <div className="mt-2 flex justify-between text-[10px] text-[#8793ad]"><span>Taxa de Sucesso</span><span className="font-mono text-[#338fff]">100%</span></div>
          </div>

          <div className="absolute left-[172px] top-[131px] z-10 h-[263px] w-[340px] rounded-2xl border border-[#293452] bg-[#10162a] p-5 shadow-[0_25px_65px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#3153a3] bg-[#14295e] text-[#3b9dff]"><Network className="h-4 w-4" /></span>
                <div><p className="text-sm font-medium text-[#edf0ff]">Core Engine API</p><p className="mt-0.5 text-[10px] text-[#8793ad]">v2.4.0 • Cluster LATAM</p></div>
              </div>
              <span className="h-2 w-2 rounded-full bg-[#993eff] shadow-[0_0_9px_#993eff]" />
            </div>

            <div className="mt-4 rounded-xl bg-[#080d1c] p-3">
              <div className="flex justify-between text-[10px] text-[#8793ad]"><span>Fluxo de Requisições</span><span className="font-mono text-[#9940ff]">2.4k req/s</span></div>
              <div className="relative mt-3 h-10">
                <div className="absolute left-0 top-[22px] h-px w-full -rotate-[8deg] bg-gradient-to-r from-[#2f6bff] via-[#653cff] to-[#a239ff]" />
                <div className="absolute left-[12%] top-[14px] h-px w-[30%] rotate-[8deg] bg-[#3c70ff]" />
                <div className="absolute left-[42%] top-[18px] h-px w-[26%] -rotate-[21deg] bg-[#8141ff]" />
                <div className="absolute left-[68%] top-[13px] h-px w-[30%] rotate-[8deg] bg-[#a239ff]" />
              </div>
            </div>

            <div className="mt-3 space-y-2 text-[10px] text-[#d7dcef]">
              <div className="flex items-center justify-between rounded-lg bg-[#171d32] px-3 py-2"><span className="flex items-center gap-2"><StatusDot />Billing Micro-SaaS</span><span className="font-mono text-[#8b96ad]">Sync: 12ms</span></div>
              <div className="flex items-center justify-between rounded-lg bg-[#171d32] px-3 py-2"><span className="flex items-center gap-2"><StatusDot color="violet" />Client Data Vault</span><span className="font-mono text-[#31e6b1]">E2E Encrypted</span></div>
            </div>
          </div>

          <div className="absolute bottom-[8px] right-[28px] z-20 h-[84px] w-[240px] rounded-xl border border-[#273352] bg-[#11182d] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between text-[10px] text-[#e5e8f6]"><span className="flex items-center gap-2"><Database className="h-3.5 w-3.5 text-[#8e36ff]" />Resource Optimizer</span><span className="font-mono text-[#3c7cff]">ZERO BLOAT</span></div>
            <div className="mt-3 h-1.5 rounded-full bg-[#252d43]"><div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#367bff] to-[#8d32f5]" /></div>
            <div className="mt-2 flex justify-between text-[9px] text-[#8490aa]"><span>Eficiência do Módulo</span><span className="text-[#e8ecfb]">98.4%</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
