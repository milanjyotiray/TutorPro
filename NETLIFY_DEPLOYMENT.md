# Netlify Deployment Guide for TutorPro

## Important Note

⚠️ **This application is a full-stack Node.js/Express application with server-side rendering.** While it can be deployed to Netlify, there are important limitations:

### Netlify Limitations
- Netlify is optimized for **static sites** and **serverless functions**
- Backend API routes run as serverless functions (cold start delays)
- No persistent server state (sessions reset between requests)
- 10-second timeout limit for functions
- Better alternatives: **Render**, **Railway**, **Fly.io**, or **Heroku** for full-stack apps

### Recommended: Deploy to Render or Railway Instead

**For Render:**
1. Go to https://render.com
2. Connect your GitHub repository
3. Create a new "Web Service"
4. Build command: `npm run build`
5. Start command: `npm start`
6. Add environment variables (see `.env.example`)

**For Railway:**
1. Go to https://railway.app
2. Connect your GitHub repository
3. Railway auto-detects the build configuration
4. Add environment variables (see `.env.example`)

---

## If You Still Want to Deploy to Netlify

### Prerequisites
1. Netlify account (https://netlify.com)
2. Git repository connected to Netlify
3. Node.js 20.x specified in build settings

### Step 1: Configure Environment Variables in Netlify

Go to your Netlify site dashboard → Site settings → Environment variables, and add:

```bash
DATABASE_URL=your_database_url_here
PORT=8888
NODE_ENV=production
```

### Step 2: Deploy Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist/public`
- API routes proxied to serverless functions
- SPA fallback routing

### Step 3: Deploy

#### Option A: Git-based Deployment (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```
2. Netlify will automatically detect the push and deploy

#### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

#### Option C: Manual Deploy
```bash
npm run build
netlify deploy --prod --dir=dist/public
```

### Step 4: Verify Deployment

1. Check build logs in Netlify dashboard
2. Visit your Netlify URL (e.g., `your-app.netlify.app`)
3. Test the website loads correctly
4. Check browser console for errors

### Common Netlify Issues & Solutions

#### Issue 1: "Page Not Found" on Refresh
**Solution:** Already handled in `netlify.toml` with SPA redirect

#### Issue 2: API Routes Not Working
**Cause:** API routes need to be serverless functions
**Solution:** Already configured in `netlify/functions/server.js`

#### Issue 3: Build Fails
**Check:**
- Node version is set to 20 in Netlify settings
- All dependencies are in `package.json`
- Build logs for specific errors

#### Issue 4: Site Loads but Shows Errors
**Check:**
- Browser console for JavaScript errors
- Environment variables are set correctly
- Database connection (if using database features)

#### Issue 5: "Function Invocation Failed"
**Cause:** Cold start or function timeout
**Solution:** Netlify functions have a 10-second limit; consider alternative hosting for heavy backend operations

### Monitoring & Debugging

1. **Build Logs:** Netlify Dashboard → Deploys → [Latest Deploy]
2. **Function Logs:** Netlify Dashboard → Functions
3. **Browser Console:** F12 → Console tab
4. **Network Tab:** F12 → Network tab to check failed requests

### Rollback Deployment

If the deployment fails:
1. Go to Netlify Dashboard → Deploys
2. Find a working previous deploy
3. Click "Publish deploy" to rollback

### Performance Optimization for Netlify

Since this is a static site serving content:
1. All static assets are already optimized
2. Images are pre-bundled
3. CSS and JS are minified during build
4. Consider enabling Netlify CDN features in dashboard

### Security

The `netlify.toml` includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection enabled
- Referrer-Policy configured

### Local Testing

Test the build locally before deploying:
```bash
npm run build
npm start
# Visit http://localhost:5000
```

### Getting Help

If deployment issues persist:
1. Check Netlify build logs for errors
2. Verify all environment variables are set
3. Review `netlify.toml` configuration
4. Check Netlify Support docs: https://docs.netlify.com

### Why This App Is Better Suited for Other Platforms

This TutorPro application:
- Uses Express server for routing
- May need persistent sessions
- Has backend API routes
- Benefits from always-on server

**Better hosting options:**
- **Render** (easiest, has free tier)
- **Railway** (auto-deploys from GitHub)
- **Fly.io** (global edge deployment)
- **Heroku** (classic PaaS)
- **Replit** (already configured in `.replit`)

These platforms are designed for full-stack Node.js apps and will provide better performance and reliability.
