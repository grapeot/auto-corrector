#!/bin/bash

# Script to set up GitHub repository for auto-corrector

echo "🚀 Setting up GitHub repository for auto-corrector"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Run: git init"
    exit 1
fi

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Create repository on GitHub (requires GitHub CLI)
if command -v gh &> /dev/null; then
    echo "📦 Creating repository on GitHub..."
    gh repo create auto-corrector --public --source=. --remote=origin --push
    echo "✅ Repository created and pushed to GitHub!"
    echo ""
    echo "🔗 Repository URL: https://github.com/$GITHUB_USERNAME/auto-corrector"
else
    echo "⚠️  GitHub CLI not found. Please create repository manually:"
    echo ""
    echo "1. Go to https://github.com/new"
    echo "2. Repository name: auto-corrector"
    echo "3. Set to Public"
    echo "4. Don't initialize with README"
    echo "5. Then run:"
    echo "   git remote add origin https://github.com/$GITHUB_USERNAME/auto-corrector.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi

echo ""
echo "📝 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import your repository"
echo "3. Add environment variable: AI_BUILDER_TOKEN"
echo "4. Deploy!"

