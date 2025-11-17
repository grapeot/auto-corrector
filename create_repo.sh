#!/bin/bash
# Create GitHub repository using GitHub CLI

if command -v gh &> /dev/null; then
    echo "Creating GitHub repository 'auto-corrector'..."
    gh repo create auto-corrector --public --source=. --remote=origin --push
    echo "✅ Repository created!"
    echo ""
    echo "🔗 Repository URL:"
    gh repo view --web
else
    echo "GitHub CLI not found. Please install it:"
    echo "  brew install gh"
    echo "  gh auth login"
    echo ""
    echo "Or follow manual setup in GITHUB_SETUP.md"
fi
