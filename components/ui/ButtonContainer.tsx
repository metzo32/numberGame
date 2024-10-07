import { StyleSheet, View, useWindowDimensions } from "react-native";

interface ButtonContainerProps {
  children: React.ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  const { width } = useWindowDimensions();

  const isWideView = width > 500;

  return (
    <View style={[styles.buttonContainer, isWideView && styles.wide]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
  },

  wide: {
    flex: 1,
    borderWidth: 1,
    borderColor: "pink",
  },
});
