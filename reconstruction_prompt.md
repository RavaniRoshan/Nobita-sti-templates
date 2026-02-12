# Role: Expert Frontend Engineer (React/Vite/Tailwind/Framer Motion)

## Objective
Recreate a pixel-perfect, high-performance landing page using React, Vite, TypeScript, Tailwind CSS, and Framer Motion. The design must match the "Axiom-One" reference implementation exactly in terms of layout, animations, and responsiveness, but use placeholders for brand-specific elements (Logo, Name, Colors, Copy).

## Tech Stack
-   **Framework:** React (Vite) + TypeScript
-   **Styling:** Tailwind CSS (configured via `tailwind.config.js`)
-   **Animations:** Framer Motion (`framer-motion`)
-   **Icons:** Lucide React (`lucide-react`)
-   **Fonts:** Inter (Sans), Space Grotesk (Display) - imported via Google Fonts.

## Global Configuration & Design System
Use the following placeholders. If no value is provided, fallback to the defaults listed below.

-   **Brand Name:** `{{BRAND_NAME}}` (Default: "AXIOM-ONE")
-   **Primary Color:** `{{PRIMARY_COLOR}}` (Default: `#3B82F6` - Electric Blue)
-   **Secondary Color:** `{{SECONDARY_COLOR}}` (Default: `#1e3a8a` - Deep Blue)
-   **Background Color:** `{{BACKGROUND_COLOR}}` (Default: `#020617` - Rich Void)
-   **Surface Color:** `{{SURFACE_COLOR}}` (Default: `#0F172A` - Slate 900)
-   **Accent Gradient:** `{{ACCENT_GRADIENT}}` (Default: `from-blue-400 via-blue-200 to-white`)

### Tailwind Configuration (`tailwind.config.js`)
You must include these specific extensions to the theme to support the custom animations and colors:

```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        axiom: {
          accent: '{{PRIMARY_COLOR}}',
          blue: '{{SECONDARY_COLOR}}',
          light: '#F8FAFC',
          dark: '{{BACKGROUND_COLOR}}',
          surface: '{{SURFACE_COLOR}}',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)', // Adjust colors if needed
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Moves half the width (assuming duplicated content)
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      }
    }
  }
}
```

