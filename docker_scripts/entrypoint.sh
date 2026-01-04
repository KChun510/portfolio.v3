#!/bin/sh

# Export current env into a file cron reads
printenv | grep -v "no_proxy" > /etc/environment

# Optional: load it for interactive shell processes too
set -o allexport
. /etc/environment
set +o allexport

# Start cron
cron

echo "Cron started..."

# Renew spotify PAT, on first run.
npx tsx ./src/app/spotify_utils/refresh_token.ts

# Start Next.js app
exec npx next start -H 0.0.0.0

