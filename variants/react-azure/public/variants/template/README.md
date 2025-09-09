# Template Variant

This is a basic template showing the required structure for AI tool variants.

## Key Requirements

### 1. Data Fetching
- Fetch resume data from `/data/resume.json`
- Fetch enablement data from `/data/enablement.json`
- These endpoints are CORS-enabled and return centralized JSON data

### 2. Height & iframe behavior
- Default is fixed-height iframes managed by the parent. You do not need to send height messages.
- Optional autosize: if enabled by the parent, you may post height updates:
  ```javascript
  parent?.postMessage({ type: 'variant:height', value: document.body.scrollHeight }, '*');
  ```

### 3. File Structure
```
/static/variants/[tool-name]/
├── index.html           # Resume variant
└── enablement/
    └── index.html       # AI Enablement variant
```

### 4. Self-Contained
- Include all CSS and JavaScript inline or from CDNs
- Don't reference external local files
- Each variant should be completely independent
- Open external links with `target="_blank"` and `rel="noopener noreferrer"`.

### 5. Cross-deployment deep links (CloudFront)
Behind CloudFront, variants are also served within external apps under:
- `/<prefix>/variants/<tool>/index.html`
- `/<prefix>/variants/<tool>/enablement/index.html`
Where `<prefix>` is one of: `/azure/next`, `/azure/react`, `/gcp/tanstack`.

## Creating Your Variant

1. Copy this template to `/static/variants/[your-tool-name]/`
2. Customize the styling and layout to match your AI tool's design
3. Ensure data fetching works correctly (height messaging optional)
4. Add your provider to `src/lib/providers.ts`:
```typescript
{
    id: 'your-tool-name',
    name: 'Your Tool Name',
    path: '/variants/your-tool-name/index.html',
    icon: '🤖',
    color: '#yourcolor'
}
```

## Testing
1. Run `npm run dev` to test locally
2. Navigate to `/with/your-tool-name` to see your resume variant
3. Navigate to `/with/your-tool-name/enablement` to see your enablement variant
4. Run `npm run validate:variants` to validate your implementation
5. After deploy, spot-check CloudFront deep links: `/<prefix>/variants/<tool>/…`
