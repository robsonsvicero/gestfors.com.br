# GestFors Design System Specification (DS.md)
*Sistema de Design & Arquitetura Visual para GestFors Soluções Digitais e Ecossistema Micro-SaaS*

---

## 1. Princípios de Design & Identidade

O Design System da **GestFors Soluções Digitais** reflete o posicionamento da marca: uma empresa de tecnologia focada em engenharia de produto, micro-SaaS enxutos, arquitetura modular de alta performance (edge routing, zero bloat) e interfaces sem atritos para autônomos e especialistas de nicho.

### Pilares Fundamentais:
1. **Engenharia & Rigor Técnico:** Elementos visuais inspirados em esquemas de sistemas, dados em tempo real, telemetria, nós de rede e código declarativo limpo.
2. **Alta Densidade com Amplo Respiro:** Grid estruturado e rigoroso com amplo espaço negativo (whitespace/darkspace), evitando sobrecarga cognitiva.
3. **Profundidade Óptica & Luminescência:** Fundo escuro profundo (`#070a14` / `#0b0e18`) combinado com cartões translúcidos em camadas (`backdrop-blur`) e glows focais derivados da paleta primária.
4. **Sem Artifícios Genéricos:** Ausência total de clichês de templates de startups, ilustrações vazias ou buzzwords de marketing. Cada elemento tem função e utilidade.

---

## 2. Cores & Tokens Semânticos

### 2.1 Cores Base da Marca (Brand Palettes)
- **Primary / Cobalt Blue:** `#2f6bff` (Ação principal, destaques de conectividade, nós de API)
- **Primary Bright / Accent:** `#3b9dff` (Ponto focal de iluminação e gradientes)
- **Primary Tint / Soft:** `#b5c4ff` (Eyebrows, tags técnicas, subtítulos suaves)
- **Secondary / Kinetic Violet:** `#7b2ff7` (Módulos em desenvolvimento, inovação, transições)
- **Secondary Tint:** `#d2bbff` (Labels e badges em segundo nível)
- **Success / Emerald:** `#10b981` (Status em produção, SLA contínuo, validação ativa)
- **Success Glow:** `#27c93f` (Indicadores de status do sistema)

### 2.2 Superfícies (Dark Surfaces)
- **Surface Lowest (Canvas Base):** `#070a14`
- **Surface Dim (Secondary Sections):** `#0b0e18`
- **Surface Container Low:** `#10152a` (Backdrop para cartões e modais com opacidade 80-95%)
- **Surface Container (Card Base):** `#141a33`
- **Surface Container High:** `#1c2237` (Camadas elevadas de interação)
- **Surface Bright (Hover & Borders):** `#363944`

### 2.3 Tipografia e Cores de Texto (On-Surface)
- **Text Primary (On-Surface):** `#eef1fb` (Títulos H1-H4, valores de métricas, ênfases)
- **Text Secondary (On-Surface Variant):** `#94a3b8` (Parágrafos explicativos, descrições, labels de formulários)
- **Text Subtle / Muted:** `#64748b` (Metadados secundários, timestamps, borders sutis)

### 2.4 Gradiente Oficial da Marca
```css
/* Kinetic Core Gradient */
background: linear-gradient(115deg, #3b9dff 0%, #2f6bff 45%, #7b2ff7 100%);
```

---

## 3. Tipografia & Escala de Tipos

A tipografia unificada é a **DM Sans** para todas as instâncias de interface, combinada com fontes monoespaçadas de sistema (JetBrains Mono / SF Mono / Consolas) para telemetria, logs de sistema e parâmetros de engenharia.

