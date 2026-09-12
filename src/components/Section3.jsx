import { ArrowRight, LockKeyhole } from 'lucide-react'

const secondaryProducts = [
  {
    number: '#02',
    status: 'EM DESENVOLVIMENTO',
    title: 'AgendaVitta',
    subtitle: 'Agenda para dentistas e clínicas odontológicas.',
    description: 'Uma solução que organiza sua operação e facilita a gestão dos atendimentos com confirmações automáticas e redução de faltas.',
    type: 'schedule',
  },
  {
    number: '#03',
    status: 'EM DESENVOLVIMENTO',
    title: 'Saúde Digital',
    subtitle: 'Infraestrutura e prontuário inteligente.',
    description: 'Ecossistemas integrados para profissionais de saúde independentes, com prontuário dinâmico, teleconsulta e conformidade rigorosa.',
    type: 'health',
  },
  {
    number: '#04',
    status: 'EM DESENVOLVIMENTO',
    title: 'Micro-SaaS para MEIs',
    subtitle: 'Gestão fiscal e financeira simplificada.',
    description: 'Gestão fiscal e um sólido simplificado de notas e guias direcionado para microempreendedores individuais focados em prestação de serviços.',
    type: 'finance',
  },
]

function ProductStatus({ children, active = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[8px] font-semibold tracking-[0.08em] ${active ? 'border-[#116b5b] bg-[#0a2b2c] text-[#27d8a3]' : 'border-[#3c275e] bg-[#1d123b] text-[#c0a8ff]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-[#27d8a3]' : 'bg-[#a13cff]'}`} />
      {children}
    </span>
  )
}

function DashboardMockup() {
  return (
    <div className="rounded-lg border border-[#1c2742] bg-[#080d1b] p-3 shadow-[0_14px_35px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-2 text-[7px] text-[#7c89a3]">
        <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#e34d63]" /><span className="h-1.5 w-1.5 rounded-full bg-[#d4a12c]" /><span className="h-1.5 w-1.5 rounded-full bg-[#27d8a3]" /> maeztro.app/dashboard</span>
        <span className="rounded bg-[#063c36] px-1.5 py-0.5 text-[#27d8a3]">Produção Ativa</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded bg-[#11182c] p-2"><p className="text-[7px] text-[#7d8ba4]">Alunos Ativos</p><p className="mt-1 text-sm font-semibold text-white">124</p><span className="text-[7px] text-[#27d8a3]">+12 este mês</span></div>
        <div className="rounded bg-[#11182c] p-2"><p className="text-[7px] text-[#7d8ba4]">Mensalidade</p><p className="mt-1 text-sm font-semibold text-white">98.2%</p><span className="text-[7px] text-[#27d8a3]">Recebido em dia</span></div>
      </div>
      <div className="mt-2 flex items-center justify-between text-[7px] font-semibold tracking-wide text-[#8d9ab1]"><span>AULAS DO DIA</span><span>SITUAÇÃO</span></div>
      <div className="mt-1 space-y-1.5">
        {['Piano Clássico', 'Teoria & Solfejo', 'Violão Erudito'].map((lesson, index) => (
          <div key={lesson} className="flex items-center justify-between rounded bg-[#11182c] px-2 py-1.5 text-[7px]"><span className="flex items-center gap-2 text-[#dce3f6]"><span className={`flex h-4 w-4 items-center justify-center rounded bg-[#172e70] text-[#3d7dff]`}>{index + 1}</span>{lesson}</span><span className="text-[#27d8a3]">Confirmado</span></div>
        ))}
      </div>
    </div>
  )
}

function ScheduleWidget() {
  return <div className="mt-5 rounded bg-[#080d1b] p-2.5 text-[7px]"><div className="flex justify-between text-[#8996ac]"><span>SLOT DISPONÍVEL</span><span className="text-[#3d7dff]">VER AGENDA</span></div><div className="mt-2 space-y-1.5"><div className="flex justify-between border-b border-white/[0.06] pb-1 text-[#dce3f6]"><span>09:30 &nbsp; Profilaxia &amp; Raspagem</span><span className="text-[#27d8a3]">Confirmado</span></div><div className="flex justify-between border-b border-white/[0.06] pb-1 text-[#dce3f6]"><span>10:30 &nbsp; Avaliação Ortodôntica</span><span className="text-[#27d8a3]">Confirmado</span></div><div className="flex justify-between text-[#dce3f6]"><span>14:30 &nbsp; Restauração de Anterior</span><span className="text-[#8490a8]">Disponível</span></div></div></div>
}

function HealthWidget() {
  return <div className="mt-5 rounded bg-[#080d1b] p-2.5 text-[7px]"><div className="flex justify-between text-[#8996ac]"><span>EXPERIÊNCIA DO PACIENTE</span><span className="text-[#27d8a3]">+42% RETENÇÃO</span></div><div className="mt-3 flex items-center gap-1"><span className="h-1.5 w-[37%] rounded-full bg-[#3d7dff]" /><span className="h-1.5 w-[27%] rounded-full bg-[#913cff]" /><span className="h-1.5 w-[22%] rounded-full bg-[#27d8a3]" /></div><div className="mt-2 flex justify-between text-[#8490a8]"><span>Prontuário</span><span>Teleconsulta</span><span>Prescrição</span></div></div>
}

