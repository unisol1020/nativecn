"use client";

import dynamic from "next/dynamic";

const ExampleIframe = dynamic(
  () => import("@/components/Example/ExampleIframe"),
  {
    ssr: false,
  }
);

const Example = ({ component }: { component: string }) => {
  return (
    <div className="w-full h-[500px]">
      <ExampleIframe component={component} />
    </div>
  );
};

export default Example;
