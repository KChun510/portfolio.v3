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

# Start Next.js app
npx next start -H 0.0.0.0

