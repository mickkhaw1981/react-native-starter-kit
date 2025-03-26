import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CustomButton from "@/components/CustomButton";
import Divider from "@/components/Divider";
import FormField from "@/components/FormField";
import SocialButton from "@/components/SocialButton";

const SignIn = () => {
  // State for form fields
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // State for Sign In button loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Google Sign In. Add new ones for other social media
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };

  const submit = () => {
    setIsSubmitting(true);
    console.log(form);
    // Simulate API call completion
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6 items-center">
          <Image
            source={require("../../assets/images/react-logo.png")}
            className="w-16 h-16 mb-10"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold mb-5">Sign In</Text>
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(text: string) => {
              setForm((prevForm) => ({
                ...prevForm,
                email: text,
              }));
            }}
            otherStyles="mt-7 w-full"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(text: string) => {
              setForm((prevForm) => ({
                ...prevForm,
                password: text,
              }));
            }}
            otherStyles="mt-4 w-full"
          />
          <View className="w-full flex items-end mt-1">
            <TouchableOpacity onPress={() => console.log("Forgot password")}>
              <Text className="text-sm text-red-500">Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <Divider text="OR" />
          <SocialButton
            logo={require("../../assets/icons/google.png")}
            text="Sign in with Google"
            onPress={handleGoogleSignIn}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-base">Don't have an account?</Text>
            <Link href="/sign-up" className="text-base text-bold text-red-500">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
