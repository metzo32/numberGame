import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

export default function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

//screen: 상태바 포함, window: 상태바 제외
const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: DeviceWidth < 380 ? 12 : 24,
    margin: DeviceWidth < 380 ? 36 : 52,
    justifyContent: "center",
    alignContent: "center",
  },
  numberText: {
    color: Colors.p500,
    fontSize: DeviceWidth < 380 ? 28 : 36,
    fontWeight: "600",
    textAlign: "center",
  },
});
