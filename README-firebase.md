# Firebase Deployment Branch

This branch is configured for Firebase Hosting deployment as an alternative to AWS/SST.

## Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (if needed):
```bash
firebase init hosting
```

## Local Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deployment

### Manual Deployment
```bash
npm run build
firebase deploy
```

### Automatic Deployment
Push to the `firebase` branch to trigger GitHub Actions deployment.

## Configuration

- **firebase.json**: Hosting configuration
  - Public directory: `build/`
  - SPA rewrites to `/200.html`
  - CORS headers for `/data/**` endpoints
  - Cache headers for static assets

- **.firebaserc**: Project configuration
  - Default project: `austin-site`

- **GitHub Actions**: `.github/workflows/firebase-deploy.yml`
  - Triggers on push to `firebase` branch
  - Builds and deploys to Firebase Hosting
  - Requires `FIREBASE_SERVICE_ACCOUNT` secret

## Required GitHub Secrets

1. Go to repo Settings > Secrets and variables > Actions
2. Add `FIREBASE_SERVICE_ACCOUNT` secret:
   - Go to Firebase Console > Project Settings > Service Accounts
   - Generate new private key
   - Copy the entire JSON content as the secret value

## Features

- Static site hosting with SPA support
- CORS-enabled data endpoints
- Automatic SSL/TLS
- Global CDN
- Custom domain support (configure in Firebase Console)