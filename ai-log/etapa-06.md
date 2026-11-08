# Stage 6: AI log

## Tools
- Gemini

## Conversations
- Discuție despre migrarea datelor statice către un mock API (json-server) și gestionarea cererilor asincrone cu `useEffect`.

## Key requests

### 1. Extragerea datelor într-un API extern
- Asked: Cum setez `json-server` pentru a servi datele.
- Got: Crearea fișierului `db.json` cu cheia `piese` și adăugarea scriptului `"api": "json-server --watch db.json --port 3001"` în `package.json`.
- Changed or rejected: Datele inițiale au fost extinse de la 3 la 5 piese pentru a oferi un context mai realist.

### 2. Implementarea fetching-ului și stărilor de încărcare
- Asked: Cum structurez cererea de date în `App.jsx` și cum tratez stările de încărcare/eroare.
- Got: Crearea fișierului `api.js` pentru a gestiona logica de fetch. În `App.jsx`, implementarea `useEffect` cu variabilă de `ignore` pentru curățare și 3 stări (`loading`, `error`, date). Randarea condiționată a listei.
- Changed or rejected: Mesajele de loading au fost personalizate ("Se încarcă arhiva...").

## What I learned / what did not work
Am înțeles cum să gestionez ciclul de viață al unei componente și de ce un efect trebuie să verifice un "flag" (`ignore`) înainte de a actualiza state-ul (prevenind actualizarea unei componente deja demontate). De asemenea, am învățat că `fetch` nu aruncă implicit o eroare la statusuri HTTP ca 404/500, necesitând o verificare explicită a `res.ok`.