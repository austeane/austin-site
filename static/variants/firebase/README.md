# Template Variant

This is a basic template showing the required structure for AI tool variants.

## Key Requirements

### 1. Data Fetching
- Fetch resume data from `/data/resume.json`
- Fetch enablement data from `/data/enablement.json`
- These endpoints are CORS-enabled and return centralized JSON data

### 2. Height Communication
- Send height updates to parent frame for proper iframe resizing:
```javascript
parent?.postMessage({ type: 'variant:height', value: scrollHeight }, '*');
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

## Creating Your Variant

1. Copy this template to `/static/variants/[your-tool-name]/`
2. Customize the styling and layout to match your AI tool's design
3. Ensure data fetching and height updates work correctly
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