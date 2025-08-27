@echo off
docker compose -f ..\infra\docker-compose.yml up --build -d
echo Up! http://localhost:8080