| Token / Nível | Família | Peso | Tamanho | Line-Height | Tracking | Aplicação |
|---|---|---|---|---|---|---|
| `display-xl` | DM Sans | 700 Bold | 56px (3.5rem) | 1.12 | -0.03em | Headlines Hero Desktop |
| `display-lg` | DM Sans | 700 Bold | 44px (2.75rem) | 1.18 | -0.03em | Títulos de Seção H2 Desktop |
| `title-lg` | DM Sans | 600 SemiBold | 24px (1.5rem) | 1.3 | -0.02em | Títulos de Cartões e Produtos |
| `title-md` | DM Sans | 600 SemiBold | 18px (1.125rem) | 1.4 | -0.01em | Subtítulos e Módulos |
| `body-lg` | DM Sans | 400 Regular | 18px (1.125rem) | 1.6 | normal | Parágrafos de Introdução |
| `body-md` | DM Sans | 400 Regular | 14px–15px | 1.6 | normal | Parágrafos e Descrições de Card |
| `body-sm` | DM Sans | 400 Regular | 12px–13px | 1.5 | normal | Legendas, notas de rodapé, tabelas |
| `label-mono` | JetBrains Mono / font-mono | 600 SemiBold | 10px–11px | 1.2 | +0.08em | Badges de status, endpoints, tags de arquitetura |

---

## 4. Elevação, Bordas e Efeitos

### Raios de Borda (Border Radius)
- **Tokens:**
  - `rounded-lg`: 8px (Inputs, badges de métricas, itens de lista internos)
  - `rounded-xl`: 12px (Botões principais, seletores, sub-cards)
  - `rounded-2xl`: 16px (Cartões mestres de produto, seções em destaque, modais)
  - `rounded-full`: 9999px (Pills de status, chips de tecnologia, indicadores)

### Bordas & Delimitadores
- **Standard Border:** `1px solid rgba(255, 255, 255, 0.08)`
- **Interactive Border Hover:** `1px solid rgba(47, 107, 255, 0.40)`
- **Active / Accent Border:** `1px solid rgba(123, 47, 247, 0.40)`

### Efeitos de Superfície & Sombras
- **Card Backdrop Blur:** `backdrop-filter: blur(16px); background-color: rgba(16, 21, 42, 0.85);`
- **Soft Glow Primary:** `box-shadow: 0 4px 24px rgba(47, 107, 255, 0.35);`
- **Card Hover Elevation:** `box-shadow: 0 16px 40px rgba(47, 107, 255, 0.15); transform: translateY(-2px);`

---

## 5. Biblioteca de Componentes

### 5.1 Botões (Actions)
- **Primary Button:**
  - Fundo: Gradiente cinético da marca (`#3b9dff` -> `#2f6bff` -> `#7b2ff7`).
  - Texto: Branco `#ffffff`, SemiBold, 14px.
  - Hover: `brightness-110`, glow `rgba(47,107,255,0.45)`, translação vertical `-1px`.
- **Secondary / Ghost Button:**
  - Fundo: `rgba(16, 21, 42, 0.60)` com borda `rgba(255, 255, 255, 0.12)`.
  - Texto: `#eef1fb`, com ícone com cor de acento `#2f6bff`.
  - Hover: Fundo `rgba(16, 21, 42, 0.95)`, borda reforçada `rgba(255, 255, 255, 0.25)`.

### 5.2 Badges & Status Chips
- **Status Ativo / Produção:** Fundo `rgba(16, 185, 129, 0.10)`, texto `#10b981`, borda `rgba(16, 185, 129, 0.30)`, ponto pulsante com animação `ping`.
- **Status Em Desenvolvimento:** Fundo `rgba(123, 47, 247, 0.10)`, texto `#d2bbff`, borda `rgba(123, 47, 247, 0.30)`.
- **Status Pipeline / Pesquisa:** Fundo `rgba(255, 255, 255, 0.05)`, texto `#94a3b8`, borda `rgba(255, 255, 255, 0.10)`.

### 5.3 Arquitetura de Cartões
- **Flagship Card (MAEZTRO):** Grid em 12 colunas dividido entre especificações de negócio e live mockup interativo (métrica de retenção, grade horária de aulas, alunos ativos).
- **Secondary Product Cards (AgendaVitta, Saúde Digital, MEIs):** Formato vertical compacto com badge de status no topo, título, proposta de valor e micro-widget ilustrativo.

---

## 6. Governança e Regras de Implementação
- Não utilizar fontes de template serifadas ou handwriting.
- Toda animação deve priorizar transições de aceleração suave (`cubic-bezier(0.16, 1, 0.3, 1)` ou `ease-out`) com duração máxima de 250ms a 350ms.
- Preservar o contraste mínimo WCAG AAA para todos os blocos de texto principais sobre fundos pretos/azul-escuros.
