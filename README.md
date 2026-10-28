# AI Forge

A personal, local-first 12-week engineering workspace. No installation of app dependencies, login, database, API key, live model, telemetry, or external assets.

## Run

With Node.js installed, double-click **Start AI Forge.cmd** on Windows, or run `npm start` in this folder. Open **http://localhost:4173** and keep the terminal open. The server listens only on your computer.

`npm run build` produces a portable static site in `dist/`. `npm test` checks roadmap coverage, calculations, rendering, check-in generation, backup validation, and safe text rendering. No dependency installation is required. The source files themselves are the runnable local build.

Keep using the same browser and address (`localhost:4173`) for the same saved workspace. localStorage belongs to a browser profile and origin. Use **Export backup** and **Restore backup** to move progress or protect it before clearing browser data. Import merges records; a backup replaces matching records, keeping unrelated records. No data is uploaded. This is a personal tool, not encrypted storage.

## Included

- Dashboard with next unfinished week/day, tasks, overall progress, six levels, logged time, milestones and activity.
- 12 weeks, 84 days and 226 task records extracted from the corrected PDF; weekly gates and reduced-scope fallbacks.
- Each task has completion, repo/commit, notes, minutes, demo/screenshot link, test/metric, blocker, learning, mentor feedback and next action.
- Separate weekly self-assessment with evidence and mentor review. A gate requires evidence text before it can be marked passed. It does not automatically verify your work.
- Three project pages with exact PDF briefs, minimum releases, evaluation contracts, editable architecture and evidence, related-week progress and screenshot/demo placeholders.
- Editable daily and weekly mentor check-ins generated entirely locally, copied or downloaded for ChatGPT.
- PDF source links and supporting workbook guidance. No badges or achievements.

## Content fidelity

`roadmap.pdf` is the unchanged 42-page source. `data.js` holds its extracted content. The daily plan lives on pages 6–29; project briefs on pages 30–32. PDF line wrapping has been normalized; tasks remain in source order, including optional scope and recurring verification/logging work. Day 7 has one review task. The app excludes the PDF's achievement awards per the product requirements.

The six level names are product navigation layered over the roadmap: week 1 AI Foundations; weeks 2–3 Backend AI Developer; weeks 4–6 RAG Engineer; weeks 7–9 Agent Engineer; weeks 10–11 Production AI Engineer; week 12 Job Ready. The current position is the earliest unfinished task; levels reflect that position, while gate passage remains a separate evidence-based self-assessment. Project progress counts related roadmap tasks, with separate self-reviewed minimum-release criteria.

Source project authentication requirements refer to the portfolio projects you will build; AI Forge itself has no login.

