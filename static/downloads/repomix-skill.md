---
name: repomix
description: Pack repository files into AI-friendly XML/Markdown format using repomix. Use when creating documentation packages, sharing codebase context with AI, analyzing repository structure, or generating context for code reviews. Handles glob patterns, custom configs, and token counting.
allowed-tools: Write, Read, Bash, Glob
---

# Repomix - Repository Packing for AI Context

This skill helps you use `repomix` to pack repository files into single AI-friendly documents (XML, Markdown, JSON, or plain text).

## When to Use This Skill

Use repomix when you need to:
- Create a comprehensive context file for AI assistants
- Package specific files for documentation or code review
- Analyze repository structure and token counts
- Share codebase context across projects
- Generate focused documentation subsets

## Core Workflow

### 1. Quick Pack (Default Behavior)

Pack entire repository with defaults:
```bash
npx repomix@latest
```

Creates `repomix-output.xml` with all non-ignored files.

### 2. Custom File Selection

Pack specific files using glob patterns:
```bash
npx repomix@latest --include "src/**/*.ts,*.md"
```

Or create a config file for reusable patterns:
```json
{
  "output": {
    "filePath": "output.xml",
    "style": "xml"
  },
  "include": [
    "src/**/*.ts",
    "docs/**/*.md",
    "README.md"
  ]
}
```

Save as `.repomix-config.json` or `repomix.config.json`, then:
```bash
npx repomix@latest --config .repomix-config.json
```

### 3. Analyze Token Usage

See what files consume the most tokens:
```bash
npx repomix@latest --token-count-tree
```

Show only files with ≥100 tokens:
```bash
npx repomix@latest --token-count-tree 100
```

## Configuration File Structure

Create a config file when packing the same files repeatedly:

```json
{
  "output": {
    "filePath": "my-output.xml",
    "style": "xml",
    "headerText": "Custom header text",
    "instructionFilePath": "INSTRUCTIONS.md",
    "showLineNumbers": false,
    "removeComments": false,
    "removeEmptyLines": false,
    "topFilesLength": 10
  },
  "include": [
    "path/to/file1.py",
    "src/**/*.ts",
    "docs/**/*.md"
  ],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": [
      "*.test.js",
      "**/__tests__/**"
    ]
  },
  "security": {
    "enableSecurityCheck": true
  }
}
```

## Common Options Reference

### Output Control
- `--output <file>` or `-o <file>` - Output file path (default: `repomix-output.xml`)
- `--style <type>` - Format: `xml`, `markdown`, `json`, or `plain` (default: `xml`)
- `--output-show-line-numbers` - Add line numbers to output
- `--no-file-summary` - Skip file summary section
- `--no-directory-structure` - Skip directory tree visualization

### File Selection
- `--include <patterns>` - Include only matching files (comma-separated globs)
- `-i, --ignore <patterns>` - Exclude patterns (comma-separated globs)
- `--no-gitignore` - Don't use .gitignore rules
- `--no-default-patterns` - Don't exclude node_modules, .git, etc.

### Content Processing
- `--remove-comments` - Strip code comments
- `--remove-empty-lines` - Remove blank lines
- `--compress` - Extract essential code structure only (classes, functions)
- `--truncate-base64` - Reduce base64 strings

### Analysis & Debugging
- `--token-count-tree [threshold]` - Show file tree with token counts
- `--top-files-len <number>` - Number of largest files in summary (default: 5)
- `--verbose` - Enable detailed logging

### Git Integration
- `--include-diffs` - Add git diff section (working tree + staged changes)
- `--include-logs` - Add commit history
- `--include-logs-count <count>` - Number of commits to include (default: 50)

### Advanced
- `--copy` - Copy output to clipboard
- `--stdout` - Write to stdout instead of file
- `--stdin` - Read file paths from stdin

## Example Use Cases

### 1. Migration Analysis Package
Pack files related to a specific migration:
```json
{
  "output": {
    "filePath": "otel-migration-repomix.xml",
    "headerText": "OpenTelemetry Migration Analysis",
    "instructionFilePath": "MIGRATION_ANALYSIS.md",
    "showLineNumbers": false
  },
  "include": [
    "MIGRATION_ANALYSIS.md",
    "src/telemetry/**/*.ts",
    "src/converters/**/*.py",
    "config/otel-config.yaml"
  ]
}
```

