# FemStudio PM Automation

Automatically pushes weekly FemStudio tasks to Google Calendar every Sunday at 6PM.

## What it does
- Creates a "FemStudio Tasks" calendar in Google Calendar
- Pushes that week's tasks as events at 7PM (your work block)
- Creates 7AM morning briefing events Mon–Fri
- Emails a weekly summary to john.f.adeniran@gmail.com

## Files
- `femstudio_pm_script.gs` — main Google Apps Script (paste into script.google.com)
- `tasks/task_bank.js` — task list by phase (edit this to update priorities)

## How to update tasks
1. Edit `tasks/task_bank.js` with new priorities
2. Copy updated tasks into the TASK_BANK section of `femstudio_pm_script.gs`
3. Commit and push to GitHub
4. Sync to Google Apps Script via Clasp (see Clasp setup below)

## Clasp setup (VS Code → Google Apps Script)
```bash
npm install -g @google/clasp
clasp login
clasp clone <your-script-id>
```

## Trigger schedule
Runs every Sunday 6–7PM CT automatically via Apps Script time trigger.
