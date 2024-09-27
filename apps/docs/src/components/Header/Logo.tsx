"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();

  if (theme) {
    return (
      <Image
        src={`/svg/${theme}-icon.svg`}
        alt="nativecn"
        width={32}
        height={32}
      />
    );
  }
};

export default Logo;
