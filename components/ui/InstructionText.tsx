import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface InstructionTextProps {
  children: string;
}

export default function InstructionText({ children }: InstructionTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.p500,
    fontWeight: "400",
    textAlign: "center",
  },
});
