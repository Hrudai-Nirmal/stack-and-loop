"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("stack-loop-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-grid size-9 place-items-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)] text-[var(--accent-2)] transition hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-line)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={17} aria-hidden />
      ) : (
        <Moon size={17} aria-hidden />
      )}
    </button>
  );
}
