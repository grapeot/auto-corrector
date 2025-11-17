# Deployment Guide

## GitHub Repository Setup

1. Create a new repository on GitHub named `auto-corrector`
2. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/auto-corrector.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

### Option 1: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository `auto-corrector`
4. Configure environment variables:
   - Go to Project Settings → Environment Variables
   - Add: `AI_BUILDER_TOKEN` = `your_token_here`
   - Add: `AI_BUILDERS_API_URL` = `https://space.ai-builders.com/backend/v1/chat/completions` (optional, defaults to this)
5. Click "Deploy"

### Option 2: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables:
```bash
vercel env add AI_BUILDER_TOKEN
# Paste your token when prompted

vercel env add AI_BUILDERS_API_URL
# Enter: https://space.ai-builders.com/backend/v1/chat/completions
```

5. Redeploy with environment variables:
```bash
vercel --prod
```

## Environment Variables

Make sure these are set in your deployment platform:

- `AI_BUILDER_TOKEN`: Your AI Builders API token (required)
- `AI_BUILDERS_API_URL`: API endpoint (optional, defaults to production URL)

## Testing After Deployment

1. Visit your deployed URL
2. Try one of the example sentences
3. Verify corrections are working
4. Check browser console for any errors

## Troubleshooting

- **401 Unauthorized**: Check that `AI_BUILDER_TOKEN` is set correctly
- **500 Internal Server Error**: Check API endpoint URL and token validity
- **CORS errors**: Should not occur with Next.js API routes

