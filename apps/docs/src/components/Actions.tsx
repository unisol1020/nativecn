import { Button } from "@/components/ui/button";
import Link from "next/link";

const Actions = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-4 animate-fade-in w-full">
      <Link href="/docs">
        <Button className="w-full" size="lg">
          Get Started
        </Button>
      </Link>

      <Link href="https://github.com/unisol1020/nativecn" target="_blank">
        <Button className="w-full" variant="secondary" size="lg">
          GitHub
        </Button>
      </Link>
    </div>
  );
};

export default Actions;
