import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  numberText: {
    color: Colors.p500,
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
  },
});
