import React from 'react';
import { 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
} from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section1 from './components/Section1.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';
import Section5 from './components/Section5.jsx';
import Section6 from './components/Section6.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';
import Maeztro from './pages/Maeztro.jsx';

export default function App() {
  if (window.location.pathname === '/privacidade') {
    return <PrivacyPolicy />;
  }

  if (window.location.pathname === '/termos') {
    return <TermsOfUse />;
  }

  if (window.location.pathname === '/maeztro') {
    return <Maeztro />;
  }

  return (
    <div id="inicio" className="min-h-screen bg-[#070a14] text-[#eef1fb] font-sans selection:bg-[#2f6bff]/30 selection:text-white relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#2f6bff]/15 via-[#7b2ff7]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-[#2f6bff]/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] -right-[200px] w-[600px] h-[600px] bg-[#7b2ff7]/10 blur-[150px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #eef1fb 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <Header />

      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* Flagship Product: MAEZTRO */}
      <section id="maestro" className="py-20 bg-[#0b0e18] border-y border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-xs font-mono text-[#3b9dff] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3b9dff] animate-pulse" />
                FLAGSHIP PRODUCT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                MAEZTRO — Gestão Musical & Ensino de Alta Precisão
              </h2>
            </div>
            <p className="text-[#94a3b8] max-w-md text-sm sm:text-base">
              A plataforma definitiva para conservatórios, escolas de música e professores independentes orquestrarem matrículas, finanças e pedagogia.
            </p>
          </div>

          {/* Interactive Flagship Showcase Card */}
          <div className="rounded-2xl bg-[#10152a] border border-white/[0.1] p-6 lg:p-10 shadow-[0_24px_64px_-12px_rgba(2,4,10,0.85)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Product Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Autonomia operacional para o ecossistema da educação musical
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Elimine planilhas desconexas e softwares engessados. O MAEZTRO integra controle de faltas, grade dinâmica de horários, emissão de cobranças automáticas e acompanhamento pedagógico detalhado do aluno.
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141a33]/60 border border-white/[0.06]">
                    <div className="p-2 rounded-lg bg-[#2f6bff]/15 text-[#3b9dff]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Grade Horária Inteligente com Detecção de Conflitos</h4>
                      <p className="text-xs text-[#94a3b8] mt-0.5">Alocação de salas, professores e alunos sem sobreposição de horários.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141a33]/60 border border-white/[0.06]">
                    <div className="p-2 rounded-lg bg-[#7b2ff7]/15 text-[#d2bbff]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Cobrança e Mensalidades Automatizadas</h4>
                      <p className="text-xs text-[#94a3b8] mt-0.5">Pix automático, régua de cobrança e baixa de inadimplência em tempo real.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#141a33]/60 border border-white/[0.06]">
                    <div className="p-2 rounded-lg bg-[#10b981]/15 text-[#10b981]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Diário de Bordo Pedagógico</h4>
                      <p className="text-xs text-[#94a3b8] mt-0.5">Registro de repertório, evolução técnica de instrumentos e tarefas semanais.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a 
                    href="https://maeztro.com.br" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl gradient-kinetic-core text-white font-semibold text-sm shadow-[0_4px_20px_rgba(47,107,255,0.4)] hover:brightness-110 flex items-center gap-2"
                  >
                    <span>Conhecer o MAEZTRO em Detalhes</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-xs font-mono text-[#8891ab]">Live Production</span>
                </div>
              </div>

              {/* Right Column: High-Fidelity Interactive Telemetry / Dashboard Mockup */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-[#070a14] border border-white/[0.12] p-5 shadow-2xl space-y-4">
                  
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="ml-2 text-xs font-mono text-[#8891ab]">maeztro.app/console/dashboard</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded border border-[#10b981]/20">
                      Sincronizado
                    </span>
                  </div>

                  {/* Micro Dashboard Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-[#10152a] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-[#8891ab] uppercase">Alunos Ativos</span>
                      <p className="text-lg font-bold text-white mt-1">142</p>
                      <span className="text-[10px] text-[#10b981]">+8% este mês</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#10152a] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-[#8891ab] uppercase">Retenção Anual</span>
                      <p className="text-lg font-bold text-white mt-1">94.2%</p>
                      <span className="text-[10px] text-[#3b9dff]">Nível Superior</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#10152a] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-[#8891ab] uppercase">Aulas Hoje</span>
                      <p className="text-lg font-bold text-white mt-1">28</p>
                      <span className="text-[10px] text-[#d2bbff]">3 salas ativas</span>
                    </div>
                  </div>

                  {/* Class Schedule Mini-View */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-[#8891ab] tracking-wider block">
                      Grade Atual (Em Andamento)
                    </span>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-[#161c36] border border-[#2f6bff]/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-6 rounded-full bg-[#2f6bff]" />
                          <div>
                            <p className="font-semibold text-white">Piano Clássico — Avançado</p>
                            <p className="text-[11px] text-[#94a3b8]">Prof. Arthur V. • Sala Acústica 1</p>
                          </div>
                        </div>
                        <span className="font-mono text-[#3b9dff] text-[11px]">15:00 - 16:00</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#10152a] border border-white/[0.06] flex items-center justify-between text-xs opacity-90">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-6 rounded-full bg-[#7b2ff7]" />
                          <div>
                            <p className="font-semibold text-white">Violoncelo e Percepção Musical</p>
                            <p className="text-[11px] text-[#94a3b8]">Profa. Mariana L. • Sala 3</p>
                          </div>
                        </div>
                        <span className="font-mono text-[#94a3b8] text-[11px]">16:00 - 17:00</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#10152a] border border-white/[0.06] flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-6 rounded-full bg-white/20" />
                          <div>
                            <p className="font-semibold text-white">Harmonia Funcional Aplicada</p>
                            <p className="text-[11px] text-[#94a3b8]">Prof. Carlos D. • Auditório</p>
                          </div>
                        </div>
                        <span className="font-mono text-[#8891ab] text-[11px]">17:15 - 18:30</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Micro-SaaS Ecosystem Grid */}
      <section id="produtos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7b2ff7]/10 border border-[#7b2ff7]/30 text-xs font-mono text-[#d2bbff]">
            <span>MODULAR SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ecossistema de Soluções Especializadas
          </h2>
          <p className="text-[#94a3b8] text-base">
            Cada micro-SaaS é projetado como uma ferramenta pontual, sem complexidade desnecessária e com máxima aderência à rotina do operador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AgendaVitta */}
          <div className="rounded-2xl bg-[#10152a] border border-white/[0.08] hover:border-[#2f6bff]/40 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/25 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                  EM PRODUÇÃO
                </span>
                <span className="text-xs font-mono text-[#8891ab]">Saúde & Consultórios</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#3b9dff] transition-colors">
                AgendaVitta
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Agendamento inteligente, prontuário resumido e confirmação automática de consultas via WhatsApp para profissionais de saúde independentes.
              </p>

              <ul className="text-xs text-[#94a3b8] space-y-2 pt-2 border-t border-white/[0.06]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b9dff]" />
                  Zero no-shows com lembretes inteligentes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b9dff]" />
                  Prontuário rápido em menos de 4 cliques
                </li>
              </ul>
            </div>

            {/* <div className="pt-6">
              <span className="text-xs font-semibold text-[#3b9dff] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Conhecer módulo <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div> */}
          </div>

          {/* Card 2: GestFors Financeiro */}
          <div className="rounded-2xl bg-[#10152a] border border-white/[0.08] hover:border-[#7b2ff7]/40 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#7b2ff7]/10 text-[#d2bbff] border border-[#7b2ff7]/25 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7b2ff7]" />
                  BETA PRIVADO
                </span>
                <span className="text-xs font-mono text-[#8891ab]">Finanças Operacionais</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#d2bbff] transition-colors">
                FluxoCore
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Gestão de fluxo de caixa, conciliação bancária Open Finance e projeção de faturamento sem planilhas inchadas para prestadores de serviço e MEIs.
              </p>

              <ul className="text-xs text-[#94a3b8] space-y-2 pt-2 border-t border-white/[0.06]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d2bbff]" />
                  DRE instantânea sem jargão contábil
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d2bbff]" />
                  Previsibilidade de capital de giro em 30 dias
                </li>
              </ul>
            </div>

            {/* <div className="pt-6">
              <span className="text-xs font-semibold text-[#d2bbff] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Solicitar acesso antecipado <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div> */}
          </div>

          {/* Card 3: Hub de Integrações & APIs */}
          <div className="rounded-2xl bg-[#10152a] border border-white/[0.08] hover:border-[#3b9dff]/40 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.05] text-[#94a3b8] border border-white/[0.1] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  PIPELINE
                </span>
                <span className="text-xs font-mono text-[#8891ab]">Conectividade</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#3b9dff] transition-colors">
                ConnectEdge
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Webhooks resilientes e barramento de eventos integrando gateways de pagamento, emissão de NFe e mensageria em uma única esteira serverless.
              </p>

              <ul className="text-xs text-[#94a3b8] space-y-2 pt-2 border-t border-white/[0.06]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b9dff]" />
                  Retentativas inteligentes com backoff exponencial
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b9dff]" />
                  Logs de auditoria criptográfica de ponta a ponta
                </li>
              </ul>
            </div>

            {/* <div className="pt-6">
              <span className="text-xs font-semibold text-[#3b9dff] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Ver roadmap técnico <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div> */}
          </div>

        </div>
      </section>

      {/* Technical Manifesto / Architecture */}
      <section id="arquitetura" className="py-20 bg-[#0b0e18] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2f6bff]/10 border border-[#2f6bff]/30 text-xs font-mono text-[#3b9dff]">
                <span>MANIFIESTO DE ENGENHARIA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Software enxuto não é corte de recursos. É respeito pelo seu tempo.
              </h2>
              <p className="text-base text-[#94a3b8] leading-relaxed">
                Na GestFors, rejeitamos a cultura do software inchado, repleto de telas esquecidas e interfaces confusas. Cada linha de código que escrevemos existe para cumprir uma função clara, em menos cliques, com máxima velocidade de resposta.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#2f6bff]/15 flex items-center justify-center text-[#3b9dff] shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Arquitetura de Baixa Latência</h3>
                    <p className="text-sm text-[#94a3b8]">Deploy em borda com cold-start zero e tempos de resposta abaixo de 50 milissegundos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#7b2ff7]/15 flex items-center justify-center text-[#d2bbff] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Isolamento Modular de Dados</h3>
                    <p className="text-sm text-[#94a3b8]">Cada aplicação possui seu escopo soberano, garantindo segurança estrita e portabilidade para os clientes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/15 flex items-center justify-center text-[#10b981] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Soberania e Privacidade Rigorosa</h3>
                    <p className="text-sm text-[#94a3b8]">Nenhum dado é comercializado. Nossos sistemas operam sob conformidade total com a LGPD e criptografia de ponta.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code / Architecture Blueprint Window */}
            <div className="rounded-xl bg-[#10152a] border border-white/[0.1] p-6 shadow-2xl font-mono text-xs text-[#94a3b8] space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[11px]">
                <span className="text-[#3b9dff]">architecture-spec.yaml</span>
                <span className="text-[#8891ab]">gestfors-core-v2</span>
              </div>
              <div className="space-y-1.5 text-[12px] leading-relaxed overflow-x-auto">
                <p><span className="text-[#7b2ff7]">system:</span> <span className="text-[#eef1fb]">GestFors Digital Core</span></p>
                <p><span className="text-[#7b2ff7]">runtime:</span> <span className="text-[#3b9dff]">Edge Distributed Workers</span></p>
                <p><span className="text-[#7b2ff7]">principles:</span></p>
                <p className="pl-4"><span className="text-[#10b981]">-</span> zero_dependency_bloat: <span className="text-[#3b9dff]">true</span></p>
                <p className="pl-4"><span className="text-[#10b981]">-</span> sub_50ms_latency: <span className="text-[#3b9dff]">enforced</span></p>
                <p className="pl-4"><span className="text-[#10b981]">-</span> dark_precision_ui: <span className="text-[#3b9dff]">kinetic_minimalism</span></p>
                <p><span className="text-[#7b2ff7]">flagship:</span></p>
                <p className="pl-4"><span className="text-[#7b2ff7]">name:</span> <span className="text-[#eef1fb]">MAEZTRO</span></p>
                <p className="pl-4"><span className="text-[#7b2ff7]">status:</span> <span className="text-[#10b981]">active_production</span></p>
                <p className="pl-4"><span className="text-[#7b2ff7]">target:</span> <span className="text-[#94a3b8]">Escolas de Música & Especialistas</span></p>
                <p><span className="text-[#7b2ff7]">security:</span></p>
                <p className="pl-4"><span className="text-[#7b2ff7]">encryption:</span> <span className="text-[#3b9dff]">AES-256-GCM + TLS 1.3</span></p>
                <p className="pl-4"><span className="text-[#7b2ff7]">lgpd_compliance:</span> <span className="text-[#10b981]">verified</span></p>
              </div>
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                <span className="text-[#8891ab]">Checksum: SHA256-VALID</span>
                <span className="text-[#10b981]">Status: 200 OK</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-[#10152a] to-[#070a14] border border-white/[0.12] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#2f6bff]/20 blur-[90px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-[#b5c4ff]">
              <span>PARCERIAS & DESENVOLVIMENTO DE PRODUTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Pronto para elevar a maturidade digital da sua operação?
            </h2>

            <p className="text-base text-[#94a3b8] max-w-xl mx-auto">
              Seja para adotar o ecossistema MAEZTRO ou para discutir um micro-SaaS sob medida para o seu nicho, nosso time de engenharia está à disposição.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:contato@gestfors.com.br"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl gradient-kinetic-core text-white font-semibold text-base shadow-[0_4px_24px_rgba(47,107,255,0.4)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200"
              >
                Falar com a GestFors
              </a>
              <a 
                href="https://wa.me/5511964932007" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-semibold text-base transition-all duration-200"
              >
                Canal WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
