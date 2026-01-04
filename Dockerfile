# Stage 1: Build
FROM node:20-slim AS builder

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first
COPY package*.json next.config.ts ./

RUN npm ci

COPY . .

# Build Next.js
WORKDIR /app/src/app
RUN npm run build

# Stage 2: Production container
FROM node:20-slim

WORKDIR /app

# Install runtime tools
RUN apt-get update && apt-get install -y cron vim python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies inside final image
COPY package*.json next.config.ts ./
RUN npm ci

# Copy production build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src /app/src

# Cron setup
COPY ./docker_scripts/crontab.txt /etc/cron.d/my-cron
COPY ./docker_scripts/entrypoint.sh /entrypoint.sh

RUN chmod 0644 /etc/cron.d/my-cron && crontab /etc/cron.d/my-cron
RUN chmod +x /entrypoint.sh

ENV NODE_ENV=production
EXPOSE 3000

CMD ["/entrypoint.sh"]

