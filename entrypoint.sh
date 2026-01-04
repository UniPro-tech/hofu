#!/bin/sh
set -e

echo "== prisma run migrate deploy =="
bunx prisma db push

echo "=== build start ==="
bun run build

echo "=== build done, start runtime ==="
exec bun run start