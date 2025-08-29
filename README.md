# Austin Site - AI-Enhanced Resume & Enablement Platform

A modern, AI-variant resume and enablement site built with SvelteKit, featuring multiple AI-generated design variants and progressive disclosure for content.

## 🚀 Features

- **Multi-variant system**: Different AI tools (Claude Code, ChatGPT, etc.) can generate unique variants
- **Iframe isolation**: Each variant is sandboxed to prevent CSS/JS conflicts
- **Progressive disclosure**: Enablement content uses accordions and collapsible sections
- **CORS-enabled data endpoints**: Variants can fetch data cross-origin
- **Responsive design**: Works seamlessly on mobile and desktop
- **Single source of truth**: All variants read from centralized JSON data

## 📁 Project Structure

```
austin-site/
├── src/
│   ├── routes/              # SvelteKit routes
│   │   ├── +page.svelte     # Resume page (minimal)
│   │   ├── enablement/      # AI Enablement page
│   │   └── with/[tool]/     # Variant routes
│   ├── lib/
│   │   ├── components/      # Shared components
│   │   └── providers.ts     # AI provider configuration
│   └── hooks.server.ts      # CORS headers for data endpoints
├── static/
│   ├── data/                # JSON data sources
│   │   ├── resume.json      # Resume content
│   │   └── enablement.json  # AI enablement content
│   └── variants/            # AI-generated variants
│       ├── claude-code/     # Claude Code variants
│       └── chatgpt/         # ChatGPT variants
└── scripts/
    └── validate-variant.mjs # Variant validation script
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Validate variants
node scripts/validate-variant.mjs
```

## 🎨 Creating New Variants

Variants can be either single HTML files or static bundles. They must:

1. Fetch data from `/data/resume.json` or `/data/enablement.json`
2. Post height updates for iframe resizing:
   ```javascript
   parent?.postMessage({ type: 'variant:height', value: height }, '*');
   ```
3. Be placed in `/static/variants/[tool-name]/`

### Adding a New Provider

Edit `src/lib/providers.ts`:

```typescript
export const PROVIDERS: Provider[] = [
  // ... existing providers
  { 
    id: 'your-tool', 
    name: 'Your Tool', 
    path: '/variants/your-tool/index.html', 
    icon: '🎯', 
    color: '#your-color' 
  }
];
```

## 📊 Available Routes

- `/` - Minimal resume (default)
- `/enablement` - AI Enablement content
- `/with/[tool]` - Tool-specific resume variant
- `/with/[tool]/enablement` - Tool-specific enablement variant
- `/data/resume.json` - Resume data API
- `/data/enablement.json` - Enablement data API

## 🚢 Deployment

The site is built as a static SvelteKit app and can be deployed to any static hosting service:

```bash
npm run build
# Deploy the 'build' directory to your hosting service
```

### Recommended Platforms
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## 📝 Variant Contract

Variants must follow these rules:

1. **Data Source**: Read from `/data/*.json` endpoints
2. **Isolation**: Wrap content in unique root element
3. **Communication**: Post height updates to parent frame
4. **Static Only**: No server-side rendering required
5. **Self-contained**: Include all styles and scripts

## 🤝 Contributing

Feel free to create new AI variants! Simply:
1. Generate your variant using your preferred AI tool
2. Place it in `/static/variants/[your-tool]/`
3. Add your tool to the providers list
4. Submit a PR

## 📄 License

MIT

---

Built with ❤️ and AI assistance