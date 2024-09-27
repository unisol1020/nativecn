"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-2 z-50 w-full">
      <div
        className={cn(
          "container rounded-full flex flex-row justify-between h-16 max-w-screen-xl items-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500",
          scrolled && "border border-[cadetblue]"
        )}
      >
        <div className="flex flex-row items-center gap-10"></div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
