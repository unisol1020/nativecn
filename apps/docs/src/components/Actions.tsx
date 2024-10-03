import { Button } from "@/components/ui/button";
import Link from "next/link";

const Actions = () => {
  return (
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
  );
};

export default Actions;
