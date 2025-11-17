# Docker Deployment Guide

## ✅ Docker Image Built Successfully!

The Docker image has been tested and is ready for deployment.

## 🧪 Local Testing

Test the Docker container locally:

```bash
docker run -d -p 3000:3000 \
  -e AI_BUILDER_TOKEN="your_token_here" \
  -e AI_BUILDERS_API_URL="https://space.ai-builders.com/backend/v1/chat/completions" \
  --name auto-corrector \
  auto-corrector:test

# Visit http://localhost:3000
# Stop with: docker stop auto-corrector && docker rm auto-corrector
```

Or use docker-compose:

```bash
docker-compose up -d
# Visit http://localhost:3000
# Stop with: docker-compose down
```

## 🚀 Deployment Options

### Option 1: Railway (Recommended - Easiest)

1. **Install Railway CLI:**
```bash
npm install -g @railway/cli
railway login
```

2. **Deploy:**
```bash
railway init
railway up
railway variables set AI_BUILDER_TOKEN=your_token_here
railway open
```

### Option 2: Render

1. Go to https://render.com
2. Create new "Web Service"
3. Connect your GitHub repository: `grapeot/auto-corrector`
4. Configure:
   - **Name**: auto-corrector
   - **Environment**: Docker
   - **Dockerfile Path**: `Dockerfile`
   - **Docker Build Context**: `.`
5. Add Environment Variables:
   - `AI_BUILDER_TOKEN`: your_token_here
   - `AI_BUILDERS_API_URL`: https://space.ai-builders.com/backend/v1/chat/completions
6. Click "Create Web Service"

### Option 3: Fly.io

1. **Install Fly CLI:**
```bash
curl -L https://fly.io/install.sh | sh
fly auth login
```

2. **Deploy:**
```bash
fly launch
# Follow prompts, then:
fly secrets set AI_BUILDER_TOKEN=your_token_here
fly deploy
```

### Option 4: Docker Hub + Any Platform

1. **Push to Docker Hub:**
```bash
docker tag auto-corrector:test YOUR_USERNAME/auto-corrector:latest
docker push YOUR_USERNAME/auto-corrector:latest
```

2. **Deploy on any platform** that supports Docker:
   - AWS ECS/Fargate
   - Google Cloud Run
   - Azure Container Instances
   - DigitalOcean App Platform
   - Heroku (with Docker support)

## 📋 Environment Variables

Required environment variables:
- `AI_BUILDER_TOKEN`: Your AI Builders API token (required)
- `AI_BUILDERS_API_URL`: API endpoint (optional, has default)

## 🔍 Verify Deployment

After deployment:
1. Visit your deployment URL
2. Try one of the example sentences
3. Click "Correct Text"
4. Verify corrections work

## 🐛 Troubleshooting

**Container won't start?**
- Check environment variables are set
- Check logs: `docker logs auto-corrector`
- Verify port 3000 is exposed

**API errors?**
- Verify `AI_BUILDER_TOKEN` is correct
- Check API endpoint URL
- Review container logs

## 📦 Image Details

- **Base Image**: node:20-alpine
- **Size**: ~200MB (optimized)
- **Port**: 3000
- **Health Check**: HTTP GET on port 3000

