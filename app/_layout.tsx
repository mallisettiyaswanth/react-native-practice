import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
   import Toast from "react-native-toast-message";

   import "./global.css";
   import { AuthProvider } from "@/context/AuthContext";
   import toastConfig from "@/config/toast";

   const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
     unsavedChangesWarning: false,
   });

   export default function RootLayout() {
     return (
       <ConvexProvider client={convex}>
         <AuthProvider>
           <Toast config={toastConfig} />
           <Stack screenOptions={{ headerShown: false }}>
             <Stack.Screen
               name="(auth)"
               options={{ title: "Auth", headerShown: false }}
             />
           </Stack>
         </AuthProvider>
       </ConvexProvider>
     );
   }