### 2. Code Review Package
Pack changed files with git diffs:
```bash
npx repomix@latest \
  --include-diffs \
  --include-logs \
  --include-logs-count 10 \
  --output code-review.xml
```

### 3. Feature Documentation
Pack frontend components for a feature:
```bash
npx repomix@latest \
  --include "src/features/authentication/**/*,docs/auth.md" \
  --output auth-feature.xml \
  --style markdown
```

### 4. API Documentation
Pack only API-related files:
```json
{
  "output": {
    "filePath": "api-docs.xml",
    "style": "xml"
  },
  "include": [
    "src/api/**/*.ts",
    "src/routes/**/*.ts",
    "src/controllers/**/*.ts",
    "API.md"
  ],
  "ignore": {
    "customPatterns": ["*.test.ts", "*.spec.ts"]
  }
}
```

## Best Practices

### 1. Use Named Configs for Repeated Patterns
Instead of long CLI commands, create named config files:
- `.repomix-feature-x.config.json`
- `.repomix-migration.config.json`
- `.repomix-api-docs.config.json`

### 2. Include Context Documentation
Use `instructionFilePath` to prepend analysis or instructions:
```json
{
  "output": {
    "instructionFilePath": "CONTEXT.md"
  }
}
```

### 3. Check Token Counts First
Before packing large repositories:
```bash
npx repomix@latest --token-count-tree 500
```

Adjust includes to stay within AI context limits.

### 4. Line Numbers (Disabled by Default)
Line numbers are disabled by default to keep output clean. Only enable when you need precise line references:
```json
{
  "output": {
    "showLineNumbers": true
  }
}
```

### 5. Security Check by Default
Repomix scans for API keys and secrets by default. Only disable if needed:
```json
{
  "security": {
    "enableSecurityCheck": false
  }
}
```

## Token Budget Guidelines

**Target limit: 55,000 tokens** - This ensures the repomix package fits comfortably in most AI workflows while leaving room for additional context.

Common AI context windows:
- **Claude 3.5 Sonnet**: 200K tokens (~600KB packed output)
- **GPT-4 Turbo**: 128K tokens (~400KB packed output)
- **GPT-4**: 8K-32K tokens (~25-100KB packed output)

**Best practice:** Always aim for 55K tokens or less when creating repomix packages. Use `--token-count-tree` to verify and adjust includes/excludes as needed.

## Troubleshooting

### Output is Too Large
1. Use `--token-count-tree` to identify heavy files
2. Add `--compress` to extract structure only
3. Use `--remove-comments` and `--remove-empty-lines`
4. Narrow `--include` patterns
5. Add test files to `--ignore`

### Missing Files
1. Check `.gitignore` rules (use `--no-gitignore` to bypass)
2. Verify glob patterns match (test with `--verbose`)
3. Ensure paths are relative to repo root

### Security Warnings
1. Review flagged files
2. Add sensitive files to `.gitignore`
3. Use `--ignore` to exclude specific patterns

## Quick Reference Commands

```bash
# Pack entire repo
npx repomix@latest

# Pack with custom output
npx repomix@latest -o output.xml --style markdown

# Pack specific patterns
npx repomix@latest --include "src/**/*.py,*.md"

# Use config file
npx repomix@latest --config .repomix-config.json

# Analyze token usage
npx repomix@latest --token-count-tree 100

# Pack with git history
npx repomix@latest --include-diffs --include-logs

# Copy to clipboard
npx repomix@latest --copy

# Create new config
npx repomix@latest --init
```

## Creating Overlapping Bundles for Issue Sets

When asked to create overlapping repomixes for a set of issues/tickets, the goal is to create **the minimum number of bundles** where **each issue has complete context** in at least one bundle.

### Workflow

1. **Read the issues file** (e.g., `tickets.md`, `issues.md`) to understand what needs context
2. **Analyze codebase** with `--token-count-tree` to understand file sizes
3. **Group issues by shared context** - issues that need similar files go together
4. **Create bundles** where each targets 40-60k tokens (adjustable)
5. **Create instruction files** describing which issues are covered in each bundle
6. **Generate bundles** with `--instruction-file-path` to embed issue context

### Example Request

> "Can you make overlapping repomixes for this set of issues?"

This means:
- Analyze the issues/tickets in the specified file
- Create the minimum number of bundles (typically 2-5)
- Each bundle should be 40-60k tokens
- Each issue must have ALL its needed context in at least one bundle
- Bundles CAN overlap (same file in multiple bundles) to ensure self-containment
- Each bundle should embed its issue descriptions via `--instruction-file-path`

