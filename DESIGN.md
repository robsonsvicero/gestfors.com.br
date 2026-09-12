---
name: GestFors Kinetic Architecture
colors:
  surface: '#10131d'
  surface-dim: '#10131d'
  surface-bright: '#363944'
  surface-container-lowest: '#0b0e18'
  surface-container-low: '#181b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313440'
  on-surface: '#e0e2f1'
  on-surface-variant: '#c3c5d8'
  inverse-surface: '#e0e2f1'
  inverse-on-surface: '#2d303b'
  outline: '#8d90a1'
  outline-variant: '#434655'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#00297a'
  primary-container: '#2f6bff'
  on-primary-container: '#000318'
  inverse-primary: '#0051e0'
  secondary: '#d2bbff'
  on-secondary: '#3e008e'
  secondary-container: '#6800e4'
  on-secondary-container: '#d2bbff'
  tertiary: '#a2c9ff'
  on-tertiary: '#00315b'
  tertiary-container: '#0079d2'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5900c6'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a2c9ff'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#004881'
  background: '#10131d'
  on-background: '#e0e2f1'
  surface-variant: '#313440'
typography:
  display-hero:
    fontFamily: DM Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: DM Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: DM Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  metric-display:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-precision, technical, and sober digital ecosystem tailored for solo professionals, independent operators, and specialized micro-SaaS platforms. The aesthetic fuses the architectural discipline of modern developer and venture tooling with restrained visual elegance: profound deep-space backgrounds, razor-sharp geometric alignment, glassine overlays, and energetic photon-grade violet and electric-blue accents.

The interface prioritizes utility, data density, and cognitive clarity over decorative noise. It projects institutional credibility and engineered authority, assuring autonomous users that their business-critical workflows operate on enterprise-grade software. The design movement marries **Dark Precision Minimalism** with refined **Linear Glassmorphism**—relying on hairline translucent borders, calculated contrast ratios, deep volumetric panels, and calibrated kinetic feedback to define a bespoke digital presence.

## Colors

The color palette is built on strict functional hierarchy within a zero-glare, dark-first spectrum:

- **Canvas & Surface Architecture**:
  - Deep Canvas (`--bg-deep`: `#070a14`): The foundational infinite surface for base viewports.
  - Surface Panel (`--bg-panel`: `#10152a`): Elevated surface layer for dashboards, cards, sidebars, and control modals.
  - Floating Sub-panel (`#161c36`): Secondary container elevation for high-order groupings within panels.
- **Accents & Energizers**:
  - Primary Electric Blue (`--blue-electric`: `#2f6bff`): Primary triggers, links, key statuses, and active navigation indicators.
  - Highlight Cyan-Blue (`--blue-bright`: `#3b9dff`): High-focus states, gradient anchors, and data visualization highlights.
  - Royal Violet (`--purple-accent`: `#7b2ff7`): Tertiary highlights, active toggle stamps, and conversion moments.
  - Deep Amethyst (`--purple-deep`: `#5b1fd6`): Hover/active depths and rich linear surface treatments.
- **Text & Contrast Tokens**:
  - Main Heading & Body (`--text-main`: `#eef1fb`): Clean, balanced contrast against dark panels with zero chromatic aberration.
  - Muted / Secondary Typography (`--text-muted`: `#8891ab`): Sub-labels, inactive states, hints, and structural captions.
- **Structural Edges & Transitions**:
  - Translucent Border (`--border-soft`: `rgba(255, 255, 255, 0.08)`): Sub-pixel divider lines separating modules without visual weight.
  - Signature Action Gradient: `linear-gradient(115deg, #3b9dff 0%, #2f6bff 45%, #7b2ff7 100%)`, reserved exclusively for focal call-to-actions, hero metrics, and key feature badges.

## Typography

Typography relies entirely on **DM Sans**, calibrated across four essential weights (400 Regular, 500 Medium, 600 SemiBold, 700 Bold). 

- **Display & Headings**: Rendered with tight negative letter-spacing (`-0.01em` to `-0.03em`) to generate a punchy, engineered typographic rhythm reminiscent of modern SaaS platforms and executive control panels.
- **Body Text**: Tuned for maximum horizontal scanning efficiency across data tables and compact form inputs. Uses neutral kerning and ample line heights (`1.5` to `1.6`) to prevent visual strain in prolonged dark-mode sessions.
- **Labels & Micro-Indicators**: Set with elevated tracking (`0.02em` to `0.04em`) in weights 500 and 600, guaranteeing razor-sharp legibility at micro sizes (11px–12px) in badges, metadata bars, and data grid headers.

## Layout & Spacing

Layout geometry follows an 8pt base grid system to ensure consistent spatial relationships across all micro-SaaS apps:

