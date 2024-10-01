"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();

  if (theme) {
    return (
      <Image
        src={`/svg/${theme}-icon.svg`}
        alt="nativecn-logo"
        width={18}
        height={18}
      />
    );
  }
};

export default Logo;
