import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Light": require("@/assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("@/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("@/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Bold": require("@/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("@/assets/fonts/Rubik-ExtraBold.ttf"),
  });

  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
