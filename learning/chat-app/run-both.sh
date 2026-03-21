#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="${ROOT}/backend"
FRONTEND_DIR="${ROOT}/frontend"

BACKEND_PID_FILE="${ROOT}/.backend.pid"
FRONTEND_PID_FILE="${ROOT}/.frontend.pid"

rm -f "${BACKEND_PID_FILE}" "${FRONTEND_PID_FILE}"

echo "Starting backend (NestJS)..."
(
  cd "${BACKEND_DIR}"
  npm run start:dev
) >"${ROOT}/backend.log" 2>&1 &
BACKEND_PID=$!
echo "${BACKEND_PID}" > "${BACKEND_PID_FILE}"

echo "Starting frontend (Angular)..."
(
  cd "${FRONTEND_DIR}"
  npm run start
) >"${ROOT}/frontend.log" 2>&1 &
FRONTEND_PID=$!
echo "${FRONTEND_PID}" > "${FRONTEND_PID_FILE}"

echo
echo "Done. Open:"
echo "  Backend:  http://localhost:3000"
echo "  Frontend: http://localhost:4200"
echo
echo "Logs:"
echo "  ${ROOT}/backend.log"
echo "  ${ROOT}/frontend.log"

