import Github from "./Github";
import dynamic from "next/dynamic";

const ModeToggle = dynamic(() => import("@/components/ModeToggle"), {
  ssr: false,
});

const Actions = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Github />

      <ModeToggle />
    </div>
  );
};

export default Actions;
