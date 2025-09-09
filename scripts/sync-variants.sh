#!/usr/bin/env bash
set -euo pipefail

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
SRC="$ROOT/static/variants"

if [ ! -d "$SRC" ]; then
  echo "❌ $SRC does not exist. Add your AI variants under static/variants/*"
  exit 1
fi

copy_to() {
  local dest="$1"
  mkdir -p "$dest"
  rsync -a --delete "$SRC/" "$dest/variants/"
  echo "✓ Synced variants → $dest/variants/"
}

# Next.js
copy_to "$ROOT/variants/nextjs-azure/public"

# React (Vite, SWA)
copy_to "$ROOT/variants/react-azure/public"

# TanStack (Vite)
copy_to "$ROOT/variants/tanstack-gcp/public"

echo "✅ All variants synced into each app's public/variants/"

