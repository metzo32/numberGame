import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

interface CardProps {
  children: React.ReactNode;
}

export default function Cards({ children }: CardProps) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.p300,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    elevation: 5, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});
