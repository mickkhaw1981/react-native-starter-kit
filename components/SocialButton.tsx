import React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

interface SocialButtonProps {
  logo: ImageSourcePropType;
  text: string;
  onPress: () => void;
  containerStyles?: string;
}

const SocialButton = ({
  logo,
  text,
  onPress,
  containerStyles = "",
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white shadow-md shadow-zinc-300 rounded-2xl py-3 px-6 w-full mt-5 h-14 flex-row items-center justify-center space-x-3 ${containerStyles}`}
    >
      <Image source={logo} className="w-6 h-6" resizeMode="contain" />
      <Text className="text-base font-semibold px-2">{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
