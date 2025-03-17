import { View, Text, StyleSheet } from "react-native";

export function Informations() {
  return (
    <View className="bg-#FFFFFF w-full flex justify-between m-3">
      <View>
        <Text className="text-[#868E96] font-bold pb-2">Responsável</Text>
        <Text className="text-[#4A4A4A] font-bold">Nome do Responsável</Text>
      </View>

      <View style={styles.circle}>
        <Text className="text-[#2D3177] font-semibold">ML</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#FFD101",
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
