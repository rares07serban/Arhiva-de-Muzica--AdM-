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

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/) | open folder |
| S4-R2 | card receives data through props | [PiesaCard.jsx#L1-L26](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaCard.jsx#L1-L26) | read |
| S4-R3 | map + key={id}, no console warnings | [PiesaList.jsx#L10-L12](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaList.jsx#L10-L12) | F12, Console |
| S4-R4 | message for empty list | [PiesaList.jsx#L4-L6](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaList.jsx#L4-L6) | set array to [] |
| S4-R5 | state changes the card look | [PiesaCard.jsx#L7](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/frontend/src/components/PiesaCard.jsx#L7) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md#stage-4-components](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/README.md#stage-4-components), [ai-log/etapa-04.md](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [Commit link](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/commit/<COMMIT_HASH>) | commit history |