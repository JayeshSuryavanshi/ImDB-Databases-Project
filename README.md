# IMDb Databases Project

A React web application for exploring an IMDb-style movies and TV database. The
app provides a simple UI for running SQL queries against a backend database API
and for browsing curated views such as top-rated movies, top-rated TV series,
top directors, and titles by genre.

This is the front-end client for a course database project (CSE4/560
"Triangulation" milestone). The accompanying milestone report is included as
`CSE4_560_Milestone2_Triangulation.pdf`.

## Overview

The application is a single-page React app built with Create React App and
Material UI. It talks to a separate HTTP backend that accepts SQL queries and
returns column/row data, which the app renders in paginated tables.

The backend endpoint is currently hard-coded in `src/App.js` as a `POST` to
`http://34.229.0.41:5000/query` with a JSON body of the form
`{ "query": "<SQL>" }`, and it expects a JSON response of the form
`{ "columns": [...], "rows": [...] }`. To run against your own backend, update
that URL in `src/App.js`.

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
- [Create React App](https://create-react-app.dev/) / `react-scripts`
- [Material UI (MUI) v5](https://mui.com/) and Material UI v4 for UI components
- [`react-table-6`](https://www.npmjs.com/package/react-table-6) for rendering
  result tables
- Browser `fetch` for backend communication
- A backend SQL query API (not included in this repository)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS release is recommended)
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

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page reloads when you make edits, and lint errors appear in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder, minified and ready to
deploy.

### `npm run eject`

Removes the single build dependency and copies all configuration into the
project. **This is a one-way operation.**

## Project Structure

```
ImDB-Databases-Project/
├── public/                  # Static assets and HTML template
├── src/
│   ├── App.js               # Main component: query UI and backend calls
│   ├── TableComponent.js    # Renders query results in a paginated table
│   ├── index.js             # React entry point
│   ├── App.css / index.css  # Styles
│   └── ...                  # CRA boilerplate (tests, web vitals, etc.)
├── package.json
└── CSE4_560_Milestone2_Triangulation.pdf  # Project milestone report
```

## Notes

- The backend API URL is hard-coded in `src/App.js`; change it to point at your
  own database service.
- This client builds raw SQL strings from user input for the curated views;
  it is intended for use as a course project against a trusted internal
  backend, not as a production application.

## License

No license file is currently provided. Please contact the repository owner
before reusing this code.
