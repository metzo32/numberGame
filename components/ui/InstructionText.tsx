import { StyleSheet, Text, View } from "react-native";
import { CustomTextMedium } from "../../components/ui/TextFont";
import { Colors } from "../../constants/colors";

interface InstructionTextProps {
  children: string;
}

export default function InstructionText({ children }: InstructionTextProps) {
  return <CustomTextMedium style={styles.text}>{children}</CustomTextMedium>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.p500,
    fontWeight: "400",
    textAlign: "center",
  },
});
