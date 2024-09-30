"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ModeToggle";
import Logo from "./Logo";
import { Nav } from "./Nav";

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
    <header
      className={cn(
        "sticky top-0 z-50 w-full flex justify-center items-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled && "border-b"
      )}
    >
      <div className="container px-4 flex h-14 max-w-screen-xl items-center justify-between">
        <div className="flex flex-row items-center gap-8">
          <Logo />

          <Nav />
        </div>

        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
