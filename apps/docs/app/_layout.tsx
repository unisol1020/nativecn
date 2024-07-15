import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {useColorScheme as NWUseColorScheme} from "nativewind";
import {useColorScheme} from "react-native";
import {Header} from '~/components/Header';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const {setColorScheme} = NWUseColorScheme();
  const colorScheme= useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    setColorScheme(colorScheme ?? "dark");
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerShown: true,
        headerTransparent: true,
        header: () => <Header/>,
      }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="docs"/>
        <Stack.Screen name="examples"/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </ThemeProvider>
  );
}

export default RootLayout;
