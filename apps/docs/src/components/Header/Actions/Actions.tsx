import { ModeToggle } from "@/components/ModeToggle";
import Github from "./Github";

const Actions = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Github />

      <ModeToggle />
    </div>
  );
};

export default Actions;
