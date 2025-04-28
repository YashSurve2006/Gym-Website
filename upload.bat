@echo off

REM --- Find the Git repository by searching for .git folder in parent directories ---
setlocal enabledelayedexpansion
set "folder=%cd%"
:search_git
if exist "!folder!\.git" (
    echo ✅ Git repository found at !folder!
    cd /d !folder!
    goto start_upload
)
if "!folder!" == "C:\" (
    echo ❌ ERROR: Git repository not found!
    echo ❌ Please run this inside your project folder.
    pause
    exit /b
)
set "folder=!folder!\.."
goto search_git

:start_upload
REM --- Pulling latest changes ---
echo Pulling latest changes from GitHub...
git pull origin main --allow-unrelated-histories

REM --- Adding all files ---
echo.
echo Adding all files...
git add .

REM --- Committing changes ---
echo.
echo Committing changes...
git commit -m "Updated Gym Website"

REM --- Pushing to GitHub ---
echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo 🎉 Done! Your website is updated on GitHub.
pause
