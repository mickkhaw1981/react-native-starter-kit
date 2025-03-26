import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
}

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles = "",
  keyboardType = "default",
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`w-full space-y-2 ${otherStyles}`}>
      <Text className="text-base font-medium mb-2">{title}</Text>
      <View className="relative">
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 w-full"
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          style={{ height: 50 }}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-0 bottom-0 justify-center"
          >
            {showPassword ? (
              <EyeOff size={20} color="#7b7b8b" />
            ) : (
              <Eye size={20} color="#7b7b8b" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
