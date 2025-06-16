# Stage 1: Build
FROM node:18-slim AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source
COPY . .

# Build the Next.js app
WORKDIR /app/src/app
RUN npm run build

# Stage 2: Production container
FROM node:18-slim

WORKDIR /app

# Install cron and clean up
RUN apt-get update && apt-get install -y cron && rm -rf /var/lib/apt/lists/*

# Create cron log file
RUN touch /var/log/cron.log

# Copy production build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src /app/src

# Copy cron and startup scripts
COPY ./docker_scripts/crontab.txt /etc/cron.d/my-cron
COPY ./docker_scripts/entrypoint.sh /entrypoint.sh

# Set permissions
RUN chmod 0644 /etc/cron.d/my-cron && crontab /etc/cron.d/my-cron
RUN chmod +x /entrypoint.sh

ENV NODE_ENV=production
EXPOSE 3000

CMD ["/entrypoint.sh"]

