# manual-rebuild.ps1
# Run this to trigger an on-demand site rebuild outside the Saturday schedule.
# Usage: .\scripts\manual-rebuild.ps1

Write-Host "Starting manual site rebuild..." -ForegroundColor Cyan
Write-Host ""

# Just call the weekly rebuild script
& "$PSScriptRoot\weekly-rebuild.ps1"
