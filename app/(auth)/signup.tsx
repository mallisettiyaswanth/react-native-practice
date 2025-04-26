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
import { useForm, Controller, SubmitErrorHandler } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "@/config/firebase";
import { useAuth } from "@/context/AuthContext";
import Toast from "react-native-toast-message";

interface FormValues {
  name: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

const RegisterScreen = () => {
  const { width } = Dimensions.get("window");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreeTerms: false,
    },
  });

  const { setLoggedInUser } = useAuth();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    setIsLoading(true);

    createUserWithEmailAndPassword(authentication, data.email, data.password)
      .then((res) => {
        console.log("successful");
        setLoggedInUser({
          id: res.user.uid,
          name: data.name,
          email: data.email,
        });
        Toast.show({
          type: "success",
          text1: "Account Created",
          text2: "You can now login to your account.",
        });
        reset({
          name: "",
          email: "",
          password: "",
          agreeTerms: false,
        });
      })

      .catch((err) => {
        console.log(err);
        setError("Incorrect Email/Password");
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Incorrect Email/Password",
        });
      })

      .finally(() => setIsLoading(false));
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log("Validation Errors:", errors);
  };

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
                  {/* Name */}
                  <Controller
                    control={control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({
                      field: { onChange, onBlur, value },
                    }: {
                      field: {
                        onChange: (value: string) => void;
                        onBlur: () => void;
                        value: string;
                      };
                    }) => (
                      <TextInput
                        placeholder="Name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize="words"
                        className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                      />
                    )}
                  />
                  {errors.name && (
                    <Text className="text-red-500 text-sm w-10/12">
                      {errors.name.message}
                    </Text>
                  )}

                  {/* Email */}
                  <Controller
                    control={control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email format",
                      },
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                    }: {
                      field: {
                        onChange: (value: string) => void;
                        onBlur: () => void;
                        value: string;
                      };
                    }) => (
                      <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                      />
                    )}
                  />
                  {errors.email && (
                    <Text className="text-red-500 text-sm w-10/12">
                      {errors.email.message}
                    </Text>
                  )}

                  {/* Password */}
                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: "Password is required" }}
                    render={({
                      field: { onChange, onBlur, value },
                    }: {
                      field: {
                        onChange: (value: string) => void;
                        onBlur: () => void;
                        value: string;
                      };
                    }) => (
                      <TextInput
                        placeholder="Password"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        className="border-2 border-gray-300 rounded-xl w-10/12 px-4 py-3"
                      />
                    )}
                  />
                  {errors.password && (
                    <Text className="text-red-500 text-sm w-10/12">
                      {errors.password.message}
                    </Text>
                  )}

                  {/* Checkbox */}
                  <View className="w-10/12 py-1 px-3 flex flex-row gap-3 items-center">
                    <Controller
                      control={control}
                      name="agreeTerms"
                      rules={{ required: "You must agree to terms" }}
                      render={({
                        field: { onChange, value },
                      }: {
                        field: {
                          onChange: (value: boolean) => void;
                          value: boolean;
                        };
                      }) => (
                        <Checkbox
                          className="rounded-xl"
                          value={value}
                          onValueChange={onChange}
                        />
                      )}
                    />
                    <Text className="text-black/70">
                      I agree to the Terms & Conditions
                    </Text>
                  </View>
                  {errors.agreeTerms && (
                    <Text className="text-red-500 text-sm w-10/12">
                      {errors.agreeTerms.message}
                    </Text>
                  )}
                </View>

                <View className="w-full flex flex-col gap-3 items-center">
                  <View className="w-10/12">
                    <TouchableOpacity
                      disabled={isLoading}
                      onPress={handleSubmit(onSubmit, onError)}
                      className="bg-green-500 py-4 rounded-xl shadow-md"
                      activeOpacity={0.75}
                    >
                      <Text className="text-white text-center text-lg font-semibold">
                        {isLoading ? "Loading..." : "Create Account"}
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
