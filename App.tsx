import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Welcome from "./src/screens/WelcomeScreen";


export default function App() {
  return (
    <View className="flex-1">
      <Welcome/>
      <StatusBar style="auto" />
    </View>
  );
}
