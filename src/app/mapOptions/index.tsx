import { View, Pressable, Text, Linking } from "react-native";
import { CaretLeft, X } from "phosphor-react-native";

export default function MapOptions() {
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
        <Text className="text-[#4A6FA1] font-bold">Navegar com</Text>
      </View>
    </View>
  );
}
