import { View, Pressable, Text } from "react-native";
import { CaretLeft, X } from "phosphor-react-native";
export function Header() {
  return (
    <View className="bg-#FFFFFF w-full flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <Pressable className="w-[35px] h-[35px] bg-white justify-center items-center">
          <CaretLeft size={20} color="#4a6fa1" />
        </Pressable>
        <View className="ml-2">
          <Text className="text-[#4a6fa1] font-bold">Coletas</Text>
        </View>
      </View>

      <Pressable className="w-[35px] h-[35px] border border-[#E8E8E880] bg-white rounded-full flex justify-center items-center">
        <X size={20} color="#4a6fa1" />
      </Pressable>
    </View>
  );
}
