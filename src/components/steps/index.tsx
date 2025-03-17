import {
  Package,
  Plus,
  MapPin,
  ArrowsLeftRight,
  Cube,
  Check,
} from "phosphor-react-native";
import { View, Pressable, Text } from "react-native";

export function Steps() {
  return (
    <View className="bg-#FFFFFF w-full flex flex-row items-center mt-8 m-2 mb-8">
      <View className="flex items-center">
        <View className="ml-5">
          <Plus size={10} color="#4a6fa1" />
        </View>
        <Package size={30} color="#4a6fa1" />
        <View className="flex items-center">
          <Text className="text-[#4a6fa1] font-bold pt-3 ">Coleta</Text>
        </View>
      </View>

      <View className="w-12 h-[2px] bg-[#E2E8F0] -m-1"></View>

      <View className="flex items-center">
        <View className="flex items-center mt-2">
          <MapPin size={30} color="#CED4DA" />
          <View className="flex items-center">
            <Text className="text-[#CED4DA] font-bold pt-4 ">Check-in</Text>
          </View>
        </View>
      </View>

      <View className="w-12 h-[2px] bg-[#E2E8F0] -m-1"></View>

      <View className="flex items-center">
        <View className="flex items-center mt-2">
          <ArrowsLeftRight size={30} color="#CED4DA" />
          <View className="flex items-center">
            <Text className="text-[#CED4DA] font-bold pt-4 ">CrossDoking</Text>
          </View>
        </View>
      </View>

      <View className="w-12 h-[2px] bg-[#E2E8F0] -m-1"></View>

      <View className="flex items-center">
        <View className="flex items-center mt-2">
          <Cube size={30} color="#CED4DA" />
          <View className="pl-5 -mt-1">
            <Check size={10} color="#4a6fa1" />
          </View>
          <View className="flex items-center">
            <Text className="text-[#CED4DA] font-bold pt-2 ">Entrega</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
