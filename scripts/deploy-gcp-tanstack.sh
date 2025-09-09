#!/bin/bash

# Deploy TanStack to Google Cloud Run
set -e

echo "==================================="
echo "Deploying TanStack to Google Cloud Run"
echo "==================================="

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into TanStack public/variants..."
./scripts/sync-variants.sh

# Configuration
SERVICE_NAME="austin-resume-tanstack"
REGION="us-central1"
PROJECT_ID=$(gcloud config get-value project)

if [ -z "$PROJECT_ID" ]; then
    echo "Error: No GCP project selected."
    echo "Run: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo ""
echo "Configuration:"
echo "- Project: $PROJECT_ID"
echo "- Service: $SERVICE_NAME"
echo "- Region: $REGION"
echo ""

cd variants/tanstack-gcp

# Ensure dependencies are installed for reproducible builds
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Option 1: Deploy from source (recommended - simpler)
echo "Deploying from source to Cloud Run..."
echo "This will build and deploy automatically..."
echo ""

gcloud run deploy $SERVICE_NAME \
    --source . \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --max-instances 10 \
    --project $PROJECT_ID

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
    --region $REGION \
    --format 'value(status.url)' \
    --project $PROJECT_ID)

echo ""
echo "==================================="
echo "Deployment Complete!"
echo "==================================="
echo ""
echo "Service URL: $SERVICE_URL"
echo ""
echo "Save this URL for SST config:"
echo "GCP_TANSTACK_ORIGIN=$SERVICE_URL"
