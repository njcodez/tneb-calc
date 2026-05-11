"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;

  language: "en" | "ta";
  setLanguage: (value: "en" | "ta") => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}: Props) {
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 top-3 z-50 flex w-[95%] max-w-[720px] -translate-x-1/2 items-center justify-between rounded-[2rem] border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-2xl md:w-auto md:justify-center md:gap-5 md:px-6 md:py-4">
      {/* LOGO */}

      <Link
        href="/"
        className="mr-2 text-base md:text-lg font-black text-[#FFD700]"
      >
        ⚡ TNEB
      </Link>

      {/* LINKS */}

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={`transition ${
            pathname === "/"
              ? "font-bold text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          Home
        </Link>

        <Link
          href="/slabs"
          className={`transition ${
            pathname === "/slabs"
              ? "font-bold text-[#FFD700]"
              : "text-white/60 hover:text-white"
          }`}
        >
          Slabs
        </Link>
      </div>

      {/* DIVIDER */}

      <div className="h-6 w-px bg-white/10" />

      {/* TOGGLES */}

      <div className="flex items-center gap-1 md:gap-2">
        <LanguageToggle
          language={language}
          setLanguage={setLanguage}
        />

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </nav>
  );
}