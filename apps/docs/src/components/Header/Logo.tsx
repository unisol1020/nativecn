"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <div className="flex flex-row items-center gap-2">
        {theme && (
          <Image
            src={`/svg/${theme}-icon.svg`}
            alt="nativecn-logo"
            width={18}
            height={18}
          />
        )}

        <div className="hidden font-bold lg:inline-block">Nativecn</div>
      </div>
    </Link>
  );
};

export default Logo;
