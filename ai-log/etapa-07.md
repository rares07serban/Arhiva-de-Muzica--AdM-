# Stage 7: AI log

## Tools
- Gemini

## Conversations
- Discuție despre construirea unui formular controlat în React, validarea datelor, operații CRUD asincrone (POST, PATCH, DELETE) și configurarea reperelor pentru testarea automată.

## Key requests

### 1. Formular controlat și validare
- Asked: Cum implementez o componentă `PiesaForm` cu stare controlată, validare client-side și protecție la dublu-click.
- Got: Componenta `PiesaForm.jsx` folosind `useState` pentru câmpurile formularului (`title`, `genre`, `audioFormat`), funcția `valideaza()` care verifică titlul gol și limita de 100 de caractere, și starea `trimite` care dezactivează butonul pe durata cererii.
- Changed or rejected: Am păstrat câmpurile temei proprii (`genre` și `audioFormat`) aliniate cu modelul din `db.json`.

### 2. Persistența CRUD și testarea automată
- Asked: Cum leg adăugarea, bifarea și ștergerea de API-ul `json-server` și cum pregătesc elementele pentru testarea automată.
- Got: Extinderea `api.js` cu funcția comună `request` (`POST`, `PATCH`, `DELETE`), actualizarea `App.jsx` astfel încât state-ul să se modifice abia după răspunsul serverului, crearea `tw.json` în rădăcină și adăugarea atributelor `data-testid`.
- Changed or rejected: În `handleAdd` am lăsat erorile să se propage înapoi în `PiesaForm` pentru a fi afișate lângă câmpuri fără a șterge textul introdus.

## What I learned / what did not work
Am înțeles importanța fluxului „întâi serverul, apoi state-ul” astfel încât ID-urile să fie generate exclusiv de backend, iar interfața să reflecte starea reală salvată. De asemenea, am învățat cum funcționează atributele `data-testid` și `aria-invalid` pentru accesibilitate și testare automată.