import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const restartHandler = () => {
    //상태값 모두 초기화 (setGameOver는 위 핸들러에서 다루니 생략)
    setUserNumber(null);  //falsy가 됐으므로 아래 if (gameOver && userNumber) { 문을 불만족하여 <<GameScreen/> 렌더링
    setRounds(0);
  };

  //화면 전환
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    // userNumber을 포함시키지 않으면 입력하기도 전인 최초 상태에서 gameOver화면으로 넘어감.
    screen = (
      <GameOverScreen
        userInput={userNumber}
        roundsNumber={rounds}
        onRestart={restartHandler}
      />
    );
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
