# Deploying UniXplore to Vercel

## Prerequisites
- GitHub repository with your code pushed
- Vercel account (free): https://vercel.com/signup

## Step 1: Create Production Database

Choose one of these options:

### Option A: Vercel Postgres (Recommended)
1. Go to https://vercel.com/dashboard
2. Click "Storage" → "Create Database" → "Postgres"
3. Copy the connection string

### Option B: Supabase (Free tier)
1. Go to https://supabase.com/
2. Create new project
3. Go to Settings → Database → Connection string
4. Copy the connection string

### Option C: Neon (Free tier)
1. Go to https://neon.tech/
2. Create new project
3. Copy the connection string

## Step 2: Deploy to Vercel

### Via Vercel Dashboard (Easiest)
1. Go to https://vercel.com/new
2. Import your GitHub repository: `FOX-KNIGHT/hack`
3. Configure project:
   - **Root Directory**: `unixplore`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. Add Environment Variables:
   ```
   DATABASE_URL=<your-postgres-connection-string>
   JWT_SECRET=<generate-a-random-32-char-string>
   NEXT_PUBLIC_APP_URL=<will-be-provided-after-deployment>
   ```

5. Click "Deploy"

### Via Vercel CLI (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd d:\REDIVA\hack\unixplore

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 3: Post-Deployment Setup

1. **Get your deployment URL** (e.g., `https://hack-fox-knight.vercel.app`)
2. **Update environment variable**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXT_PUBLIC_APP_URL` with your deployment URL
   - Redeploy the project

3. **Initialize Database** (if using Prisma):
   ```bash
   # Set DATABASE_URL locally to production database
   npx prisma db push
   npx prisma db seed
   ```

## Step 4: Verify Deployment

Visit your deployment URL and test:
- ✅ Home page loads
- ✅ Browse colleges and clubs
- ✅ Registration works
- ✅ Login works
- ✅ Admin features work

## Automatic Deployments

Every push to the `main` branch will automatically trigger a new deployment on Vercel.

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify database connection string is correct

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if database allows connections from Vercel IPs
- For Supabase/Neon, ensure connection pooling is enabled

### 404 Errors
- Ensure Root Directory is set to `unixplore`
- Check that all routes are properly defined

## Support
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
