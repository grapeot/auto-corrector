# Auto-Corrector

A Next.js web application that uses LLM (Grok-4-Fast) to automatically correct spelling errors, grammar mistakes, typos, and restore missing words in text.

## Features

- **Smart Text Correction**: Corrects spelling, grammar, and typing errors
- **Missing Word Restoration**: Restores accidentally omitted words
- **Example Sentences**: Quick-start examples for different error types
- **Detailed Explanations**: Shows rationale for each correction
- **Modern UI**: Clean, responsive design built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- AI Builders API token

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auto-corrector
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your AI Builders API token:
```
AI_BUILDER_TOKEN=your_token_here
AI_BUILDERS_API_URL=https://space.ai-builders.com/backend/v1/chat/completions
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variable `AI_BUILDER_TOKEN` in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

Make sure to set the `AI_BUILDER_TOKEN` environment variable in your deployment platform.

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Grok-4-Fast**: LLM model via AI Builders API

## How It Works

The app uses the V4 auto-corrector prompt which:
1. Identifies missing words that were originally present
2. Restores ONLY missing words (doesn't add new content)
3. Corrects spelling, grammar, and typing errors
4. Provides detailed rationale for each correction

## License

MIT
