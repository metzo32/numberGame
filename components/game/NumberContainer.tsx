import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Colors } from "../../constants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

export default function NumberContainer({ children }: NumberContainerProps) {
  const { width, height } = useWindowDimensions();

  const isWideView = width > height;

  return (
    <View style={isWideView ? styles.containerWide : styles.container}>
      <Text style={[styles.numberText, isWideView && styles.numberWide]}>
        {children}
      </Text>
    </View>
  );
}

//screen: 상태바 포함, window: 상태바 제외
// const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderWidth: 4,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: 12,
    margin: 12,
    marginBottom: 24,
    justifyContent: "center",
    alignContent: "center",
  },

  containerWide: {
    aspectRatio: 1,
    borderWidth: 4,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: 12,
    margin: 12,
    justifyContent: "center",
    alignContent: "center",
  },

  numberText: {
    color: Colors.p500,
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },

  numberWide: {
    fontSize: 36,
  },
});
