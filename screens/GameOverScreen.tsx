import { useState } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import Titles from "../components/ui/Titles";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";

interface GameOverProps {
  userInput: number;
  roundsNumber: number;
  onRestart: () => void;
}

export default function GameOverScreen({ userInput, roundsNumber, onRestart }: GameOverProps) {
  return (
    <View style={styles.rootContainer}>
      <Titles>Game over</Titles>
      <View style={styles.shadowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/human_lost.webp")}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.text01}>"인간 시대의 끝이 도래했다"</Text>

      <Text style={styles.text01}>
        정답 :
        <Text style={styles.strong}> {userInput}</Text>
      </Text>

      <Text style={styles.text02}>
        당신을
        <Text style={styles.strong}> {roundsNumber}</Text>
        번만에 이겼습니다!
      </Text>
      <PrimaryButton onPress={onRestart}>다시하기</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  shadowContainer: {
    width: 350,
    height: 350,
    borderRadius: 200,
    margin: 36,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },

  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 200,
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
    alignItems: "center",

    elevation: 5, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  text01: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 12,
  },

  text02: {
    color: Colors.white,
    fontSize: 24,
    marginBottom: 16,
  },

  strong: {
    color: Colors.p400,
  },
});
