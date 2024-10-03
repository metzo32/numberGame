import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

interface TitleType {
  children: string;
}

export default function Titles({ children }: TitleType) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    maxWidth: "80%",
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 12,
  },
});
