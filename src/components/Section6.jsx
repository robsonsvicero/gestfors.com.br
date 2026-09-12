import { ArrowRight, Mail } from 'lucide-react'

export default function Section6() {
  return (
    <section id="section6" className="relative overflow-hidden bg-[#090c16] px-8 py-20 sm:py-24" aria-labelledby="section6-title">
      <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(87,43,207,0.35)_0%,rgba(47,107,255,0.13)_42%,transparent_74%)] blur-[55px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[280px] w-[480px] -translate-x-1/2 rounded-full bg-[#2f6bff]/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#293556] bg-[#101426] px-4 py-2 text-[10px] font-semibold tracking-[0.11em] text-[#b8c4e6] shadow-[0_0_18px_rgba(47,107,255,0.08)]">
          <span className="h-2 w-2 rounded-full bg-[#3d7dff] shadow-[0_0_8px_#3d7dff]" />
          CONTINUIDADE
        </div>

        <h2 id="section6-title" className="mt-8 text-[2.5rem] font-bold leading-[1.12] tracking-[-0.04em] text-[#eef1ff] sm:text-[3rem]">
          Um problema pode ser o começo de
          <br />
          <span className="text-gradient-kinetic">um produto.</span>
        </h2>

        <p className="mt-7 text-[1.05rem] leading-relaxed text-[#9aa8c1]">
          Conheça as soluções que estamos construindo.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a href="#section3" className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#329dff] to-[#6734f5] px-8 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(47,107,255,0.42)] transition-all hover:-translate-y-0.5 hover:brightness-110">
            Conheça nossos produtos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contato" className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-[#343c5b] bg-[#15152b]/80 px-7 text-sm font-medium text-[#eef1ff] transition-colors hover:border-[#59678d] hover:bg-[#1b1d36]">
            <Mail className="h-4 w-4 text-[#3d7dff]" />
            Fale com nossa equipe
          </a>
        </div>
      </div>
    </section>
  )
}