### Global CSS (`index.css`)
Add custom scrollbar styling for a premium feel:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: {{BACKGROUND_COLOR}};
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 4px;
  border: 2px solid {{BACKGROUND_COLOR}};
}
::-webkit-scrollbar-thumb:hover {
  background: #475569;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

## Component Specifications

### 1. App Layout (`App.tsx`)
-   Wrap the entire application in a `div` with `bg-white min-h-screen font-sans text-slate-900 selection:bg-axiom-blue selection:text-white overflow-x-hidden`.
-   Structure: `Navbar`, `Main` (Hero, SocialProof, Architecture, FeatureDeepDive, Testimonials, FAQ), `Footer`.

### 2. Navbar (`components/Navbar.tsx`)
-   **Behavior:** Fixed position. Transparent at the very top (scroll < 20px). On scroll down (> 50px), hide the navbar. On scroll up, show the navbar with a glassmorphism effect (`backdrop-blur-xl`, `bg-axiom-dark/80`, `border-white/10`).
-   **Logo:** Create a geometric logo using CSS shapes (e.g., rotated squares, circles) colored with `text-axiom-accent`.
-   **Links:** "Methodology", "Enterprise", "Research", "Company" (or `{{NAV_LINKS}}`).
-   **CTA:** "Access Engine" (or `{{NAV_CTA}}`) with a shining hover effect (translate a white gradient across the button).
-   **Mobile:** Hamburger menu that opens a full-screen overlay with staggered animation entry for links.

### 3. Hero Section (`components/Hero.tsx`)
-   **Background:** `bg-axiom-dark`. Use a subtle grid pattern (`linear-gradient` mask) and a large radial gradient glow (`bg-axiom-accent/10`) at the top center.
-   **Content (Left):**
    -   **Badge:** "SYSTEM ONLINE: v2.4.0" (or `{{HERO_BADGE}}`) - animated pulse.
    -   **Headline:** `{{HERO_TITLE}}` (Default: "Reasoning, Validated."). Use `font-display`, `text-5xl md:text-7xl`. The second line should use `text-transparent bg-clip-text bg-gradient-to-r {{ACCENT_GRADIENT}}`.
    -   **Subheadline:** `{{HERO_SUBTITLE}}` (Default: "The first deterministic AI engine..."). `text-gray-400 text-lg`.
    -   **Buttons:** Primary CTA (`bg-axiom-accent`, hover glow) and Secondary CTA (Outline/Ghost).
    -   **Trust Signals:** Small icons (Shield, Activity) with text like "SOC2 Type II" or "99.99% Uptime".
-   **Visual (Right) - `{{DASHBOARD_PREVIEW}}`:**
    -   Implement a floating, tilted 3D card (`rotateX`, `perspective`) using Framer Motion.
    -   **Default Content:** A mock terminal/code interface showing a process being validated (e.g., "Scanning...", "Verifying...", "Confidence: 98%").
    -   **Animation:** The card should float gently (`animate={{ y: [0, -10, 0] }}`). Internal elements (lines of code/logs) should appear sequentially.

### 4. Social Proof (`components/SocialProof.tsx`)
-   **Layout:** Full-width scrolling marquee. Section background: `bg-white border-b border-gray-100`.
-   **Content:** "Trusted by research teams at" (or `{{SOCIAL_PROOF_LABEL}}`).
-   **Logos:** Use text-based logos for placeholders (e.g., "MIT", "NASA", "OpenAI") or `{{PARTNER_LOGOS}}`.
-   **Animation:** Use the `animate-scroll` utility defined in the config. Duplicate the list of logos 3 times to ensure seamless looping (`[...brands, ...brands, ...brands]`).
-   **Style:** Opacity 30% default, 100% on hover.

### 5. Architecture/Process (`components/Architecture.tsx`)
-   **Layout:** Two columns. Section background: `bg-axiom-light`. Left: Text. Right: Vertical Steps.
-   **Left:** "How it works" badge. Headline: `{{PROCESS_TITLE}}`.
-   **Right (Steps):**
    -   Map through `{{PROCESS_STEPS}}` (Default: 3 steps).
    -   Each step has an Icon (in a circle), a Title, and a Description.
    -   **Interaction:** Hovering a step card lifts it slightly (`-translate-y-1`) and highlights the border with `text-axiom-accent`.
    -   **Connecting Line:** A vertical line connecting the steps (behind the icons).

### 6. FeatureDeepDive (`components/FeatureDeepDive.tsx`)
-   **Background:** Dark (`bg-axiom-dark` / `#020617`). Grid pattern overlay.
-   **Layout:** Bento Grid (CSS Grid).
-   **Cards:**
    -   **Card 1 (Span 2):** "Traceability/Lineage". Show a mock graph or tree visualization.
    -   **Card 2 (Span 1):** "Confidence Score". Large number (e.g., "99.9%"). Animated chart line at the bottom.
    -   **Card 3 (Span 1):** "Security/Air-gapped". Lock icon or shield animation.
    -   **Card 4 (Span 2):** "Knowledge Injection". Visual of a "connector" or database link.
-   **Styling:** `bg-white/[0.02]`, `border-white/5`, `rounded-3xl`.
-   **Hover:** Glow effect (`from-axiom-accent/5`) and border highlight on hover.

### 7. Testimonials (`components/Testimonials.tsx`)
-   **Layout:** Two vertical columns moving in opposite directions (or same direction with offset). Section background: `bg-gray-50`.
-   **Animation:** Infinite vertical scroll. Use `framer-motion` to animate `y` from `0%` to `-33.333%` in an infinite loop. **Important:** Triple the dataset (`[...data, ...data, ...data]`) to allow for seamless looping.
-   **Content:** `{{TESTIMONIALS_DATA}}`. Each card has a Quote, Author, Role, and Company.
-   **Card Style:** `bg-white`, `border-gray-100`, shadow on hover.

### 8. FAQ (`components/FAQ.tsx`)
-   **Layout:** Accordion list. Section background: `bg-gray-50 border-t border-gray-200`.
-   **Behavior:** Click to expand. Only one open at a time.
-   **Animation:** `AnimatePresence` for smooth height transition of the answer.
-   **Style:** Clean, minimal, `border-b` separators.

### 9. Footer (`components/Footer.tsx`)
-   **Layout:** 4 Column Grid (Info, Product, Resources, Legal). Section background: `bg-white`.
-   **Brand Element:** Massive "AXIOM" (or `{{BRAND_NAME}}`) text at the bottom, spanning the full width (`text-[15vw]`).
-   **Copyright:** `© {{YEAR}} {{BRAND_NAME}}. All rights reserved.`

## Animation Guidelines
-   Use `framer-motion` for all entrance animations (`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`).
-   Use `transition={{ duration: 0.5, ease: "easeOut" }}` as a baseline.
-   Ensure `viewport={{ once: true }}` so animations don't replay annoyingly.

## Execution
Generate the full code for `App.tsx`, `index.css` (Tailwind directives), and all component files in the `components/` directory.
