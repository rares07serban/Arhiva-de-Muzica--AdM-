const piese = [
  {
    id: 1,
    title: "Back From Eternity",
    done: false,
    isFavorite: true,
    genre: "Electronic",
    category: "Uploads",
    user: "Creator demo",
    audioFormat: "MP3"
  },
  {
    id: 2,
    title: "Eleven",
    done: true,
    isFavorite: false,
    genre: "Ambient",
    category: "Playlists",
    user: "Creator demo",
    audioFormat: "WAV"
  },
  {
    id: 3,
    title: "Pet",
    done: false,
    isFavorite: false,
    genre: "Rock",
    category: "Saved Tracks",
    user: "Creator demo",
    audioFormat: "FLAC"
  }
];

const GENURI = [
  "Electronic",
  "Hip-Hop",
  "Rock",
  "Jazz",
  "Ambient"
];

// Pasul 3: Listarea titlurilor
function listeazaTitluri(lista) {
  return lista.map((p) => p.title);
}

// Pasul 4: Numărarea elementelor active (done: false)
function numaraActive(lista) {
  return lista.filter((p) => !p.done).length;
}

// Pasul 5: Căutarea după titlu (case-insensitive)
function cautaDupaTitlu(lista, text) {
  const cautat = text.toLowerCase();
  return lista.filter((p) => p.title.toLowerCase().includes(cautat));
}

// Pasul 6: Generarea id-ului unic cu reduce
function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

// Pasul 6: Adăugarea cu validare
function adaugaPiesa(lista, titlu, gen = "Rock") {
  const titluCurat = titlu.trim();

  if (!titluCurat) {
    console.log("Titlul nu poate fi gol!");
    return lista;
  }

  if (!GENURI.includes(gen)) {
    console.log("Gen invalid:", gen);
    return lista;
  }

  const piesaNoua = {
    id: nextId(lista),
    title: titluCurat,
    done: false,
    isFavorite: false,
    genre: gen,
    category: "Uploads",
    user: "Creator demo",
    audioFormat: "MP3"
  };

  return [...lista, piesaNoua];
}

// Pasul 7: Comutarea stării (done)
function comutaStare(lista, id) {
  return lista.map((p) => (p.id === id ? { ...p, done: !p.done } : p));
}

// Pasul 7: Ștergerea elementului
function stergePiesa(lista, id) {
  return lista.filter((p) => p.id !== id);
}

// Pasul 8: Testele din consolă (grupate pe secțiuni)
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(piese).join(", "));
console.log("Active:", numaraActive(piese));
console.log("Căutare 'eternity':", listeazaTitluri(cautaDupaTitlu(piese, "eternity")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaPiesa(piese, "Night Drive", "Electronic");
console.log("Lista nouă:", lista.length, "piese");
console.log("Originalul a ramas cu:", piese.length, "piese");

console.log("--- Modificare şi ştergere ---");
lista = comutaStare(lista, 1);
console.log("După bifarea id 1, active:", numaraActive(lista));
lista = stergePiesa(lista, 3);
console.log("După ştergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaPiesa(lista, "");
adaugaPiesa(lista, "Piesa Noua", "invalid_genre");