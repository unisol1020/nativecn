"use client";
import { useTheme } from "next-themes";

const Example = ({ component }: { component: string }) => {
  const { theme } = useTheme();

  return (
    <iframe
      suppressHydrationWarning
      className="w-full h-[500px] rounded-md border border-muted"
      src={`${process.env.EXAMPLES_APP_URL}/${component}?theme=${theme}`}
      title={`Example of ${component} in ${theme} theme`}
    ></iframe>
  );
};

export default Example;
