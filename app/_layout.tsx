import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";

import "./global.css";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/signup"
          options={{ title: "Signup", headerShown: false }}
        />
      </Stack>
    </ConvexProvider>
  );
}
