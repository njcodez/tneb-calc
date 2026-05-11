"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/shared/Navbar";

import HeroSection from "@/components/hero/HeroSection";

import ComparisonChart from "@/components/results/ComparisonChart";

import { translations } from "@/data/translations";

import { calculateBill } from "@/lib/calculateBill";

export default function Home() {
  /* THEME */

  const [darkMode, setDarkMode] = useState(true);

  /* LANGUAGE */

  const [language, setLanguage] = useState<"en" | "ta">(
    "en"
  );

  /* INPUT */

  const [units, setUnits] = useState("");

  /* RESULT */

  const [result, setResult] = useState<{
    oldBill: number;
    newBill: number;
    savings: number;
  } | null>(null);
const [animationKey, setAnimationKey] = useState(0);
  /* DARK MODE EFFECT */

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  /* CURRENT LANGUAGE */

  const currentText = translations[language];

  /* CALCULATE */

  const handleCalculate = () => {
    const numericUnits = Number(units);

    if (!numericUnits || numericUnits <= 0) return;

    const calculated = calculateBill(numericUnits);

    setResult(calculated);
    setAnimationKey((prev) => prev + 1);
    /* AUTO SCROLL TO RESULTS */

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="background-flow" />
      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      {/* HERO */}

      <HeroSection
        units={units}
        setUnits={setUnits}
        onCalculate={handleCalculate}
        text={currentText}
      />

      {/* RESULTS */}

      {result && (
        <ComparisonChart
          oldBill={result.oldBill}
          newBill={result.newBill}
          savings={result.savings}
          savingsText={currentText.savings}
          language={language}
          key={animationKey}
        />
      )}
    </main>
  );
}