function FinanceWidget() {
  return <div className="mt-5 rounded bg-[#080d1b] p-2.5 text-[7px]"><div className="flex justify-between text-[#8996ac]"><span>FLUXO ANUAL MEI</span><span className="text-[#27d8a3]">91.2% UTILIZADO</span></div><div className="mt-3 h-1.5 rounded-full bg-[#202940]"><div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#3d7dff] to-[#27d8a3]" /></div><div className="mt-2 flex justify-between text-[#8490a8]"><span>Guias Mensais em dia</span><span>12 de 12</span></div></div>
}

function ProductWidget({ type }) {
  if (type === 'schedule') return <ScheduleWidget />
  if (type === 'health') return <HealthWidget />
  return <FinanceWidget />
}

export default function Section3() {
  return (
    <section id="section3" className="relative overflow-hidden bg-[#070a14] px-8 pb-24 pt-16" aria-labelledby="section3-title">
      <div className="pointer-events-none absolute right-[-180px] top-[170px] h-[420px] w-[380px] rounded-full bg-[#285cff]/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-170px] left-[-100px] h-[330px] w-[400px] rounded-full bg-[#742dff]/25 blur-[100px]" />

      <div className="relative mx-auto max-w-[1216px]">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#283556] bg-[#0d1426] px-3 py-1.5 text-[9px] font-semibold tracking-[0.1em] text-[#a5b3d9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3d7dff] shadow-[0_0_7px_#3d7dff]" />
            PORTFÓLIO DE MICRO-SAAS
          </div>
          <h2 id="section3-title" className="mt-5 max-w-[430px] text-[2.4rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#eef1ff] sm:text-[2.8rem]">
            Produtos que resolvem
            <br />
            <span className="text-gradient-kinetic">problemas reais.</span>
          </h2>
          <p className="mt-5 max-w-[570px] text-[0.95rem] leading-[1.55] text-[#9aa8c1]">
            Cada produto nasce para atender uma necessidade específica, com tecnologia, experiência de uso e modelo de negócio pensados desde o início.
          </p>
        </div>

        <article className="mt-11 grid overflow-hidden rounded-xl border border-[#242d4b] bg-[#101426] lg:grid-cols-[1fr_1fr]">
          <div className="flex min-h-[275px] flex-col p-6 sm:p-8">
            <div className="flex items-center gap-3"><ProductStatus active>DISPONÍVEL</ProductStatus><span className="font-mono text-[8px] text-[#8793ad]">PRODUTO #01 • FLAGSHIP</span></div>
            <h3 className="mt-5 text-2xl font-bold text-[#edf0ff]">MAEZTRO Gestão</h3>
            <p className="mt-1 text-xs font-medium text-[#b7c4e8]">Gestão para professores de música.</p>
            <p className="mt-3 max-w-[420px] text-xs leading-[1.6] text-[#95a2bc]">Uma plataforma criada para simplificar a organização da rotina profissional de professores de música. Centralize alunos, controle horários de aula, mensalidades e acompanhamento didático em uma experiência fluida e sem atritos.</p>
            <div className="mt-auto flex items-center gap-3 pt-5"><a href="/maeztro" className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-r from-[#329dff] to-[#6734f5] px-4 text-[10px] font-semibold text-white shadow-[0_4px_14px_rgba(47,107,255,0.35)]"><span>Conhecer MAEZTRO</span><ArrowRight className="h-3 w-3" /></a><span className="text-[8px] font-mono text-[#8490a8]"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#27d8a3]" />Versão Web &amp; Mobile</span></div>
          </div>
          <div className="flex items-center p-6 sm:p-8"><DashboardMockup /></div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {secondaryProducts.map((product) => (
            <article key={product.number} className="flex min-h-[245px] flex-col rounded-xl border border-[#242d4b] bg-[#101426] p-5">
              <div className="flex items-center justify-between"><ProductStatus>{product.status}</ProductStatus><span className="font-mono text-[8px] text-[#8490a8]">{product.number}</span></div>
              <h3 className="mt-5 text-sm font-semibold text-[#edf0ff]">{product.title}</h3>
              <p className="mt-1 text-[9px] font-medium text-[#b7c4e8]">{product.subtitle}</p>
              <p className="mt-2 text-[9px] leading-[1.6] text-[#95a2bc]">{product.description}</p>
              <div className="mt-auto"><ProductWidget type={product.type} /><button type="button" className="mt-4 inline-flex h-7 items-center rounded border border-[#27314d] bg-[#151c30] px-3 text-[8px] text-[#a5b1c8]">Em breve</button><LockKeyhole className="float-right mt-5 h-3 w-3 text-[#8490a8]" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