- **Desktop (1200px+)**: 12-column dynamic grid with a maximum content container of 1280px or 1440px for full-bleed productivity dashboards. 24px (`1.5rem`) column gutters with 32px (`2rem`) global canvas padding.
- **Tablet (768px – 1199px)**: 8-column layout utilizing 16px gutters and 24px margins. Two-column cards consolidate into single-column or compact stacked patterns.
- **Mobile (< 768px)**: 4-column layout with 12px (`0.75rem`) gutters and 16px (`1rem`) outer margins. Heavy dashboard tables fold into modular expandable cards.
- **Density Principle**: Workspaces and data grids use compressed internal spacing (`space-xs` and `space-sm`) to increase data density, while marketing-facing presentation layers and modal dialogues apply generous layout breathing room (`space-lg` to `space-xl`).

## Elevation & Depth

Visual hierarchy operates through atmospheric tonal layering and crystalline borders rather than muddy, high-spread drop shadows:

- **Surface Level 0 (Base Canvas)**: Pure `#070a14`. Used for background canvases and structural page backdrops.
- **Surface Level 1 (Card & Panel Surface)**: Solid `#10152a` framed by a 1px uniform hairline border (`rgba(255, 255, 255, 0.08)`). No elevation shadow is necessary; separation is achieved via luminance differentiation.
- **Surface Level 2 (Floating & Interactive Tiers)**: `#161c36` with a soft directional top-highlight: `border: 1px solid rgba(255, 255, 255, 0.12)` complemented by an ambient shadow: `box-shadow: 0 12px 32px -4px rgba(3, 5, 12, 0.65)`.
- **Surface Level 3 (Dialogs, Dropdowns & Overlays)**: `#10152a` accompanied by `backdrop-filter: blur(16px)`, a border of `rgba(47, 107, 255, 0.25)`, and deep atmospheric displacement: `box-shadow: 0 24px 64px -12px rgba(2, 4, 10, 0.85), 0 0 1px 1px rgba(255, 255, 255, 0.05)`.
- **Glow & Photon Fields**: Primary CTA triggers utilize an ambient colored halo: `box-shadow: 0 4px 20px -2px rgba(47, 107, 255, 0.35)`. Hover states increase bloom radius smoothly to 28px without displacement.

## Shapes

The design system maintains a **Soft** shape vocabulary (level `1`), establishing a crisp, mechanical silhouette suited for professional software:

- **Base Radius (0.25rem / 4px)**: Checkboxes, badges, segmented pill indicators, and mini-tags.
- **Medium Radius (0.5rem / 8px)**: Standard buttons, text field inputs, dropdown menus, and internal nested sub-panels.
- **Large Radius (0.75rem / 12px)**: Dashboard cards, modal dialog shells, main viewport panels, and persistent navigation bars.
- **Geometry Rules**: Nested elements must strictly preserve concentricity—inner container radii should equal outer radius minus padding to maintain optical cohesion.

## Components

### Buttons
- **Primary / Action Gradient**: Formed with `background: linear-gradient(115deg, #3b9dff 0%, #2f6bff 45%, #7b2ff7 100%)`, text in `#ffffff` (weight 600), radius 8px, and a subtle drop shadow (`0 4px 16px rgba(47, 107, 255, 0.3)`). Hover: brightness increase (`1.08`) and a 1px translateY lift.
- **Secondary (Ghost Glass)**: Background `rgba(16, 21, 42, 0.6)`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#eef1fb`. Hover: `border-color: rgba(47, 107, 255, 0.5)`, background `rgba(47, 107, 255, 0.08)`.
- **Tertiary / Sub-action**: Transparent fill, text `#8891ab`, transition to `#eef1fb` on hover with underline offset 4px.

### Inputs & Form Elements
- **Text Inputs**: Height 40px, background `#070a14`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#eef1fb`, typography `body-md`.
- **Focus State**: Hairline outline `#2f6bff` with an inner glow: `box-shadow: 0 0 0 3px rgba(47, 107, 255, 0.15)`.
- **Placeholder**: Set to `#8891ab` at 65% opacity.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes**: 18px x 18px square with 4px corner radius. Inactive: `#070a14` background, `rgba(255, 255, 255, 0.15)` border. Checked: `#2f6bff` fill with an optical white check icon.
- **Radio Buttons**: 18px concentric circle; active state features a `#2f6bff` outer ring with a 6px centered white/cyan core dot.

### Cards & Data Panels
- Base structural container configured with `#10152a`, 12px corner radius, and `1px solid rgba(255, 255, 255, 0.08)`.
- Top header zones are partitioned with an internal 1px horizontal separator (`rgba(255, 255, 255, 0.05)`) with 16px inner padding.

### Chips & Status Badges
- **Status Badges**: Radius 4px, height 22px, padding 2px 8px. Typography `label-sm`.
- **Success / Active**: Background `rgba(47, 107, 255, 0.12)`, text `#3b9dff`, border `1px solid rgba(59, 157, 255, 0.3)`.
- **Neutral / Idle**: Background `rgba(255, 255, 255, 0.04)`, text `#8891ab`, border `1px solid rgba(255, 255, 255, 0.08)`.

### Lists & Data Grids
- Alternating row styling is avoided; rows are separated by 1px borders (`rgba(255, 255, 255, 0.04)`).
- Hovering over a table row shifts background tint to `rgba(47, 107, 255, 0.04)` with a smooth 150ms ease-out transition.