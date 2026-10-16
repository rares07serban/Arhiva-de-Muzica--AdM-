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

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L42-L57](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/frontend/src/App.jsx#L42-L57) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L38](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/frontend/src/App.jsx#L1-L38) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md#stage-3-vite-and-react-project](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/README.md#stage-3-vite-and-react-project), [ai-log/etapa-03.md](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/52d1adfdaf86b4ca1a70aded2289b49553f00abd/ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [Commit link](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/commit/52d1adfdaf86b4ca1a70aded2289b49553f00abd) | commit history |