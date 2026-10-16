\# Stage 3: AI log



\## Tools

\- Gemini



\## Conversations

\- Conversation on migrating the project to Vite and React, setting up JSX, and validating production build.



\## Key requests



\### 1. Vite initialization and asset cleanup

\- Asked: How to bootstrap the React template inside a dedicated `frontend/` folder and clean boilerplate assets.

\- Got: Step-by-step instructions for `npm create vite@latest`, moving legacy files into `mockup/`, and clearing Vite sample assets.

\- Changed or rejected: Preserved custom theme styling from `mockup/style.css` in `src/App.css` while switching to a 1-column layout for Stage 3.



\### 2. Component JSX and dynamic counters

\- Asked: How to adapt the application header and display raw JSON data in `App.jsx`.

\- Got: JSX structure using fragments `<>...</>`, replacing `class` with `className`, and computing active tracks dynamically via `.filter().length`.

\- Changed or rejected: Directly embedded the project data model items with matching properties (`title`, `done`, `genre`).



\## What I learned / what did not work

I learned how Vite handles modern ESM modules and Hot Module Replacement (HMR). I also practiced structuring JSX correctly without HTML comments or reserved JS keywords.

