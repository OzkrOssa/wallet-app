import { View, Text, Image, TouchableOpacity } from "react-native";
import background from "../../assets/bgs/background_v1.png"
import React from "react";

export default function Welcome() {
  return (
    <View className="flex-1 bg-primary justify-between">
      <Image
        source={background}
        resizeMode="stretch"
        style={{width: "100%", height: "50%"}}
      />
      <View className="justify-items-start p-6 mr-10">
        <Text className="text-white font-bold text-5xl">
          Best way to tracking your money
        </Text>
        <Text className="py-4 text-gray-400 mr-20">
          Best payment method, connect your money to your friends, family.
        </Text>
      </View>
      <View className="justify-center items-center mb-20">
        <TouchableOpacity className="p-3 rounded-xl bg-tertiary w-80 items-center">
          <Text className="font-extrabold text-white">Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
