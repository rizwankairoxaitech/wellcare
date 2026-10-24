@echo off
rem Builds and serves the Wellcare Next.js site at http://localhost:3000, then opens it in the browser.
rem Close the "Wellcare site" window to stop it. For live editing use "npm run dev" instead.
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install it from https://nodejs.org and try again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install || (pause & exit /b 1)
)

echo Building the site...
call npm run build || (pause & exit /b 1)

start "Wellcare site" cmd /c npm start
timeout /t 4 /nobreak >nul
start "" http://localhost:3000
