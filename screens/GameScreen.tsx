import { StyleSheet, Text, View } from "react-native";
import Titles from "../components/Titles";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Titles>Opponent's Guess</Titles>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <Text>Log Rounds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
