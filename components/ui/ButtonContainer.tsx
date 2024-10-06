import { StyleSheet, View } from "react-native";

interface ButtonContainerProps {
  children: React.ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
