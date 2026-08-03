import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      aria-label="Mavzuni almashtirish"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink dark:text-primary hover:border-primary transition-colors focus-ring ${className}`}
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
