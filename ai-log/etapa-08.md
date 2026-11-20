# Stage 8: AI log

## Tools
- Gemini

## Conversations
- Discuție despre configurarea rutării client-side cu React Router (`BrowserRouter`, `Routes`, `Route`, `Outlet`, `NavLink`, `useParams`) și modularizarea stilurilor CSS folosind CSS Modules.

## Key requests

### 1. Configurarea rutelor și a paginii de detaliu
- Asked: Cum împart aplicația în pagini multiple (listă, detaliu `/piese/:id`, despre, 404) fără reîncărcarea paginii.
- Got: Configurarea `BrowserRouter` în `main.jsx`, definirea rutelor în `App.jsx` în jurul componentei `Layout` cu `<Outlet />`, și implementarea `PiesaDetaliuPage.jsx` care citește `id` cu `useParams()` și apelează `fetchPiesa(id)` într-un `useEffect` dependent de `[id]`.
- Changed or rejected: Am adăugat câmpurile suplimentare din modelul de date (`category`, `user`, `isFavorite`) în pagina de detaliu pentru a oferi informații mai bogate decât cardul din listă.

### 2. Migrarea stilurilor către CSS Modules
- Asked: Cum reorganizez `App.css` astfel încât fiecare componentă și pagină să aibă propriul fișier `.module.css`.
- Got: Redenumirea `App.css` în `index.css` cu variabilele și clasele globale (`.panel`, `.btn`, `.btn-danger`, `.badge`, `.error`) și crearea modulelor CSS dedicate pentru `Layout`, `PiesaCard`, `PiesaList`, `PiesaForm`, `PiesePage` și `PiesaDetaliuPage`.
- Changed or rejected: Am păstrat selectorii pentru tema luminoasă și întunecată în `index.css` și am mutat butonul de comutare a temei în `Layout.jsx`.

## What I learned / what did not work
Am înțeles diferența dintre navigarea clasică (`<a href>`) și navigarea SPA cu `<Link>` și `<NavLink>`, precum și rolul atributului `end` pentru ruta rădăcină `/`. De asemenea, am observat cum CSS Modules generează nume unice de clase la compilare, eliminând riscul conflictelor între componente, și am păstrat toate atributele `data-testid` necesare verificării automate.