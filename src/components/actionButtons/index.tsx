import { useRouter } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export function ActionButtons() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.blueButton}
        onPress={() => router.push("/mapOptions")}
      >
        <Text className="text-[#FFFFFF] font-bold">Iniciar Coleta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.redButton}>
        <Text className="text-[#FF4D4D] font-bold">Reportar Problema</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.whiteButton}>
        <Text className="text-[#4A6FA1] font-bold">Ver Rota </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  blueButton: {
    backgroundColor: "#4A6FA1",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#4A6FA1",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#FF4D4D",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  whiteButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#4A6FA1",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
});
