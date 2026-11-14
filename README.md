# TaskFlow — Personal Task Manager

A responsive Next.js + TypeScript task manager with local-first persistence, calendar views, analytics, search, filters, reminders, and light/dark themes.

## Requirements
- Node.js 20.9+
- npm 10+

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the detected Next.js defaults and deploy. No environment variables are required.

## Data and privacy
Tasks, theme preference, and settings are stored in this browser's `localStorage`. No account or server database is used. Data is specific to each browser/device. Export a JSON backup from Settings before clearing browser data or moving devices.

## Features
- Dashboard KPIs, completion progress, weekly activity and priority breakdown.
- Create, edit, complete/reopen and delete tasks (with confirmation).
- Priority, category, start/due dates, reminders, descriptions.
- Search, status/priority/category/date filters and sorting.
- Month, week and day calendar with clickable dates and task creation.
- Analytics for completion, productivity trends and priority distribution.
- Light/dark mode, sample data reset, JSON export/import, clear all tasks.
- Responsive sidebar and mobile navigation.

## Notes
Browser notifications require notification permission and a supported browser. Reminders are checked while the app is open; this is not a background push-notification service. Calendar week starts Monday. Analytics are calculated from the locally stored task history.
