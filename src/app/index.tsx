import { Text, View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import "../styles/global.css";
import { Header } from "../components/header";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View className="w-full px-4 bg-white">
        <Header />
      </View>
    </SafeAreaView>
  );
}
