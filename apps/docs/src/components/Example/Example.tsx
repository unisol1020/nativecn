"use client";
import dynamic from "next/dynamic";
import ExampleLoading from "./ExampleLoading";

const ExampleIframe = dynamic(
  () => import("@/components/Example/ExampleIframe"),
  {
    ssr: false,
  }
);

const Example = ({ component }: { component: string }) => {
  return (
    <div className="w-full h-[500px] relative">
      <ExampleIframe component={component} />

      <ExampleLoading />
    </div>
  );
};

export default Example;
