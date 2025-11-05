# Tutoring Service Website

## Overview

This is a tutoring service website built to showcase and facilitate enrollment in private home and online tutoring services for students in Classes 1-12. The application serves as a marketing and information platform for a tutoring business, providing details about available classes, pricing, features, and contact information. It's a single-page application with smooth scrolling navigation between sections including hero, classes, features, pricing, important notes, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (minimal routing needs - home page and 404)
- **TanStack Query** for server state management (though currently no API calls are implemented)

**UI Component Strategy**
- **shadcn/ui** component library built on Radix UI primitives
- All UI components follow the "New York" style variant
- Components are co-located in `client/src/components/ui/` directory
- Heavy use of Radix UI headless components for accessibility and behavior

**Styling Approach**
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom CSS variables for theming (supports light/dark modes via HSL color system)
- Design system defined in `design_guidelines.md` with specific typography scale, spacing primitives, and component patterns
- Color system uses HSL values with alpha channel support for consistent theming
- Custom utility classes like `hover-elevate` and `active-elevate-2` for interaction states

**State Management**
- React hooks for local component state
- No global state management needed (static content-driven site)
- Form handling via React Hook Form with Zod validation (configured but not actively used)

**Content Management**
- Static content defined in `shared/schema.ts` using Zod schemas
- Content includes class information, feature cards, pricing tiers, and important notes
- Type-safe content structures exported from shared schema

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Custom middleware for request logging and JSON body parsing
- Development/production mode detection via `NODE_ENV`

**Development vs Production**
- Development: Vite dev server middleware integrated with Express for HMR
- Production: Static file serving from built assets in `dist/public`
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)

**API Structure**
- Routes registered through `server/routes.ts`
- Currently no active API endpoints (placeholder structure in place)
- All routes prefixed with `/api` convention

**Storage Layer**
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) for user data
- Designed to be swappable with database implementation
- User schema defined but not actively used in current implementation

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL
- Database schema defined in `shared/schema.ts`
- Migration files output to `./migrations` directory
- Connection via `@neondatabase/serverless` for serverless PostgreSQL
- Environment variable `DATABASE_URL` required but database not actively used in current implementation

**Session Management**
- `connect-pg-simple` package included for PostgreSQL-backed sessions (not implemented)

### Design System

**Typography**
- Primary: Inter/Poppins for headings and UI
- System font stack for body text
- Responsive type scale from text-sm to text-7xl

**Layout System**
- Container max-width: 7xl (1280px)
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Responsive padding: `py-16 md:py-24` for sections
- Grid-based layouts with responsive breakpoints (md, lg)

**Component Patterns**
- Feature cards: 3-column grid with icons, titles, and bullet lists
- Pricing tables: Structured comparison of one-on-one vs group pricing
- Hero section: Full-width gradient background with dual CTAs
- Smooth scroll navigation with offset for fixed header

## External Dependencies

### UI & Styling
- **@radix-ui/** (multiple packages): Headless UI primitives for accessible components
- **class-variance-authority**: Type-safe variant API for component styles
- **clsx** & **tailwind-merge**: Utility class management
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **lucide-react**: Icon library

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver utilities
- **zod**: Schema validation and TypeScript type inference
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### State & Data Fetching
- **@tanstack/react-query**: Server state management and caching

### Database & ORM
- **drizzle-orm**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **drizzle-kit**: CLI tool for migrations and schema management

### Backend
- **express**: Node.js web framework
- **connect-pg-simple**: PostgreSQL session store (configured but unused)

### Build Tools & Development
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production server build
- **@replit/** packages: Replit-specific development tools (cartographer, dev banner, runtime error overlay)

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Asset Management
- Generated images stored in `attached_assets/generated_images/`
- Hero image reference: `Students_celebrating_academic_success_d0d6a5e9.png`

### Third-Party Services
- **Google Forms**: Registration form (https://forms.gle/1tPqB9YspCoCvxsh6)
- **WhatsApp Business**: Contact integration for messaging
- **Phone**: Direct calling via `tel:` links (8011551863)

### Font Loading
- **Google Fonts**: Architects Daughter, DM Sans, Fira Code, Geist Mono (preconnected)