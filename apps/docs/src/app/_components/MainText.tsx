import Link from "next/link";

const MainText = () => {
  return (
    <p className="max-w-2xl text-xl text-muted-foreground animate-fade-in-up">
      Easy to install and use UI library for{" "}
      <Link
        href="https://expo.dev/"
        target="_blank"
        className="text-primary hover:underline"
      >
        React Native Expo
      </Link>
      , inspired by the simplicity and elegance of{" "}
      <Link
        href="https://ui.shadcn.com/"
        target="_blank"
        className="text-primary hover:underline"
      >
        shadcn/ui
      </Link>
      .
    </p>
  );
};

export default MainText;
