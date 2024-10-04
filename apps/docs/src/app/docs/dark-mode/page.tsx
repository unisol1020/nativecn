import { Metadata } from "next";
import { Breadcrumb } from "@/types/breadcrumb";
import MainContentLayout from "../../../components/MainContentLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeBlock } from "@/components/CodeBlock";
import { Timeline, TimelineItem } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Dark Mode - nativecn",
};

const BREADCRUMBS: Breadcrumb[] = [
  {
    name: "Docs",
  },
  {
    name: "Dark Mode",
    href: "/docs/dark-mode",
  },
];

const DocsPage = () => {
  return (
    <MainContentLayout
      breadcrumbs={BREADCRUMBS}
      title="Dark Mode"
      subtitle="How to add dark mode support to your app using NativeWind and ThemeProvider."
    >
      <div className="space-y-6">
        <Timeline>
          <TimelineItem title="Add ThemeProvider" stepNumber={1}>
            <p className="mb-2 font-light">
              First, add the ThemeProvider to your project using the following
              command:
            </p>

            <CodeBlock code="npx nativecn add ThemeProvider" language="bash" />
          </TimelineItem>

          <TimelineItem title="Wrap your app with ThemeProvider" stepNumber={2}>
            <p className="mb-2 font-light">
              In your root layout file, wrap your app component with the
              ThemeProvider:
            </p>

            <CodeBlock
              code={`import { ThemeProvider } from "@/components/ui/ThemeProvider"

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}`}
              language="jsx"
            />
          </TimelineItem>

          <TimelineItem title="Use the useColorScheme hook" stepNumber={3}>
            <p className="mb-2 font-light">
              You can now use NativeWind&apos;s useColorScheme hook to manage
              the color scheme:
            </p>

            <CodeBlock
              code={`import React, { useEffect } from 'react';
import { useColorScheme } from "nativewind";
import { Button } from "@/components/ui/Button"

function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme('dark');
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onPress={toggleColorScheme}>
      Toggle theme (Current: {colorScheme})
    </Button>
  );
}`}
              language="jsx"
            />
          </TimelineItem>
        </Timeline>

        <Alert>
          <AlertTitle>Note</AlertTitle>

          <AlertDescription>
            The ThemeProvider ensures that the color scheme is properly managed
            throughout your app. NativeWind&apos;s useColorScheme hook allows
            you to programmatically control the color scheme, integrating
            seamlessly with React Native&apos;s appearance API.
          </AlertDescription>
        </Alert>
      </div>
    </MainContentLayout>
  );
};

export default DocsPage;
