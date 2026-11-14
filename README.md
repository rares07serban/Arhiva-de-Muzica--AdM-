# Arhiva de Muzica
Proiect TW

A web-based audio platform where music creators and listeners can manage, discover, and organize audio tracks by genre. Users can also suggest new musical genres for admin approval, expanding the available taxonomy for track descriptions and playlists.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| title | text | required, max 100 chars (track title) |
| isFavorite | boolean | toggled from the list, default false (saved to favorites) |
| genre | fixed values | Electronic, Hip-Hop, Rock, Jazz, Ambient (expandable via user suggestions approved by admin) |
| category | relation | Uploads, Playlists, Saved Tracks (from week 10) |
| user | relation | the owner/creator of the track (from week 11) |
| audioFormat | text/file | optional: MP3, WAV, FLAC (uploaded audio file) |

Sample data used across all stages:
1. Back From Eternity, active, Electronic
2. Eleven, done, Ambient
3. Pet, active, Rock

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Assistance in defining data model, initial mockup, array manipulation logic, and Stage 2 verification |

Details per stage: see the `ai-log/` folder.

## How to run

cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 2: data logic

Plain JavaScript, no DOM. `muzica.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
PiesaList receives the whole array and renders one card per item
PiesaCard receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.
```bash
npm run api # terminal 1, http://localhost:3001
npm run dev # terminal 2, http://localhost:5173

## Stage 7: form and validation
Tracks can be added from the page. The form is controlled and validated,
and every change (add, toggle, delete) goes to the API before it shows up
in the list.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | [frontend/src/App.jsx#L41](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L41) | read |
| S5-R2 | toggling changes state and card look | [frontend/src/App.jsx#L44-L48](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L44-L48), [frontend/src/components/PiesaCard.jsx#L9-L11](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaCard.jsx#L9-L11) | click a checkbox |
| S5-R3 | delete removes the item | [frontend/src/App.jsx#L50-L52](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L50-L52), [frontend/src/components/PiesaCard.jsx#L32-L34](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaCard.jsx#L32-L34) | click Delete |
| S5-R4 | header counter derived, not in state | [frontend/src/App.jsx#L60](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L60) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [frontend/src/App.jsx#L44-L52](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L44-L52) | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [frontend/src/App.jsx#L54-L58](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.jsx#L54-L58), [frontend/src/App.css#L1-L47](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/App.css#L1-L47) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md#stage-5-local-state-and-events](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/README.md#stage-5-local-state-and-events), [ai-log/etapa-05.md](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [fc18e4ac5ffadef0d56cbea134306b88a5fac2ff](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/commit/<COMMIT_HASH>) | commit history |
| S6 | commit "Stage 6: checklist" pushed | [e76ac1c1289b235c9a06b2c98f14474ba22b1514](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/commit/<COMMIT_HASH>) | commit history |