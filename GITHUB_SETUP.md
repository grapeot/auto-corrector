# GitHub Repository Setup

## Quick Setup

### Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
# Make sure you're authenticated
gh auth login

# Create and push repository
gh repo create auto-corrector --public --source=. --remote=origin --push
```

### Option 2: Manual Setup

1. **Create repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `auto-corrector`
   - Description: "LLM-powered auto-corrector web app"
   - Set to **Public**
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/auto-corrector.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Verify Setup

After pushing, verify your repository is accessible at:
`https://github.com/YOUR_USERNAME/auto-corrector`

## Next: Deploy to Vercel

See [DEPLOY.md](./DEPLOY.md) for deployment instructions.

