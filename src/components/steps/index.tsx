import { Package, Plus } from "phosphor-react-native";
import { View, Pressable, Text } from "react-native";

export function Steps() {
  return (
    <View className="bg-#FFFFFF w-full flex flex-row items-center justify-between pt-7">
      <View className="m-4">
        <Pressable className="w-[30px] h-[30px] bg-white justify-center items-center">
          <View className="pl-5">
            <Plus size={10} color="#4a6fa1" />
          </View>
          <Package size={30} color="#4a6fa1" />
        </Pressable>
        <View>
          <Text className="text-[#4a6fa1] font-bold pt-2">Coleta</Text>
        </View>
      </View>
    </View>
  );
}
