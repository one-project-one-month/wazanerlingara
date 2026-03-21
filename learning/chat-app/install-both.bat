@echo off
setlocal

set "ROOT=%~dp0"
set "BACKEND_DIR=%ROOT%backend"
set "FRONTEND_DIR=%ROOT%frontend"

echo Checking required tooling...

where node >nul 2>&1
if %errorlevel% neq 0 (
  echo ERROR: `node` was not found in PATH. Install Node.js first.
  exit /b 1
)

where npm >nul 2>&1
if %errorlevel% neq 0 (
  echo ERROR: `npm` was not found in PATH. Install Node.js first.
  exit /b 1
)

set "NEED_NEST=0"
set "NEED_NG=0"

where nest >nul 2>&1
if %errorlevel% neq 0 set "NEED_NEST=1"

where ng >nul 2>&1
if %errorlevel% neq 0 set "NEED_NG=1"

if "%NEED_NEST%"=="1" (
  echo Installing @nestjs/cli globally...
  npm i -g @nestjs/cli
) else (
  echo Nest CLI already installed.
)

if "%NEED_NG%"=="1" (
  echo Installing @angular/cli globally...
  npm i -g @angular/cli
) else (
  echo Angular CLI already installed.
)

echo.
echo Installing project dependencies (if needed)...

if not exist "%BACKEND_DIR%\node_modules\" (
  echo Installing backend dependencies...
  cd /d "%BACKEND_DIR%"
  npm install
) else (
  echo Backend dependencies already present.
)

if not exist "%FRONTEND_DIR%\node_modules\" (
  echo Installing frontend dependencies...
  cd /d "%FRONTEND_DIR%"
  npm install
) else (
  echo Frontend dependencies already present.
)

echo.
echo Install complete.

endlocal

