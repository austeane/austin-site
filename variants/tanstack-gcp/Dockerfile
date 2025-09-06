# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.vinxi ./.vinxi

# Install production dependencies only
RUN npm ci --production

# Cloud Run will set PORT env var
ENV PORT=8080
EXPOSE 8080

# Start the application - bind to 0.0.0.0 for Cloud Run
CMD ["npm", "start"]