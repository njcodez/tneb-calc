interface Props {
  language: "en" | "ta";
  setLanguage: (value: "en" | "ta") => void;
}

export default function LanguageToggle({
  language,
  setLanguage,
}: Props) {
  return (
    <button
      onClick={() =>
        setLanguage(language === "en" ? "ta" : "en")
      }
      className="glass rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
    >
      {language === "en" ? "தமிழ்" : "EN"}
    </button>
  );
}