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
| S2-R1 | JS file linked, logs on page load | [index.html#L145](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/index.html#L145) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [muzica.js#L1-L36](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/muzica.js#L1-L36) | read |
| S2-R3 | list, count, search, add, toggle, delete | [muzica.js#L46-L103](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/muzica.js#L46-L103) | console output |
| S2-R4 | add rejects empty name and invalid tag | [muzica.js#L122-L124](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/muzica.js#L122-L124) | last 2 console lines |
| S2-R5 | original array unchanged after add | [muzica.js#L113](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/muzica.js#L113) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md#stage-2-data-logic](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<COMMIT_HASH>/README.md#stage-2-data-logic), [ai-log/etapa-02.md](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/blob/<3025aff042735101cdc3c166e6e8a998bff6964c>/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit link](https://github.com/rares07serban/Arhiva-de-Muzica--AdM-/commit/<C3025aff042735101cdc3c166e6e8a998bff6964c>) | commit history |