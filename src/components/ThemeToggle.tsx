import { signal, effect } from "@preact/signals";
import { MoonStar, Sun } from "lucide-preact";

const theme = signal(localStorage.getItem("theme") ?? "light");

export default function ThemeToggle() {
  const handleClick = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  effect(() => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme.value);
  });

  return (
    <button
      onClick={handleClick}
      className="p-2 border-b-[1px] border-b-transparent hover:border-b-[var(--primary)]"
    >
      <span class="sr-only">dark theme toggle</span>
      {theme.value === "light" ? <MoonStar /> : <Sun />}
    </button>
  );
}
