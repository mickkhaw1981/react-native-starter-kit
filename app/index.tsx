import { Link, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";

const Index = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <SafeAreaView className="h-full items-center justify-center bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="w-full flex flex-col items-center px-4">
          <Text className="text-4xl font-bold">Home</Text>
          <Link href="/profile" style={{ color: "blue" }}>
            Go to Profile
          </Link>
          <Link href="/home" style={{ color: "blue" }}>
            Go to Home
          </Link>
          <Link href="/sign-in" style={{ color: "blue" }}>
            Go to Sign In
          </Link>
          <Link href="/sign-up" style={{ color: "blue" }}>
            Go to Sign Up
          </Link>
          <CustomButton
            title="Sign In"
            handlePress={handleSignIn}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
