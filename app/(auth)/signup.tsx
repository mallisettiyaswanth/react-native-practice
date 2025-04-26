import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const RegisterScreen = () => {
  const { width } = Dimensions.get("window");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center py-16 flex-col">
            <Image
              source={require("./../../assets/images/logo.png")}
              style={{
                width: width * 0.7,
                height: width * 0.7,
                resizeMode: "contain",
              }}
            />

            <View className="w-full mt-auto py-5 gap-10">
              <View className="flex flex-col gap-2 items-center">
                <Text className="text-5xl font-extrabold text-center px-4 text-black">
                  Create Account
                </Text>
                <Text className="text-lg font-semibold text-center px-4 text-black/60">
                  Register to get started
                </Text>
              </View>

              <View className="flex flex-col w-full items-center gap-5 flex-1">
                <View className="flex flex-col gap-3 items-center w-full py-3">
                  <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                    autoCapitalize="words"
                    className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                  />
                  <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                  />
                  <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                    className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                  />
                  <View className="w-10/12 py-1 px-3 flex flex-row gap-3 items-center">
                    <Checkbox
                      className="rounded-xl"
                      value={isChecked}
                      onValueChange={(val) => setChecked(val)}
                    />
                    <Text className="text-black/70">
                      I agree to the Terms & Conditions
                    </Text>
                  </View>
                </View>

                <View className="w-full flex flex-col gap-3 items-center">
                  <View className="w-10/12">
                    <TouchableOpacity
                      onPress={() => {}}
                      className="bg-green-500 py-4 rounded-xl shadow-md"
                      activeOpacity={0.75}
                    >
                      <Text className="text-white text-center text-lg font-semibold">
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Text className="text-center mt-4">
                    Already have an account?{" "}
                    <Text
                      className="text-green-500 font-semibold"
                      onPress={() => router.replace("/(auth)/login")}
                    >
                      Login
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
