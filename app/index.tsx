import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const LandingPage = () => {
  const { width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../assets/images/background_landing.webp")}
        className="flex-1 items-center py-16 pb-20"
      >
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" />

        <View className="flex-1 items-center justify-center z-10">
          <View className="flex flex-col items-center justify-center gap-5 px-6">
            <Image
              source={require("../assets/images/logo.png")}
              style={{
                width: width * 0.5,
                height: width * 0.5,
                resizeMode: "contain",
              }}
            />
            <Text className="text-white text-4xl font-bold text-center">
              AI Diet Planner
            </Text>
            <Text className="text-white text-xl font-semibold text-center px-4">
              Craft delicious, healthy meal plans tailored just for you. Achieve
              your goals with ease!
            </Text>
          </View>
        </View>
        <View className="flex flex-col gap-3 w-full items-center">
          <Button
            title="Get Started"
            onPress={() => {
              router.push("/(auth)/login");
            }}
            className="w-10/12"
          />
          <Button
            title="Skip"
            onPress={() => {
              router.push("/(tabs)/home");
            }}
            className="w-10/12"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;
