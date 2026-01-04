@echo off
REM Webera - Automatisk kunde deployment
REM Kjør: deploy-ny-kunde.bat

echo ========================================
echo    WEBERA - NY KUNDE DEPLOYMENT
echo ========================================
echo.

set /p KUNDE="Kundenavn (f.eks olas-frisorsalong): "
set /p EMAIL="Kunde epost: "
set /p DOMENE="Kundens domene (f.eks www.olafrisor.no): "

echo.
echo Jobber...
echo.

REM Gå til prosjektmappen
cd C:\Users\holth\Webera

REM Kopier til ny mappe
echo [1/5] Kopierer prosjekt...
xcopy /E /I /Q . "C:\Users\holth\%KUNDE%"
cd "C:\Users\holth\%KUNDE%"

REM Fjern git history
rd /s /q .git 2>nul

REM Opprett nytt git repo
echo [2/5] Oppretter git repository...
git init
git add .
git commit -m "Initial commit for %KUNDE%"

REM Opprett GitHub repo og push (krever gh CLI)
echo [3/5] Pusher til GitHub...
gh repo create %KUNDE% --public --source=. --remote=origin --push

REM Deploy til Vercel (krever vercel CLI)
echo [4/5] Deployer til Vercel...
vercel --prod --yes

echo.
echo [5/5] Ferdig!
echo.
echo ========================================
echo           DEPLOYMENT FERDIG!
echo ========================================
echo.
echo Prosjekt: %KUNDE%
echo GitHub: https://github.com/DIN-BRUKER/%KUNDE%
echo Vercel: Se lenken over
echo.
echo NESTE STEG:
echo 1. Gå til Vercel Dashboard
echo 2. Finn prosjektet "%KUNDE%"
echo 3. Settings -^> Domains
echo 4. Legg til: %DOMENE%
echo 5. Følg DNS-instruksjonene
echo.
echo Kunde epost: %EMAIL%
echo ========================================
pause
