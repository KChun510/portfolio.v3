#!/bin/sh

# Start cron
crond

# Optional: log cron status
echo "Cron started..."

# Start the Next.js app
npx next start -H 0.0.0.0


