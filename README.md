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
| Gemini | Assistance in defining the data model with admin-approved genre suggestions, structuring the README, and initial HTML/CSS mockup layout |

Details per stage: see the ai-log/ folder.
## How to run
Open index.html in any modern web browser. No build step, no server required.
## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
