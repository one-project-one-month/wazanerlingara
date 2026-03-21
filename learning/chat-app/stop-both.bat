@echo off
setlocal

set "ROOT=%~dp0"
set "BACKEND_DIR=%ROOT%backend"
set "FRONTEND_DIR=%ROOT%frontend"

echo Stopping frontend (Angular) and backend (NestJS)...
REM Best-effort process termination scoped by project folders.
REM Uses PowerShell to find processes whose command line includes the folder path.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='SilentlyContinue'; $backend='%BACKEND_DIR%'; $frontend='%FRONTEND_DIR%'; Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -and (($_.CommandLine -like '*'+$backend+'*') -or ($_.CommandLine -like '*'+$frontend+'*')) } | ForEach-Object { $_ | Invoke-CimMethod -MethodName Terminate | Out-Null }"

echo Done.

endlocal

