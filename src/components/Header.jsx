import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 h-20 border-b border-white/[0.06] bg-[#070a14]">
      <div className="flex h-full items-center justify-between px-8">
        <a
          href="/"
          className="flex w-[220px] items-center justify-center rounded-xl border border-white/[0.12] bg-[#141722] transition-colors hover:border-white/[0.22]"
          aria-label="GestFors - início"
        >
          <img
            src="/assets/logo_horizontal.png"
            alt="GestFors"
            className="h-auto w-[210px]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-[#9aa5ba] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#produtos"
          className="hidden h-10 items-center rounded-xl bg-gradient-to-r from-[#329dff] to-[#6734f5] px-5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(47,107,255,0.2)] transition-all hover:brightness-110 hover:shadow-[0_6px_24px_rgba(47,107,255,0.32)] md:flex"
        >
          Conheça nossos produtos
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-white/[0.1] p-2 text-[#9aa5ba] transition-colors hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-b border-white/[0.08] bg-[#10152a] px-8 py-4 md:hidden" aria-label="Navegação mobile">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#9aa5ba] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#329dff] to-[#6734f5] text-sm font-semibold text-white"
            >
              Conheça nossos produtos
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
