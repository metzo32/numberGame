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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'red',
  },

  wide: {
    marginBottom: 12,
  },
});
