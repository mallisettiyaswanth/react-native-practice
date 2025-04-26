import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          
        }}
      />
      <Tabs.Screen name="Meals" options={{ title: "Meals" }} />
      <Tabs.Screen name="Progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

export default TabsLayout