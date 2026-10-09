
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

function listeazaTitluri(lista) {
  return lista.map(function (piesa) {
    return piesa.title;
  });
}

function numaraActive(lista) {
  return lista.filter(function (piesa) {
    return piesa.done === false;
  }).length;
}

function cautaDupaTitlu(lista, text) {
  const cautare = text.toLowerCase();

  return lista.filter(function (piesa) {
    return piesa.title.toLowerCase().includes(cautare);
  });
}

function adaugaPiesa(lista, titlu, gen) {
  const titluValidat = titlu.trim();

  if (titluValidat === "") {
    console.log("Eroare: titlul nu poate fi gol.");
    return lista;
  }

  if (!GENURI.includes(gen)) {
    console.log("Eroare: genul muzical nu este permis.");
    return lista;
  }

  const idMaxim = lista.reduce(function (maxim, piesa) {
    return Math.max(maxim, piesa.id);
  }, 0);

  const piesaNoua = {
    id: idMaxim + 1,
    title: titluValidat,
    done: false,
    isFavorite: false,
    genre: gen,
    category: "Uploads",
    user: "Creator demo",
    audioFormat: "MP3"
  };

  return [...lista, piesaNoua];
}

function schimbaStarea(lista, id) {
  return lista.map(function (piesa) {
    if (piesa.id === id) {
      return { ...piesa, done: !piesa.done };
    }

    return piesa;
  });
}

function stergePiesa(lista, id) {
  return lista.filter(function (piesa) {
    return piesa.id !== id;
  });
}

console.group("Citire");

console.log("Date inițiale:", piese);
console.log("Titluri:", listeazaTitluri(piese));
console.log("Piese active:", numaraActive(piese));
console.log("Căutare după titlu:", cautaDupaTitlu(piese, "pet"));

console.groupEnd();

console.group("Adăugare");

const pieseExtinse = adaugaPiesa(piese, "Night Drive", "Electronic");

console.log("Lista după adăugare:", pieseExtinse);
console.log("Număr inițial:", piese.length);
console.log("Număr după adăugare:", pieseExtinse.length);
console.log("Lista inițială a rămas neschimbată:", piese.length === 3);

console.groupEnd();

console.group("Modificare și ștergere");

const pieseModificate = schimbaStarea(piese, 1);

console.log("Stare inițială:", piese[0].done);
console.log("Stare modificată:", pieseModificate[0].done);

const pieseSterse = stergePiesa(piese, 2);

console.log("Număr înainte de ștergere:", piese.length);
console.log("Număr după ștergere:", pieseSterse.length);
console.log("Lista după ștergere:", pieseSterse);

console.groupEnd();

console.group("Validare");

const rezultatTitluInvalid = adaugaPiesa(piese, "   ", "Rock");
console.log("Titlu gol respins:", rezultatTitluInvalid === piese);

const rezultatGenInvalid = adaugaPiesa(piese, "Test", "Metal");
console.log("Gen invalid respins:", rezultatGenInvalid === piese);

console.groupEnd();