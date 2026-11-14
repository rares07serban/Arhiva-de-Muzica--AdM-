import { useState } from "react";

const GENURI = ["Electronic", "Hip-Hop", "Rock", "Jazz", "Ambient"];
const FORMATE = ["MP3", "WAV", "FLAC"];
const TITLU_MAX = 100;

export default function PiesaForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Electronic");
  const [audioFormat, setAudioFormat] = useState("MP3");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const titluCurat = title.trim();
    if (titluCurat === "") {
      return "Titlul piesei este obligatoriu.";
    }
    if (titluCurat.length > TITLU_MAX) {
      return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    }
    if (!GENURI.includes(genre)) {
      return "Selectează un gen muzical valid.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({
        title: title.trim(),
        done: false,
        isFavorite: false,
        genre,
        category: "Uploads",
        user: "Creator demo",
        audioFormat
      });
      setTitle("");
      setGenre("Electronic");
      setAudioFormat("MP3");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Titlu
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Back From Eternity"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Gen muzical
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          data-testid="form-genre"
        >
          {GENURI.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>

      <label>
        Format audio
        <select
          value={audioFormat}
          onChange={(e) => setAudioFormat(e.target.value)}
          data-testid="form-audioFormat"
        >
          {FORMATE.map((fmt) => (
            <option key={fmt} value={fmt}>
              {fmt}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă piesa"}
      </button>
    </form>
  );
}