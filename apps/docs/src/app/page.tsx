import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col size-full m-auto items-center justify-center gap-8 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in-down">
        <span className="block text-primary">Nativecn</span>
      </h1>
      <p className="max-w-2xl text-xl text-muted-foreground animate-fade-in-up">
        A super easy to install and use UI library for{" "}
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
      <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in">
        <Link href="/docs">
          <Button size="lg">Get Started</Button>
        </Link>

        <Link href="https://github.com/unisol1020/nativecn" target="_blank">
          <Button variant="secondary" size="lg">
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}
