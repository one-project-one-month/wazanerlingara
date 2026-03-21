#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

BACKEND_PID_FILE="${ROOT}/.backend.pid"
FRONTEND_PID_FILE="${ROOT}/.frontend.pid"

stop_pid_file() {
  local pid_file="$1"
  if [[ -f "${pid_file}" ]]; then
    local pid
    pid="$(cat "${pid_file}" || true)"
    if [[ -n "${pid}" ]]; then
      if kill -0 "${pid}" 2>/dev/null; then
        kill "${pid}" 2>/dev/null || true
        # Give it a moment to exit cleanly.
        sleep 1
        kill -9 "${pid}" 2>/dev/null || true
      fi
    fi
    rm -f "${pid_file}"
  fi
}

echo "Stopping frontend (Angular)..."
stop_pid_file "${FRONTEND_PID_FILE}"

echo "Stopping backend (NestJS)..."
stop_pid_file "${BACKEND_PID_FILE}"

echo "Done."

