import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  CreditCard,
  FileText,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Dores", href: "#dores" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const benefits = [
  {
    title: "Agenda clara de aulas e horários",
    text: "Consulte seu dia e sua semana instantaneamente. Saiba quem é o próximo aluno e mantenha reposições sob controle.",
    Icon: CalendarDays,
    color: "blue",
  },
  {
    title: "Ficha completa de cada aluno",
    text: "Guarde contatos, instrumentos, repertório e observações pedagógicas em um só lugar.",
    Icon: Users,
    color: "violet",
  },
  {
    title: "Controle rigoroso de mensalidades",
    text: "Visualize rapidamente quem já pagou, o que está em aberto e acompanhe seus recebimentos.",
    Icon: CreditCard,
    color: "emerald",
  },
  {
    title: "Previsibilidade de receitas e despesas",
    text: "Saiba quanto entra no próximo mês e registre seus gastos de forma simples.",
    Icon: ClipboardList,
    color: "cyan",
  },
];

const faqs = [
  [
    "Como funciona o período de teste de 14 dias?",
    "Você recebe acesso ao ambiente do MAEZTRO e pode testar os recursos durante 14 dias, sem necessidade de cartão de crédito.",
  ],
  [
    "Quanto custa o MAEZTRO após o período de teste?",
    "O plano mensal custa R$ 29,90. No plano anual, você paga R$ 274,90 pelo período completo e economiza R$ 83,90 em relação ao mensal.",
  ],
  [
    "Posso usar o aplicativo pelo celular?",
    "Sim. O MAEZTRO foi pensado para acompanhar a rotina do professor entre uma aula e outra, no computador ou no celular.",
  ],
  [
    "O sistema emite notas fiscais e recibos?",
    "O MAEZTRO emite recibos e comprovantes de pagamento para sua organização. No momento, o sistema não emite notas fiscais.",
  ],
  [
    "Como funciona o atendimento?",
    "O suporte é feito por canais digitais, com atendimento direto para orientar o uso e recolher sugestões de evolução.",
  ],
];

function ProductHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe5f0] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <a
          href="/maeztro"
          className="flex items-center gap-3"
          aria-label="MAEZTRO Gestão - início"
        >
          <img
            src="/assets/maeztro.png"
            alt="MAEZTRO Gestão"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="text-[15px] font-bold tracking-[-0.02em] text-[#193252]">
            MAEZTRO <span className="font-medium text-[#5e7898]">Gestão</span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-[#607895] md:flex"
          aria-label="Navegação do produto"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#1765a3]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://app-maeztro.gestfors.com.br/teste-gratuito"
          target="_blank"
          rel="noreferrer"
          className="hidden h-10 items-center rounded-lg bg-[#12639e] px-4 text-sm font-semibold text-white shadow-[0_5px_15px_rgba(18,99,158,0.22)] transition hover:bg-[#0c5389] md:flex"
        >
          Teste gratuito
        </a>
        <button
          type="button"
          className="rounded-lg border border-[#dbe5f0] p-2 text-[#386286] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#dbe5f0] bg-white px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[#607895]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app-maeztro.gestfors.com.br/teste-gratuito"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[#12639e] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Teste gratuito
          </a>
        </nav>
      )}
    </header>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-bold tracking-[0.15em] text-[#1672aa]">
      {children}
    </p>
  );
}

