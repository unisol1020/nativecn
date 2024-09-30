import MainText from "./_components/MainText";
import Actions from "./_components/Actions";

export default function Home() {
  return (
    <div className="flex flex-col size-full m-auto items-center justify-center gap-8 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in-down">
        <span className="block text-primary">Nativecn</span>
      </h1>

      <MainText />

      <Actions />
    </div>
  );
}
