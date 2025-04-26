import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, onPress, className }: { title: string; onPress: () => void, className?: string }) => {
  return (
    <View className={className}>
      <TouchableOpacity
        onPress={onPress}
        className="bg-green-500 py-4 rounded-xl shadow-md"
        activeOpacity={0.75}
      >
        <Text className="text-white text-center text-lg font-semibold">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
