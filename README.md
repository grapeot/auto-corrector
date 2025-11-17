# Auto-Corrector

A Next.js web application that uses LLM (Grok-4-Fast) to automatically correct spelling errors, grammar mistakes, typos, and restore missing words in text.

## 🌐 Live Demo

**Deployed on AI Builder**: https://auto-corrector.ai-builders.space/

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
git clone https://github.com/grapeot/auto-corrector.git
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

## Deployment

### AI Builder (Current Deployment)

The app is deployed on AI Builder platform:
- **URL**: https://auto-corrector.ai-builders.space/
- **Status**: Live
- **Deployment**: Automated via GitHub

### Other Platforms

The app can be deployed to any platform that supports Docker or Next.js:
- **Vercel**: Import GitHub repo, add environment variables, deploy
- **Railway**: `railway up` with environment variables
- **Render**: Connect GitHub repo, use Dockerfile
- **Fly.io**: `fly launch` and `fly deploy`

See the Dockerfile for containerized deployment.

## Project Structure

```
auto-corrector/
├── app/
│   ├── api/correct/route.ts    # API endpoint
│   ├── page.tsx                 # Main UI
│   └── layout.tsx               # App layout
├── Dockerfile                   # Production Docker image
├── docker-compose.yml           # Local development
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## Environment Variables

- `AI_BUILDER_TOKEN`: Your AI Builders API token (required)
- `AI_BUILDERS_API_URL`: API endpoint (optional, defaults to production URL)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
