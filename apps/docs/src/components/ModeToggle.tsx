"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </div>
  );
}
