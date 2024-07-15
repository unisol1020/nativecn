import {PropsWithChildren, useCallback, useEffect, useMemo, useState} from "react";
import { useColorScheme } from "nativewind";
import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { useColorScheme as RNUseColorScheme } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

DefaultTheme.colors.background = 'white';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [loaded, setLoaded] = useState(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const rnColorScheme = RNUseColorScheme();

  const loadTheme = useCallback(async () => {
    const theme = await AsyncStorage.getItem('theme');

    if (theme) {
      setColorScheme(theme as "light" | "dark");
    }

    setLoaded(true);
  }, [rnColorScheme, setColorScheme]);

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    if (loaded && colorScheme) {
      (async () => {
        const theme = await AsyncStorage.getItem('theme');
        if (theme !== colorScheme) {
          await AsyncStorage.setItem('theme', colorScheme);
        }
      })();
    }
  }, [colorScheme, loaded]);

  const isDarkMode = useMemo(() =>
      (!loaded && rnColorScheme === "dark") || colorScheme === "dark",
    [loaded, rnColorScheme, colorScheme]
  );

  return (
    <RNThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      {children}
    </RNThemeProvider>
  );
}
