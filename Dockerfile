# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy only the necessary files
COPY package*.json ./

# Install deps
RUN npm install

# Copy everything
COPY . .

# Change directory to your app root and build
WORKDIR /app/src/app
RUN npm run build

# Stage 2: Production container
FROM node:18-alpine

WORKDIR /app

# Install cron
RUN apk update && apk add --no-cache cronie

# Copy production build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy over cron setup
COPY --from=builder /app/src /app/src
COPY ./docker_scripts/crontab.txt /etc/crontabs/root
COPY ./docker_scripts/entrypoint.sh /entrypoint.sh

# Set perms on sh
RUN chmod +x /entrypoint.sh

ENV NODE_ENV=production
EXPOSE 3000

CMD ["/entrypoint.sh"]
#CMD ["npx", "next", "start", "-H", "0.0.0.0"]
#CMD ["npm", "start"]

