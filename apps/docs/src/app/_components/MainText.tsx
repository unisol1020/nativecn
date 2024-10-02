import Link from "next/link";

const MainText = () => {
  return (
    <p className="max-w-2xl text-xl text-muted-foreground animate-fade-in-up">
      A sleek and easy-to-use UI library for{" "}
      <Link
        href="https://expo.dev/"
        target="_blank"
        className="text-primary group relative inline-block"
      >
        <span>React Native Expo</span>
        <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
      </Link>
      .
      <br />
      Inspired by the elegance of{" "}
      <Link
        href="https://ui.shadcn.com/"
        target="_blank"
        className="text-primary group relative inline-block"
      >
        <span>shadcn/ui</span>
        <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
      </Link>{" "}
      and powered by{" "}
      <Link
        href="https://www.nativewind.dev/v4/overview"
        target="_blank"
        className="text-primary group relative inline-block"
      >
        <span>NativeWind v4</span>
        <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full"></span>
      </Link>{" "}
      for effortless styling.
    </p>
  );
};

export default MainText;
