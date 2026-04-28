---
name: TrainKids
description: Premium nurturing early intervention with a modern, tactile OKLCH aesthetic.
colors:
  primary: "oklch(0.65 0.18 145)"
  secondary: "oklch(0.55 0.18 260)"
  accent-orange: "oklch(0.75 0.18 55)"
  accent-red: "oklch(0.60 0.18 25)"
  accent-yellow: "oklch(0.92 0.15 95)"
  neutral-bg: "oklch(0.99 0.005 145)"
  neutral-text: "oklch(0.22 0.02 145)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontWeight: 900
    lineHeight: 0.95
  body:
    fontFamily: "Lexend, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  md: "16px"
  lg: "24px"
  xl: "32px"
  clay: "2rem"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
---

# Design System: TrainKids (Premium Edition)

## 1. Overview

**Creative North Star: "The Nurturing Playground"**

TrainKids uses a sophisticated, tactile aesthetic that balances professional authority with a playful, child-centric energy. By moving beyond plain RGB colors to nuanced OKLCH palettes, we create an environment that feels alive and premium.

**Key Characteristics:**
- **Tactile Depth**: Multi-layered shadows creating a "clay" effect that feels touchable.
- **Vibrant Harmony**: Harmonious primary colors that avoid clinical or garish extremes.
- **Expressive Typography**: Bricolage Grotesque provides a unique, modern voice for headlines.
- **Asymmetric Rhythm**: Layouts that breathe and guide the eye rather than following rigid grids.

## 2. Colors (OKLCH)

We use OKLCH for consistent perceived lightness and vibrant chroma across all brand colors.

### Primary & Secondary
- **Growth Green** (oklch(0.65 0.18 145)): Core brand color for growth and success.
- **Trust Blue** (oklch(0.55 0.18 260)): Professionalism and reliability.

### Accents
- **Energy Orange** (oklch(0.75 0.18 55)): High-visibility calls to action.
- **Heart Red** (oklch(0.60 0.18 25)): Critical trust markers and emotional highlights.
- **Sunshine Yellow** (oklch(0.92 0.15 95)): Playful highlights and background tints.

### Neutrals (Tinted)
- **Sky Base** (oklch(0.99 0.005 145)): Default background, subtly tinted with brand green to eliminate clinical gray.
- **Ink Gray** (oklch(0.22 0.02 145)): High-legibility text with a warm, deep tint.

## 3. Typography

**Display Font:** Bricolage Grotesque (sans-serif)
**Body Font:** Lexend (sans-serif)

### Hierarchy
- **Hero Display** (900, clamp(3rem, 10vw, 6rem), 0.95): Massive, expressive headlines.
- **Section Headline** (800, 2.5rem, 1.1): Clear, bold structural markers.
- **Body Text** (400, 1.125rem, 1.6): Maximum readability for stressed caregivers. Cap at 75ch.

## 4. Elevation (The Clay Logic)

Our "Clay" effect uses three distinct shadow layers:
1. **Outer Ambient**: Soft lift from the background.
2. **Inner Volume**: Deepening the edges for 3D feel.
3. **Specular Highlight**: A bright inner edge (top-left) to simulate a light source.

## 5. Layout Principles

- **Asymmetry**: Break the 12-column grid to create a sense of movement.
- **White Space**: Generous `clamp()` based padding that scales with the viewport.
- **Rhythm**: Avoid identical repeated blocks; vary card sizes and alignments.
