"use client";
import { Suspense } from "react";
import { Nav } from "./Nav";
import { Actions } from "./Actions";
import dynamic from "next/dynamic";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Logo = dynamic(() => import("./Logo"), { ssr: false });

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container px-4 flex h-14 max-w-screen-xl items-center justify-between">
        <div className="block md:hidden">
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>

        <div className="hidden md:flex flex-row items-center gap-8">
          <Link href="/">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[18px] h-[18px]">
                <Logo />
              </div>

              <div className="hidden font-bold lg:inline-block">Nativecn</div>
            </div>
          </Link>

          <Nav />
        </div>

        <Actions />
      </div>
    </header>
  );
};

export default Header;
