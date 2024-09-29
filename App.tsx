import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true)

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameOver(false)
  };

  const gameOverHandler = () => {
    setGameOver(true);
  }

  //화면 전환
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  } 
  if ( gameOver && userNumber ) {   // userNumber을 포함시키지 않으면 입력하기도 전인 최초 상태에서 gameOver화면으로 넘어감.
    screen = <GameOverScreen/>
  }


  return (
    <LinearGradient
      colors={[Colors.p900, Colors.p800]}
      start={[0, 0.1]} //x, y 시작점 (%)
      end={[0, 0.9]} //x, y 끝점 (%)
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.04,
  },
});
