# weekly-rebuild.ps1
# Runs every Saturday at 5:00 AM AST via Windows Task Scheduler.
# Invokes Claude Code to perform the weekly site redesign.

$ErrorActionPreference = "Stop"

# Configuration
$ProjectDir = "C:\Users\edwar\Claude\roske-ai-website"
$LogDir = Join-Path $ProjectDir "logs"
$Date = Get-Date -Format "yyyy-MM-dd"
$LogFile = Join-Path $LogDir "weekly-rebuild-$Date.log"

# Ensure log directory exists
if (-not (Test-Path $LogDir)) {
    New-Item -ItemType Directory -Path $LogDir -Force | Out-Null
}

# Log start
$StartTime = Get-Date
"[$StartTime] Weekly rebuild starting..." | Tee-Object -FilePath $LogFile -Append

# Change to project directory
Set-Location $ProjectDir

# Load environment variables from .env if it exists
$EnvFile = Join-Path $ProjectDir ".env"
if (Test-Path $EnvFile) {
    Get-Content $EnvFile | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
            $key = $matches[1].Trim()
            $value = $matches[2].Trim()
            [Environment]::SetEnvironmentVariable($key, $value, "Process")
        }
    }
    "[$([DateTime]::Now)] Loaded environment variables from .env" | Tee-Object -FilePath $LogFile -Append
}

# Read the weekly rebuild prompt
$PromptFile = Join-Path $ProjectDir "scripts\weekly-rebuild-prompt.md"
if (-not (Test-Path $PromptFile)) {
    "[$([DateTime]::Now)] ERROR: weekly-rebuild-prompt.md not found at $PromptFile" | Tee-Object -FilePath $LogFile -Append
    exit 1
}

$Prompt = Get-Content $PromptFile -Raw

# Run Claude Code with the weekly rebuild prompt
"[$([DateTime]::Now)] Invoking Claude Code..." | Tee-Object -FilePath $LogFile -Append

try {
    claude --print "$Prompt" 2>&1 | Tee-Object -FilePath $LogFile -Append
    $ExitCode = $LASTEXITCODE
} catch {
    "[$([DateTime]::Now)] ERROR: Claude Code invocation failed: $_" | Tee-Object -FilePath $LogFile -Append
    exit 1
}

# Log completion
$EndTime = Get-Date
$Duration = $EndTime - $StartTime
"[$EndTime] Weekly rebuild completed in $($Duration.TotalMinutes.ToString('F1')) minutes. Exit code: $ExitCode" | Tee-Object -FilePath $LogFile -Append

exit $ExitCode
