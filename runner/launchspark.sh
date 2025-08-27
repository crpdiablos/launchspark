#!/usr/bin/env bash
set -euo pipefail
here=$(cd "$(dirname "$0")" && pwd)
cd "$here/.."
docker compose -f infra/docker-compose.yml up --build -d
echo 'Up! http://localhost:8080'
