import {
  View,
  Pressable,
  Text,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import { CaretLeft, X } from "phosphor-react-native";
import { useRouter } from "expo-router";

const mapsLogo = require("../../assets/logoMaps.png");
const wazeLogo = require("../../assets/wazeLogo.png");

export default function MapOptions() {
  const router = useRouter();

  return (
    <View>
      <View className="bg-#FFFFFF w-full flex flex-row items-center justify-between p-4 pb-3 border-b border-[#F3F3F3] mb-4">
        <View className="flex flex-row items-center ">
          <Pressable className="w-[35px] h-[35px] border border-[#E8E8E880] bg-white rounded-full flex justify-center items-center">
            <CaretLeft size={20} color="#4a6fa1" />
          </Pressable>
          <View className="ml-2">
            <Text className="text-[#4a6fa1] font-bold">Mapa</Text>
          </View>
        </View>

        <Pressable className="w-[35px] h-[35px] border border-[#E8E8E880] bg-white rounded-full flex justify-center items-center ">
          <X size={20} color="#4a6fa1" />
        </Pressable>
      </View>

      <View className="m-3">
        <Text className="text-[#4A6FA1] font-bold pb-5">Navegar com</Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/search/?api=1&query=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
            )
          }
          className="bg-[#C0D2E9] rounded-full p-4  flex flex-row items-center justify-between"
        >
          <Text className="text-[#4A6FA1] font-bold">Google Maps</Text>
          <Image
            source={mapsLogo}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.google.com/maps")}
          className="bg-[#C0D2E9] rounded-full p-4 mt-4 flex flex-row items-center justify-between"
        >
          <Text className="text-[#4A6FA1] font-bold">Waze</Text>
          <Image
            source={wazeLogo}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
