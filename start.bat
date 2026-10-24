@echo off
rem Serves this folder at http://localhost:5173 and opens it in the default browser.
rem Close the "WellCare server" window to stop it.
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo Python was not found. Install it from https://www.python.org/downloads/ and try again.
  pause
  exit /b 1
)

start "WellCare server" python -m http.server 5173
timeout /t 2 /nobreak >nul
start "" http://localhost:5173
