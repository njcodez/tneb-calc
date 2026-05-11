interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}: Props) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="glass rounded-full px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}