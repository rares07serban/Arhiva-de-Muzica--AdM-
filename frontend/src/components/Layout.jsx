import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>Arhiva de Muzică</span>
          <div className={styles.actions}>
            <nav className={styles.nav} data-testid="nav">
              <NavLink to="/" end className={navClass}>
                Piese
              </NavLink>
              <NavLink to="/despre" className={navClass}>
                Despre
              </NavLink>
            </nav>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={handleTema}
              aria-pressed={tema === "dark"}
            >
              {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        Arhiva de Muzică · Proiect Tehnologii Web
      </footer>
    </>
  );
}