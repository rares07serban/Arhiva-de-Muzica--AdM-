# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Discuție despre cum se împarte interfața statică în componente React independente și cum se folosesc `props` pentru a transmite date din părinte în copil.

## Key requests

### 1. Ierarhia componentelor și folosirea props
- Asked: Cum să transform lista brută (JSON) din App.jsx într-o componentă separată `PiesaList` și carduri individuale `PiesaCard`.
- Got: Am primit structura celor două fișiere în folderul `src/components/`, unde `PiesaList` iterează lista cu `map`, iar `PiesaCard` primește obiectul `piesa` prin atributul props.
- Changed or rejected: Am păstrat clasele CSS și structura semantică din Etapa 1 exact la fel, asigurându-mă că badge-urile pentru genul muzical (ex: Rock, Electronic) primesc culorile setate corect.

### 2. Randarea condiționată și atributul key
- Asked: Cum se rezolvă avertismentul React legat de `key` din consolă și cum afișez un mesaj specific dacă lista este goală.
- Got: Instrucțiuni pentru a face un "early return" cu un text specific dacă array-ul de piese este gol, și adăugarea `key={piesa.id}` direct pe componenta `<PiesaCard>` în funcția `map`.
- Changed or rejected: Am testat golirea array-ului de piese local și am confirmat că mesajul "Nu există nicio piesă în arhivă." apare corect, așa cum a fost setat în mockup.

## What I learned / what did not work
Am învățat că React folosește atributul obligatoriu `key` pentru a urmări cu precizie ce elemente din listă se modifică, se adaugă sau se șterg. De asemenea, am exersat refolosirea codului: în loc să scriu HTML repetitiv de 3 ori, folosesc o singură componentă (PiesaCard) instanțiată de mai multe ori prin maparea unui array.