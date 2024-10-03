import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

interface GuessLogItemProps {
  roundCount: number;
  guess: number;
}

export default function GuessLogItem({ roundCount, guess }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundCount}</Text>
      <Text style={styles.text}>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: Colors.p900,
    opacity: 0.8,
    borderWidth: 1,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",

    elevation: 5, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },

  text: {
    color: Colors.p400,
  }
});
