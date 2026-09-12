import { FileText, Mail, Shield } from 'lucide-react'

const navigationLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Produtos', href: '/#section3' },
  { label: 'Sobre', href: '/#section4' },
  { label: 'Contato', href: '/#contato' },
]

const productLinks = [
  { label: 'MAEZTRO Gestão', status: 'ATIVO', tone: 'emerald' },
  { label: 'AgendaVitta', status: 'EM BREVE', tone: 'violet' },
  { label: 'Saúde Digital', status: 'BUILD', tone: 'slate' },
  { label: 'Micro-SaaS para MEIs', status: 'BUILD', tone: 'slate' },
]

function ProductStatus({ status, tone }) {
  const toneClasses = {
    emerald: 'border-[#116b5b] bg-[#0b2b2d] text-[#27d8a3]',
    violet: 'border-[#5722a1] bg-[#211044] text-[#c0a8ff]',
    slate: 'border-[#343c55] bg-[#1b2030] text-[#adb6cb]',
  }

  return <span className={`rounded border px-1.5 py-1 text-[8px] font-semibold tracking-wide ${toneClasses[tone]}`}>{status}</span>
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a14] px-8 pb-12 pt-16 text-[#8f9bb3]" aria-label="Rodapé">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid gap-12 lg:grid-cols-[1.65fr_0.7fr_1fr_1fr] lg:gap-16">
          <div className="max-w-[430px]">
            <a href="/" className="flex w-[240px] items-center justify-center rounded-xl border border-white/[0.12] bg-[#141722] transition-colors hover:border-white/[0.22]" aria-label="GestFors - início">
              <img src="/assets/logo_vertical.png" alt="GestFors" className="w-[220px]" />
            </a>
            <h2 className="mt-6 text-base font-semibold text-[#edf0ff]">GestFors Soluções Digitais</h2>
            <p className="mt-3 max-w-[410px] text-sm leading-[1.65] text-[#91a0ba]">Tecnologia focada na criação, desenvolvimento e evolução de micro-SaaS e produtos digitais para nichos específicos.</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex h-8 items-center gap-2 rounded-lg border border-[#202a44] bg-[#101426] px-3 font-mono text-[11px] text-[#b3bfd4]"><span className="h-2 w-2 rounded-full bg-[#27d8a3] shadow-[0_0_7px_#27d8a3]" />Sistemas em Produção</span>
              <a href="mailto:contato@gestfors.com.br" className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a3247] bg-[#151a29] text-[#9eabc2] transition-colors hover:border-[#3d7dff] hover:text-[#3d7dff]" aria-label="Enviar e-mail"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.09em] text-[#bdc9e8]">NAVEGAÇÃO</h3>
            <ul className="mt-5 space-y-4 text-sm">
              {navigationLinks.map((link) => <li key={link.href}><a href={link.href} className="transition-colors hover:text-white"><span className="mr-2 text-[#526079]">›</span>{link.label}</a></li>)}
            </ul>
          </nav>

          <nav aria-label="Produtos e soluções">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.09em] text-[#bdc9e8]">PRODUTOS &amp; SOLUÇÕES</h3>
            <ul className="mt-5 space-y-4 text-sm">
              {productLinks.map((product) => <li key={product.label} className="flex items-center gap-2"><a href="/#section3" className="transition-colors hover:text-white">{product.label}</a><ProductStatus status={product.status} tone={product.tone} /></li>)}
            </ul>
          </nav>

          <nav aria-label="Termos e governança">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.09em] text-[#bdc9e8]">TERMOS &amp; GOVERNANÇA</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li><a href="/privacidade" className="flex items-start gap-2 transition-colors hover:text-white"><Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#526079]" />Política de<br />Privacidade</a></li>
              <li><a href="/termos" className="flex items-center gap-2 transition-colors hover:text-white"><FileText className="h-3.5 w-3.5 text-[#526079]" />Termos de Uso</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs sm:flex-row sm:items-center">
          <p>© 2026 GestFors Soluções Digitais. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2 font-mono text-[#aeb8cb]"><span className="h-1.5 w-1.5 rounded-full bg-[#3d7dff] shadow-[0_0_6px_#3d7dff]" />São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  )
}
