"use client";

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

  function setNextTheme(checked: boolean) {
    const next = checked ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("stack-loop-theme", next);
  }

  return (
    <label
      className="theme-switch"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(event) => setNextTheme(event.target.checked)}
        suppressHydrationWarning
      />
      <span className="theme-switch__slider" aria-hidden>
        <span className="theme-switch__orb">
          <svg className="theme-switch__moon-dot theme-switch__moon-dot--one" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="theme-switch__moon-dot theme-switch__moon-dot--two" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="theme-switch__moon-dot theme-switch__moon-dot--three" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <span className="theme-switch__ray theme-switch__ray--one" />
          <span className="theme-switch__ray theme-switch__ray--two" />
          <span className="theme-switch__ray theme-switch__ray--three" />
        </span>
        <span className="theme-switch__cloud theme-switch__cloud--one" />
        <span className="theme-switch__cloud theme-switch__cloud--two" />
        <span className="theme-switch__cloud theme-switch__cloud--three" />
        <span className="theme-switch__stars">
          <svg className="theme-switch__star theme-switch__star--one" viewBox="0 0 20 20">
            <path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z" />
          </svg>
          <svg className="theme-switch__star theme-switch__star--two" viewBox="0 0 20 20">
            <path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z" />
          </svg>
          <svg className="theme-switch__star theme-switch__star--three" viewBox="0 0 20 20">
            <path d="M0 10C10 10 10 10 0 10C10 10 10 10 10 20C10 10 10 10 20 10C10 10 10 10 10 0C10 10 10 10 0 10Z" />
          </svg>
        </span>
      </span>
    </label>
  );
}
