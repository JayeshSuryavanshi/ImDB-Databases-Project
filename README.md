# IMDb Databases Project

A React web application for exploring an IMDb-style movies and TV database. The
app provides a simple UI for running SQL queries against a backend database API
and for browsing curated views such as top-rated movies, top-rated TV series,
top directors, and titles by genre.

This is the front-end client for a course database project (CSE4/560
"Triangulation" milestone). The accompanying milestone report is included as
`CSE4_560_Milestone2_Triangulation.pdf`.

## Overview

The application is a single-page React app built with Vite and Material UI. It
talks to a separate HTTP backend that accepts SQL queries and returns
column/row data, which the app renders in paginated tables.

The backend endpoint is currently hard-coded in `src/App.jsx` as a `POST` to
`http://34.229.0.41:5000/query` with a JSON body of the form
`{ "query": "<SQL>" }`, and it expects a JSON response of the form
`{ "columns": [...], "rows": [...] }`. To run against your own backend, update
that URL in `src/App.jsx`.

## Features

- **Free-form SQL query** - enter any SQL query in a text box and view the
  results in a table.
- **Top N movies** - list the highest-rated movies (`title_type = 'movie'`,
  `num_votes > 1000`).
- **Top N TV series** - list the highest-rated TV series
  (`title_type = 'tvSeries'`, `num_votes > 1000`).
- **Top N directors** - list directors ranked by the average rating of their
  titles.
- **Titles by genre** - pick a genre from a dropdown and list matching titles.
- **Paginated results** - all result sets are shown in a paginated, resizable
  table.

## Tech Stack

- [React 18](https://react.dev/) (class components)
- [Vite](https://vite.dev/) for the dev server and production build
- [Vitest](https://vitest.dev/) and React Testing Library for tests
- [Material UI (MUI) v5](https://mui.com/) and Material UI v4 for UI components
- [`react-table-6`](https://www.npmjs.com/package/react-table-6) for rendering
  result tables
- Browser `fetch` for backend communication
- A backend SQL query API (not included in this repository)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.22.2+, 24.15+ or 26+ (Vite 8, Vitest 5 and
  jsdom 30 need a recent release)
- npm (bundled with Node.js)
- Access to a running backend query API (see [Overview](#overview))

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/JayeshSuryavanshi/ImDB-Databases-Project.git
cd ImDB-Databases-Project
npm install
```

## Available Scripts

In the project directory you can run:

### `npm run dev`

Starts the Vite dev server at [http://localhost:5173](http://localhost:5173).
Edits show up in the browser straight away.

### `npm run build`

Builds the app for production into the `dist` folder, minified and ready to
deploy.

### `npm run preview`

Serves the production build from `dist` at
[http://localhost:4173](http://localhost:4173) so you can check it before
deploying. Run `npm run build` first.

### `npm test`

Runs the tests once with Vitest in a jsdom environment. Use
`npm run test:watch` to keep Vitest running and re-test on every change.

## Project Structure

```
ImDB-Databases-Project/
├── index.html               # HTML entry point, loads src/index.jsx
├── public/                  # Static assets served as-is (favicon, manifest)
├── src/
│   ├── App.jsx              # Main component: query UI and backend calls
│   ├── TableComponent.jsx   # Renders query results in a paginated table
│   ├── index.jsx            # React entry point
│   ├── App.test.jsx         # Smoke test for the query UI
│   ├── App.css / index.css  # Styles
│   └── ...                  # Test setup and web vitals helpers
├── vite.config.mjs          # Vite and Vitest configuration
├── package.json
└── CSE4_560_Milestone2_Triangulation.pdf  # Project milestone report
```

## Notes

- The project used Create React App (`react-scripts`) until September 2026.
  CRA is deprecated and pinned old build dependencies with known
  vulnerabilities, so the build now runs on Vite. `npm start` became
  `npm run dev`, the dev server moved from port 3000 to 5173, and the build
  output moved from `build/` to `dist/`.
- The app reads no environment variables. If you add one, Vite only exposes
  names starting with `VITE_`, read through `import.meta.env.VITE_NAME`.
  CRA's `process.env.REACT_APP_*` does not work under Vite.
- `package.json` has `overrides` for `@material-ui/core` and `react-table-6`.
  Both libraries declare peer ranges that stop before React 18 but run here on
  React 18, as they did before the migration. Without the overrides npm
  refuses to install them (ERESOLVE).
- The backend API URL is hard-coded in `src/App.jsx`; change it to point at
  your own database service.
- This client builds raw SQL strings from user input for the curated views;
  it is intended for use as a course project against a trusted internal
  backend, not as a production application.

## License

No license file is currently provided. Please contact the repository owner
before reusing this code.
