#!/bin/bash

# Google Cloud Run Setup for TanStack
set -e

echo "==================================="
echo "Google Cloud Run Setup for TanStack"
echo "==================================="

# Configuration
SERVICE_NAME="austin-resume-tanstack"
REGION="us-central1"

echo ""
echo "Configuration:"
echo "- Service Name: $SERVICE_NAME"
echo "- Region: $REGION"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "Error: gcloud CLI is not installed."
    echo "Install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if logged in
echo "Checking GCP login status..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "Not logged in to GCP. Running 'gcloud auth login'..."
    gcloud auth login
fi

ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)")
echo "Logged in as: $ACCOUNT"
echo ""

# Get or set project
CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
if [ -z "$CURRENT_PROJECT" ]; then
    echo "No project selected."
    echo "Available projects:"
    gcloud projects list --format="table(projectId,name)"
    echo ""
    read -p "Enter project ID: " PROJECT_ID
    gcloud config set project $PROJECT_ID
else
    PROJECT_ID=$CURRENT_PROJECT
    echo "Using project: $PROJECT_ID"
fi

echo ""

# Enable required APIs
echo "Enabling required APIs..."
gcloud services enable \
    cloudbuild.googleapis.com \
    run.googleapis.com \
    containerregistry.googleapis.com \
    artifactregistry.googleapis.com \
    --project $PROJECT_ID

echo "APIs enabled."
echo ""

# Create Artifact Registry repository (newer than Container Registry)
echo "Creating Artifact Registry repository..."
gcloud artifacts repositories create austin-resume \
    --repository-format=docker \
    --location=$REGION \
    --description="Austin Resume containers" \
    --project=$PROJECT_ID \
    || echo "Repository already exists"

echo ""

# Build and deploy from source
echo "Ready to deploy!"
echo ""
echo "==================================="
echo "Setup Complete!"
echo "==================================="
echo ""
echo "To deploy TanStack to Cloud Run:"
echo "1. cd variants/tanstack-gcp"
echo "2. Run: gcloud run deploy $SERVICE_NAME \\"
echo "         --source . \\"
echo "         --platform managed \\"
echo "         --region $REGION \\"
echo "         --allow-unauthenticated \\"
echo "         --port 8080"
echo ""
echo "Or use the deploy script: ./scripts/deploy-gcp-tanstack.sh"
echo ""
echo "The deployment will:"
echo "- Build a container image"
echo "- Push it to Artifact Registry"
echo "- Deploy to Cloud Run"
echo "- Return the service URL"
echo ""
echo "Project ID: $PROJECT_ID"
echo "Region: $REGION"