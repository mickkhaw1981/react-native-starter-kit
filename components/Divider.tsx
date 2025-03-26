import React from "react";
import { View, Text } from "react-native";

interface DividerProps {
  text: string;
}

const Divider = ({ text }: DividerProps) => {
  return (
    <View className="w-full flex-row items-center my-4">
      <View className="flex-1 h-[1px] bg-gray-300" />
      <Text className="mx-4 text-gray-500">{text}</Text>
      <View className="flex-1 h-[1px] bg-gray-300" />
    </View>
  );
};

export default Divider;
