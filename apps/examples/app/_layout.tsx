import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";
import { useEffect } from "react";
import "react-native-reanimated";
import { Header } from "~/components/Header";
import { ThemeProvider } from "~/components/ThemeProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/GeistMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="docs" />
        <Stack.Screen name="examples" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