### Step-by-Step Process

#### Step 1: Analyze Issues
```bash
# Read the issues file
cat tickets.md
```

Identify for each issue:
- Relevant source files
- Related schemas/types
- Test files (if testing issue)
- Documentation files

#### Step 2: Check File Sizes
```bash
# Get token counts for relevant directories
npx repomix@latest --token-count-tree 100 --include "src/**/*.ts"
```

#### Step 3: Group Issues by Context

Example groupings:
| Bundle | Focus | Issues | Est. Tokens |
|--------|-------|--------|-------------|
| 1 | Security/Auth | ISSUE-001, 003, 004 | ~45k |
| 2 | Build/Config | ISSUE-002, 005-008 | ~50k |
| 3 | Testing | ISSUE-009 | ~45k |
| 4 | UI/Dashboard | ISSUE-010, 011 | ~48k |

#### Step 4: Create Instruction Files

Create one instruction file per bundle that describes the issues:

```markdown
# repomix-bundles/instruction-1-security.md

# TICKETS COVERED IN THIS BUNDLE

## ISSUE-001 (P0): Lock down debug endpoints
- **Problem**: Debug routes expose configuration
- **Suggestion**: Gate behind admin auth
- **Key files**: src/routes/api/debug.ts

## ISSUE-003 (P0): Add rate limiting
- **Problem**: No server-side rate limiting
- **Key files**: src/lib/security/*, src/routes/api/**
```

#### Step 5: Generate Bundles

```bash
# Bundle 1: Security
npx repomix@latest --output repomix-bundles/bundle-1-security.xml \
  --instruction-file-path repomix-bundles/instruction-1-security.md \
  --include "src/lib/auth/**/*.ts,src/lib/security/**/*.ts,src/routes/api/**/*.ts,..."

# Bundle 2: Config
npx repomix@latest --output repomix-bundles/bundle-2-config.xml \
  --instruction-file-path repomix-bundles/instruction-2-config.md \
  --include "vite.config.ts,package.json,src/routes/__root.tsx,..."
```

### Output Structure

Create a dedicated directory with:

```
repomix-bundles/
├── README.md                    # Summary and regeneration commands
├── bundle-1-security.xml        # Generated bundle
├── bundle-2-config.xml
├── bundle-3-testing.xml
├── instruction-1-security.md    # Issue descriptions (embedded in XML)
├── instruction-2-config.md
└── instruction-3-testing.md
```

### Key Principles

1. **Self-contained bundles** - Each bundle has ALL context for its issues
2. **Overlap is OK** - Same file can appear in multiple bundles
3. **Embedded instructions** - Use `--instruction-file-path` so bundles are self-documenting
4. **Explicit file lists** - Use explicit file paths, not broad globs (avoids token bloat)
5. **Verify sizes** - Check each bundle is in 40-60k range before finalizing

### Token Budget Adjustments

The user may specify different targets:
- "40-60k per bundle" (default)
- "under 50k each"
- "as small as possible while covering everything"

Adjust file selection accordingly. Use `--token-count-tree` to verify before generating.

### README Template

```markdown
# Repomix Bundles for [Project/Issues]

## Bundle Summary

| Bundle | Tokens | Files | Issues Covered |
|--------|--------|-------|----------------|
| bundle-1-security.xml | ~45k | 50 | ISSUE-001, 003, 004 |
| bundle-2-config.xml | ~50k | 41 | ISSUE-002, 005-008 |

## Issue Coverage Matrix

| Issue | Priority | Bundle |
|-------|----------|--------|
| ISSUE-001 | P0 | 1 |
| ISSUE-002 | P0 | 2 |

## Regeneration Commands

[Include full commands for each bundle]
```

## Additional Resources

- **Repomix Documentation**: https://github.com/yamadashy/repomix
- **Online Tool**: https://repomix.com
- **NPM Package**: https://www.npmjs.com/package/repomix

## Workflow Steps

When asked to create a repomix package:

1. **Understand the goal** - What files are relevant?
2. **Check token budget** - Target 55K tokens or less
3. **Create config file** - Reusable pattern for future updates
4. **Run repomix** - Generate the output
5. **Verify output** - Ensure ≤55K tokens, check file count and security warnings
6. **Adjust if needed** - Exclude large test files or docs if over limit
7. **Document usage** - Note config location and purpose

Always prefer config files over long CLI commands for maintainability.
