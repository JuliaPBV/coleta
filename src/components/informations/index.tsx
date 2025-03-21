import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ActionButtons } from "../actionButtons";

export function Informations() {
  return (
    <View className="bg-#FFFFFF w-full p-4">
      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">Responsável</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#4A4A4A] font-bold ">Nome do Responsável</Text>
          <TouchableOpacity style={styles.circle}>
            <Text className="text-[#2D3177] font-semibold ">ML</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">CEP</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#4A4A4A] font-bold">123456-789</Text>
          <TouchableOpacity style={styles.mapButton}>
            <Text className="text-white font-bold">Mapa</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">Seller</Text>
        <Text className="text-[#4A4A4A] font-bold">
          Loja de Exemplo Ltda.-789
        </Text>
      </View>

      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">Horário da Coleta</Text>
        <Text className="text-[#4A4A4A] font-bold ">09:15 </Text>
      </View>

      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">
          Quantidade de Pacotes
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#4A4A4A] font-bold">4 Pacotes - 4,2kg</Text>
          <TouchableOpacity style={styles.viewItemsButton}>
            <Text className="text-white font-bold">Ver itens</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-[#868E96] font-bold pb-1">
          Endereço da Coleta
        </Text>
        <Text className="text-[#4A4A4A] font-bold ">
          Avenida das Estrelas, 78, Bairro Aurora, Cidade Sol - Estado Lunar,
          Complemento, CEP 987654-321
        </Text>
      </View>

      <ActionButtons />
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
  mapButton: {
    backgroundColor: "#4A6FA1",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  viewItemsButton: {
    backgroundColor: "#4A6FA1",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
