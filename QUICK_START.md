# 🚀 Auto-Corrector - Quick Start Guide

## ✅ What's Been Done

1. ✅ Next.js app created with TypeScript and Tailwind CSS
2. ✅ API route implemented using V4 auto-corrector
3. ✅ Beautiful UI with example sentences
4. ✅ GitHub repository created: https://github.com/grapeot/auto-corrector
5. ✅ Code pushed to GitHub
6. ✅ Build tested and working

## 🎯 Deploy to Vercel (5 minutes)

### Step 1: Go to Vercel Dashboard
Visit: https://vercel.com/new

### Step 2: Import Repository
1. Click "Import Git Repository"
2. Select: `grapeot/auto-corrector`
3. Click "Import"

### Step 3: Configure Environment Variables
Before clicking "Deploy", add environment variables:

1. Click "Environment Variables"
2. Add these variables:

**Variable 1:**
- Name: `AI_BUILDER_TOKEN`
- Value: `sk_3c7c108f_295e0ab5ba2d3b016b53b824751c257b1546`
- Environments: ✅ Production ✅ Preview ✅ Development

**Variable 2 (Optional):**
- Name: `AI_BUILDERS_API_URL`
- Value: `https://space.ai-builders.com/backend/v1/chat/completions`
- Environments: ✅ Production ✅ Preview ✅ Development

### Step 4: Deploy
1. Click "Deploy"
2. Wait ~2 minutes for deployment
3. Your app will be live! 🎉

## 🧪 Test Your App

After deployment:
1. Visit your Vercel URL (provided after deployment)
2. Try clicking one of the example sentences
3. Click "Correct Text"
4. Verify the correction and rationale appear

## 📁 Project Structure

```
auto-corrector/
├── app/
│   ├── api/correct/route.ts    # API endpoint
│   ├── page.tsx                 # Main UI
│   └── layout.tsx               # App layout
├── .env.local                   # Local env (not in git)
├── README.md                    # Full documentation
└── DEPLOYMENT_COMPLETE.md       # Deployment guide
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 Environment Variables

The app requires:
- `AI_BUILDER_TOKEN`: Your AI Builders API token (required)
- `AI_BUILDERS_API_URL`: API endpoint (optional, has default)

## 🎨 Features

- ✅ Corrects spelling errors
- ✅ Fixes grammar mistakes
- ✅ Restores missing words
- ✅ Provides detailed explanations
- ✅ Example sentences for quick testing
- ✅ Beautiful, responsive UI

## 🔗 Links

- **GitHub**: https://github.com/grapeot/auto-corrector
- **Vercel**: (Will be provided after deployment)

## ❓ Troubleshooting

**App not correcting text?**
- Check that `AI_BUILDER_TOKEN` is set in Vercel
- Check browser console for errors
- Verify API token is valid

**Build fails?**
- Make sure Node.js 18+ is used
- Check that all dependencies are installed

## 🎉 Success!

Once deployed, share your auto-corrector app with the world!
