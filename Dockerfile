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

# Copy production build artifacts
COPY --from=builder /app/src/app/public ./public
COPY --from=builder /app/src/app/.next ./.next
COPY --from=builder /app/src/app/node_modules ./node_modules
COPY --from=builder /app/src/app/package.json ./package.json

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npx", "next", "start", "-H", "0.0.0.0"]
#CMD ["npm", "start"]

