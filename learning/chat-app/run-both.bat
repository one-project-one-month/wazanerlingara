@echo off
setlocal

set "ROOT=%~dp0"

set "BACKEND_DIR=%ROOT%backend"
set "FRONTEND_DIR=%ROOT%frontend"

set "NEED_INSTALL=0"

where nest >nul 2>&1
if %errorlevel% neq 0 set "NEED_INSTALL=1"

where ng >nul 2>&1
if %errorlevel% neq 0 set "NEED_INSTALL=1"

if not exist "%BACKEND_DIR%\node_modules\" set "NEED_INSTALL=1"
if not exist "%FRONTEND_DIR%\node_modules\" set "NEED_INSTALL=1"

if "%NEED_INSTALL%"=="1" (
  echo Required tooling/dependencies missing. Running install first...
  call "%ROOT%install-both.bat"
) else (
  echo Tooling and dependencies already present.
)

echo Starting backend (NestJS)...
start "backend" cmd /k "cd /d ""%ROOT%backend"" && npm run start:dev"

echo Starting frontend (Angular)...
start "frontend" cmd /k "cd /d ""%ROOT%frontend"" && npm run start"

echo.
echo Done. Backend and frontend should be running in separate windows.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:4200

endlocal

