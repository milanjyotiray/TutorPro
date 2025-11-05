# Deployment Guide for TutorPro

## Pre-Deployment Checklist

### ✅ Completed
- [x] Fixed 3 low severity vulnerabilities (brace-expansion, on-headers, express-session)
- [x] Updated browserslist database (was 13 months old)
- [x] Created `.env.example` with required environment variables
- [x] Updated README with deployment instructions
- [x] Updated drizzle.config.ts to handle missing DATABASE_URL gracefully
- [x] Verified TypeScript compilation passes
- [x] Verified production build succeeds
- [x] Verified production server starts and serves content correctly

### ⚠️ Known Issues (Non-Critical)

#### 5 Moderate Severity Vulnerabilities in Development Dependencies
- **Package**: esbuild (<=0.24.2)
- **Used by**: vite, drizzle-kit
- **Issue**: Development server request vulnerability (GHSA-67mh-4wv8-2f99)
- **Impact**: Only affects development server, not production builds
- **Fix**: Requires `npm audit fix --force` which will upgrade vite to v7.2.0 (breaking change)
- **Recommendation**: Monitor for updates; the vulnerability does not affect production deployments as the development server is not used in production

#### PostCSS Warning
- **Issue**: "PostCSS plugin did not pass the `from` option"
- **Impact**: None - this is a known informational warning in Vite + Tailwind CSS builds
- **Status**: Does not affect build output or functionality

## Environment Variables

Required environment variables for production:

```bash
# Database connection (optional if not using database features)
DATABASE_URL=postgresql://user:password@host:port/database

# Server configuration
PORT=5000
NODE_ENV=production
```

## Deployment Steps

### 1. Install Dependencies
```bash
npm ci
```

### 2. Set Environment Variables
Create a `.env` file or set environment variables in your deployment platform:
```bash
cp .env.example .env
# Edit .env with your values
```

### 3. Build the Application
```bash
npm run build
```

This creates:
- Client bundle: `dist/public/`
- Server bundle: `dist/index.js`

### 4. Start Production Server
```bash
npm start
```

## Replit Deployment

The application is pre-configured for Replit deployment via `.replit` file:

- **Build command**: `npm run build`
- **Run command**: `npm run start`
- **Port**: 5000 (mapped to external port 80)
- **Deployment target**: Autoscale

### Replit Environment Setup
1. Ensure PostgreSQL is provisioned (if using database features)
2. Set `DATABASE_URL` secret in Replit
3. Deploy using the Replit deployment interface

## Health Checks

### Build Health
```bash
npm run check  # TypeScript type checking
npm run build  # Production build
```

### Runtime Health
```bash
curl http://localhost:5000/  # Should return HTML
```

## Security Notes

1. **Production Dependencies**: All low-severity vulnerabilities fixed
2. **Development Dependencies**: 5 moderate vulnerabilities remain (non-critical for production)
3. **Environment Variables**: Never commit `.env` file to version control
4. **Database**: DATABASE_URL is optional; application works without database features

## Troubleshooting

### Build Fails
- Ensure Node.js 20.x is installed
- Run `npm ci` to clean install dependencies
- Check `npm run check` for TypeScript errors

### Server Won't Start
- Check if port 5000 is available
- Verify `NODE_ENV=production` is set
- Ensure `dist/` directory exists (run `npm run build`)

### Database Connection Issues
- Verify `DATABASE_URL` format
- Check database is accessible
- Note: Database is optional for static content features

## Monitoring Recommendations

1. Set up health check endpoints
2. Monitor server logs for errors
3. Track response times
4. Set up alerts for downtime

## Future Improvements

1. Consider upgrading vite to v7.x (requires testing for breaking changes)
2. Add health check endpoint (`/api/health`)
3. Add structured logging
4. Add error tracking (e.g., Sentry)
5. Add performance monitoring