function Maeztro() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7fafc] font-sans text-[#193252]">
      <ProductHeader />
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#edf6fc_56%,#e7f1fb_100%)] px-5 pb-20 pt-16 lg:pb-28 lg:pt-24"
        >
          <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[580px] w-[580px] rounded-full bg-[#b8dff5]/40 blur-[80px]" />
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5dced] bg-white/70 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#2b719d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16a7c9]" />
                LANÇAMENTO OFICIAL <span className="text-[#9aafc5]">
                  •
                </span>{" "}
                SOFTWARE PARA PROFESSORES DE MÚSICA
              </div>
              <h1 className="max-w-[590px] text-[2.85rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#153454] sm:text-[4rem]">
                Suas aulas em harmonia, sua rotina financeira{" "}
                <span className="text-[#1672aa]">sob controle.</span>
              </h1>
              <p className="mt-6 max-w-[530px] text-lg leading-[1.65] text-[#5c7590]">
                Chega de anotações soltas no WhatsApp e cobranças
                constrangedoras. Organize alunos, horários e mensalidades em um
                só lugar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app-maeztro.gestfors.com.br/teste-gratuito"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-[#12639e] px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(18,99,158,0.26)] transition hover:-translate-y-0.5 hover:bg-[#0c5389]"
                >
                  Teste gratuito por 14 dias <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex h-13 items-center justify-center rounded-lg border border-[#b8d2e5] bg-white/70 px-6 text-sm font-semibold text-[#356080] transition hover:bg-white"
                >
                  Conheça o MAEZTRO
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6f879e]">
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#16a7a0]" />
                  Sem cartão de crédito
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#16a7a0]" />
                  Configuração em 5 minutos
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#16a7a0]" />
                  Cancele quando quiser
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[30px] bg-[#6bb6dd]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#caddea] bg-white shadow-[0_24px_60px_rgba(28,75,115,0.18)]">
                <img
                  src="/assets/App%20Frame.png"
                  alt="Dashboard do MAEZTRO Gestão"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="dores" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-[1060px] text-center">
            <SectionLabel>DESAFIOS REAIS</SectionLabel>
            <h2 className="mx-auto mt-4 max-w-[700px] text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
              Dar aula é a sua paixão. Mas a desorganização consome o seu tempo.
            </h2>
            <p className="mx-auto mt-5 max-w-[690px] text-base leading-relaxed text-[#6c8198]">
              Professores de música perdem horas toda semana tentando conciliar
              anotações no caderno, mensagens perdidas e cobranças
              desconfortáveis.
            </p>
            <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
              {[
                [
                  "Mensagens perdidas no WhatsApp",
                  "O aluno desmarca em cima da hora e você não lembra qual horário estava livre.",
                  "Falta de agenda centralizada",
                ],
                [
                  "Constrangimento na cobrança",
                  "Sem um controle claro de vencimentos, você esquece quem pagou e quanto vai receber.",
                  "Inadimplência invisível",
                ],
                [
                  "Planilhas manuais que ninguém preenche",
                  "Atualizar planilhas pelo celular entre uma aula e outra é uma tarefa que nunca termina.",
                  "Zero previsibilidade financeira",
                ],
              ].map(([title, text, tag]) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#dce7f0] bg-white p-6 shadow-[0_8px_24px_rgba(39,82,119,0.05)]"
                >
                  <div className="mb-5 h-9 w-9 rounded-lg bg-[#e9f4fb]" />
                  <h3 className="text-lg font-bold text-[#244766]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#72869b]">
                    {text}
                  </p>
                  <p className="mt-5 border-t border-[#edf2f6] pt-4 text-xs font-semibold text-[#4e84a5]">
                    {tag}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="bg-[#eef6fb] px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-[1060px]">
            <div className="max-w-[650px]">
              <SectionLabel>BENEFÍCIOS PRÁTICOS</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
                Tudo o que você precisa para gerenciar suas aulas em poucos
                toques.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6c8198]">
                Construído especificamente para a rotina dinâmica de quem vive
                de ensinar música.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {benefits.map(({ title, text, Icon, color }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#d7e6f0] bg-white p-6"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${color === "violet" ? "bg-[#f1ebff] text-[#7652bf]" : color === "emerald" ? "bg-[#e4f8f0] text-[#179b73]" : "bg-[#e4f2fb] text-[#1672aa]"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#244766]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#72869b]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-[1060px] text-center">
            <SectionLabel>SIMPLICIDADE NA PRÁTICA</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
              Comece a organizar suas aulas em três etapas simples.
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                [
                  "01",
                  "Cadastre seus alunos",
                  "Informe o nome, dia e horário da aula, valor da mensalidade e data de vencimento.",
                ],
                [
                  "02",
                  "Consulte a agenda diária",
                  "Abra o app e tenha uma visão clara da sua grade de aulas, salas e confirmações.",
                ],
                [
                  "03",
                  "Acompanhe seu financeiro",
                  "Dê baixa nos pagamentos e veja o saldo projetado do mês crescer sem surpresas.",
                ],
              ].map(([number, title, text]) => (
                <article
                  key={number}
                  className="relative text-left md:text-center"
                >
                  <span className="font-mono text-3xl font-bold text-[#b7d3e7]">
                    {number}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#244766]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#72869b]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef6fb] px-5 py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1060px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>RECURSOS INTEGRADOS</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
                Controle de rotina completo em um único ambiente.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6c8198]">
                Mantenha agenda, recibos, declarações de frequência e guias MEI
                sincronizados.
              </p>
              <div className="mt-7 space-y-4 text-sm text-[#58718a]">
                <p className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-[#1672aa]" />
                  Calendário inteligente de aulas
                </p>
                <p className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-[#1672aa]" />
                  Recibos e comprovantes em PDF
                </p>
                <p className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-[#1672aa]" />
                  Controle MEI e despesas
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#d2e3ed] bg-white p-3 shadow-[0_16px_40px_rgba(39,82,119,0.1)]">
              <img
                src="/assets/App%20Frame.png"
                alt="Recursos do dashboard MAEZTRO"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        <section
          id="planos"
          className="scroll-mt-20 bg-[#f7fafc] px-5 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1060px] text-center">
            <SectionLabel>PLANOS TRANSPARENTES</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
              Escolha o ritmo que combina com sua rotina.
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-relaxed text-[#6c8198]">
              Comece com 14 dias grátis e tenha agenda, alunos e financeiro
              organizados em um só lugar.
            </p>
            <div className="mx-auto mt-12 grid max-w-[820px] gap-5 text-left md:grid-cols-2">
              <article className="rounded-2xl border border-[#d4e3ec] bg-white p-7 shadow-[0_10px_28px_rgba(39,82,119,0.06)]">
                <p className="text-sm font-bold text-[#52708b]">Plano Mensal</p>
                <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#193252]">
                  R$ 29,90
                  <span className="text-sm font-medium text-[#8194a7]">
                    {" "}
                    /mês
                  </span>
                </p>
                <p className="mt-3 text-sm text-[#72869b]">
                  Flexibilidade para começar sem compromisso anual.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#58718a]">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    Todos os recursos essenciais
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    Suporte digital
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    Cancele quando quiser
                  </li>
                </ul>
                <a
                  href="https://pay.kiwify.com.br/LNHszQc"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg border border-[#b8d2e5] text-sm font-bold text-[#356080] transition hover:bg-[#eef6fb]"
                >
                  Assinar plano mensal
                </a>
              </article>
              <article className="relative rounded-2xl border-2 border-[#1672aa] bg-white p-7 shadow-[0_14px_35px_rgba(22,114,170,0.14)]">
                <span className="absolute -top-3 left-6 rounded-full bg-[#1672aa] px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-white">
                  MELHOR VALOR
                </span>
                <p className="text-sm font-bold text-[#1672aa]">Plano Anual</p>
                <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#193252]">
                  R$ 274,90
                  <span className="text-sm font-medium text-[#8194a7]">
                    {" "}
                    /ano
                  </span>
                </p>
                <p className="mt-3 text-sm text-[#72869b]">
                  Equivale a{" "}
                  <strong className="text-[#356080]">R$ 22,91/mês</strong> e
                  economiza R$ 83,90.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#58718a]">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    Todos os recursos essenciais
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    Suporte digital prioritário
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#16a7a0]" />
                    23% de economia no ano
                  </li>
                </ul>
                <a
                  href="https://pay.kiwify.com.br/h4t2yde"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#12639e] text-sm font-bold text-white transition hover:bg-[#0c5389]"
                >
                  Escolher plano anual <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </div>
            <p className="mt-6 text-xs text-[#8499ab]">
              Teste gratuito por 14 dias. Sem necessidade de cartão de crédito.
            </p>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-[820px]">
            <div className="text-center">
              <SectionLabel>TIRE SUAS DÚVIDAS</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
                Perguntas frequentes.
              </h2>
              <p className="mt-4 text-base text-[#6c8198]">
                Tudo o que você precisa saber antes de começar.
              </p>
            </div>
            <div className="mt-10 divide-y divide-[#dce7f0] border-y border-[#dce7f0]">
              {faqs.map(([question, answer], index) => (
                <div key={question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-[#244766]"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    {question}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#1672aa] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-[#72869b]">
                      {answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formulario" className="bg-[#eaf4fb] px-5 py-20 lg:py-28">
          <div className="mx-auto grid max-w-[980px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>COMECE AGORA</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#193252] sm:text-4xl">
                Inicie seu teste gratuito por 14 dias.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#6c8198]">
                Preencha seus dados para receber o acesso imediato ao ambiente
                do MAEZTRO Gestão.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-[#58718a]">
                <Sparkles className="h-5 w-5 text-[#1672aa]" />
                Sem spam. Apenas o acesso para você começar.
              </div>
            </div>
            <form
              className="rounded-2xl border border-[#d3e3ed] bg-white p-6 shadow-[0_14px_35px_rgba(39,82,119,0.08)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold text-[#52708b]">
                  Nome completo
                  <input
                    required
                    className="mt-2 h-11 w-full rounded-lg border border-[#d6e3eb] px-3 text-sm font-normal text-[#193252] outline-none focus:border-[#1672aa]"
                  />
                </label>
                <label className="text-xs font-semibold text-[#52708b]">
                  WhatsApp com DDD
                  <input
                    required
                    className="mt-2 h-11 w-full rounded-lg border border-[#d6e3eb] px-3 text-sm font-normal text-[#193252] outline-none focus:border-[#1672aa]"
                  />
                </label>
              </div>
              <label className="mt-4 block text-xs font-semibold text-[#52708b]">
                Tipo de negócio ou atuação
                <input className="mt-2 h-11 w-full rounded-lg border border-[#d6e3eb] px-3 text-sm font-normal text-[#193252] outline-none focus:border-[#1672aa]" />
              </label>
              <a href="https://app-maeztro.gestfors.com.br/teste-gratuito" target="_blank" rel="noreferrer" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#12639e] text-sm font-bold text-white transition hover:bg-[#0c5389]">
                Quero testar o MAEZTRO <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-center text-[11px] text-[#8499ab]">
                Ao solicitar o teste, você concorda com os Termos de Uso e
                Política de Privacidade.
              </p>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#d9e5ed] bg-white px-5 py-8 text-sm text-[#71869a]">
        <div className="mx-auto flex max-w-[1060px] flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-semibold text-[#244766]"
          >
            <img
              src="/assets/maeztro.png"
              alt="MAEZTRO"
              className="h-8 w-8 rounded-lg object-cover"
            />
            MAEZTRO Gestão
          </a>
          <p>
            © 2026 GestFors - Soluções digitais. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="/privacidade" className="hover:text-[#1672aa]">
              Privacidade
            </a>
            <a href="/termos" className="hover:text-[#1672aa]">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Maeztro;
