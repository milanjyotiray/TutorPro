# Design Guidelines: Tutoring Service Website

## Design Approach
**Reference-Based Approach** drawing from educational platforms like Khan Academy and Coursera, emphasizing clarity, trust, and approachability. The design should feel professional yet warm, with clear information hierarchy that helps parents and students quickly understand services and pricing.

## Typography System

**Font Families:**
- Primary: Inter or Poppins (headings, UI elements) - modern, friendly, highly legible
- Secondary: System font stack for body text (optimal reading performance)

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Headings: text-xl md:text-2xl, font-semibold
- Feature Titles: text-lg md:text-xl, font-semibold
- Body Text: text-base md:text-lg
- Small Text/Captions: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Component spacing: gap-6 md:gap-8
- Card padding: p-6 md:p-8
- Tight groupings: space-y-4
- Generous groupings: space-y-8

**Container Strategy:**
- Max-width: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content sections: max-w-6xl for dense information
- Pricing tables: max-w-5xl

## Component Library

**Hero Section:**
- Full-width banner with gradient background
- Centered content with welcome message, headline, subheading
- Dual CTAs: Primary "Register Now" + Secondary "Book Demo"
- Large hero image (illustration of students/learning) placed prominently
- Buttons with backdrop-blur-sm background when over images

**Feature Cards:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Rounded corners (rounded-lg or rounded-xl)
- Subtle shadow (shadow-md hover:shadow-lg transition)
- Icon at top, title, bulleted feature list
- Equal height cards with flex layout

**Pricing Tables:**
- Side-by-side comparison cards
- Clear tier labels (One-to-One vs Group)
- Prominent price display with large numbers
- Bullet-point feature lists
- Distinct "Popular" or "Recommended" badge option

**Contact Section:**
- Two-column layout (contact info + illustration/image)
- Large, tappable WhatsApp and Call buttons
- Contact details with icons
- WhatsApp integration prominently featured

**Navigation:**
- Fixed header with smooth scroll
- Logo left, nav links center/right
- Mobile: Hamburger menu
- Sticky on scroll with subtle shadow

## Images

**Hero Image:**
- Large, high-quality illustration showing diverse students learning/celebrating success
- Position: Right side on desktop (60% width), full-width on mobile
- Style: Modern, colorful illustration (not photo) - friendly and aspirational

**Contact Section Image:**
- Illustration of students with tutor or educational success theme
- Position: Left or right column
- Style: Matches hero illustration aesthetic

**Icon Set:**
- Use Heroicons (outline style) for feature cards
- Consistent size: w-8 h-8 or w-10 h-10
- Icons for: individualized learning, tracking, assessment, technology, motivation, flexibility

## Visual Hierarchy

**Information Architecture:**
1. Hero with registration CTA (immediate action)
2. Classes Available (what we offer)
3. Special Features - 6 detailed cards (why choose us)
4. Important Notes - highlight format
5. Fee Structure - clear pricing tables
6. Contact - multiple methods

**Call-to-Action Strategy:**
- Primary: Registration form link (prominent, repeated)
- Secondary: Demo booking (WhatsApp direct link)
- Tertiary: Contact buttons throughout
- Use warm, action-oriented colors for CTAs

## Responsive Behavior

**Breakpoint Strategy:**
- Mobile (base): Single column, stacked cards, simplified navigation
- Tablet (md): 2-column grids, expanded navigation
- Desktop (lg+): 3-column grids, full horizontal layouts

**Mobile Optimizations:**
- Larger tap targets (min h-12)
- Simplified pricing tables (stack tiers vertically)
- Full-width CTAs
- Click-to-call and click-to-WhatsApp buttons prominent

This design prioritizes clarity, trust, and conversion while maintaining a warm, approachable educational aesthetic.