# TutorPro

A tutoring service website built with React, Express, and TypeScript.

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- PostgreSQL database (optional, for database features)

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure environment variables:
   - `DATABASE_URL`: PostgreSQL connection string (optional if not using database features)
   - `PORT`: Server port (default: 5000)
   - `NODE_ENV`: Environment mode (development/production)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts the development server on port 5000 with hot module reloading.

## Production Build

```bash
npm run build
```

This creates optimized production builds:
- Client: `dist/public/`
- Server: `dist/index.js`

## Production Deployment

```bash
npm start
```

Runs the production server using the built files.

## Database Management

Push database schema changes:
```bash
npm run db:push
```

## Type Checking

```bash
npm run check
```

## Deployment Notes

### Platform Support
- **Replit**: Pre-configured (see `.replit` file)
- **Netlify**: Configured with `netlify.toml` (see `NETLIFY_DEPLOYMENT.md`)
- **Render/Railway**: Recommended for full-stack apps (see `DEPLOYMENT.md`)

### Before Deployment
- Ensure all environment variables are set (see `.env.example`)
- Run `npm run build` to create production build
- The server listens on the port specified in the `PORT` environment variable

### Platform-Specific Guides
- General deployment: See `DEPLOYMENT.md`
- Netlify deployment: See `NETLIFY_DEPLOYMENT.md`