#!/bin/bash
# Railway deployment script

echo "🚀 Deploying Auto-Corrector to Railway..."
echo ""

# Check if railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login (if not already)
echo "Please login to Railway (will open browser)..."
railway login

# Initialize project
echo "Initializing Railway project..."
railway init

# Set environment variables
echo "Setting environment variables..."
railway variables set AI_BUILDER_TOKEN=sk_3c7c108f_295e0ab5ba2d3b016b53b824751c257b1546
railway variables set AI_BUILDERS_API_URL=https://space.ai-builders.com/backend/v1/chat/completions

# Deploy
echo "Deploying..."
railway up

echo ""
echo "✅ Deployment complete!"
echo "Visit your Railway URL to see your app"
railway open
