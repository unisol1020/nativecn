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
          <TimelineItem title="Add async-storage" stepNumber={1}>
            <p className="mb-2 font-light">
              First, add the async-storage to your project using the following
              command:
            </p>

            <CodeBlock
              code="npx expo install @react-native-async-storage/async-storage"
              language="bash"
            />

            <p className="mb-2 font-light">
              First, add the async-storage to your project using the following
              command:
            </p>
          </TimelineItem>

          <TimelineItem title="Create ThemeProvider" stepNumber={2}>
            <p className="mb-2 font-light">
              Then create a ThemeProvider component:
            </p>

            <CodeBlock
              code={`import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "nativewind";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { useColorScheme as RNUseColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

DefaultTheme.colors.background = "white";
DarkTheme.colors.background = "#09090B";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [loaded, setLoaded] = useState(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const rnColorScheme = RNUseColorScheme();

  useEffect(() => {
    if (loaded) {
      (async () => {
        const theme = await AsyncStorage.getItem("theme");

        if (!theme) {
          const cs = rnColorScheme === "dark" ? "dark" : "light";

          await AsyncStorage.setItem("theme", cs);
          setColorScheme(cs);
          return;
        }

        if (colorScheme && theme !== colorScheme) {
          await AsyncStorage.setItem("theme", colorScheme);
          return;
        }
      })();
    }
  }, [colorScheme, loaded]);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");

      if (theme) {
        setColorScheme(theme as "light" | "dark");
      }

      setLoaded(true);
    })();
  }, []);

  const isDarkMode = useMemo(
    () => (!loaded && rnColorScheme === "dark") || colorScheme === "dark",
    [loaded, rnColorScheme, colorScheme]
  );

  return (
    <RNThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      {children}
    </RNThemeProvider>
  );
};
`}
              language="tsx"
            />
          </TimelineItem>

          <TimelineItem title="Wrap your app with ThemeProvider" stepNumber={3}>
            <p className="mb-2 font-light">
              In your root layout file, wrap your app component with the
              ThemeProvider:
            </p>

            <CodeBlock
              code={`import { ThemeProvider } from "@/providers/ThemeProvider"

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

          <TimelineItem title="Use the useColorScheme hook" stepNumber={4}>
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
