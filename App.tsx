import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { StyleSheet, ImageBackground, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  // 폰트 로드 함수
  const loadFonts = async () => {
    await Font.loadAsync({
      CustomTextRegular: require("./assets/fonts/Orbitron-Regular.ttf"),
      CustomTextMedium: require("./assets/fonts/Orbitron-Medium.ttf"),
      CustomTextBold: require("./assets/fonts/Orbitron-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts(); // 컴포넌트가 마운트될 때 폰트 로드
  }, []);

  // 폰트 로딩이 완료되지 않았을 때 로딩 화면 표시
  if (!fontsLoaded) {
    return <Text>로딩중</Text>;
  }

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  //게임 오버 시 불러오는 콜백함수
  const gameOverHandler = (numberOfRounds: number) => {
    setGameOver(true);
    setRounds(numberOfRounds); //게임오버 시 라운드의 수
  };

  const restartHandler = () => {
    //상태값 모두 초기화 (setGameOver는 위 핸들러에서 다루니 생략)
    setUserNumber(null); //falsy가 됐으므로 아래 if (gameOver && userNumber) { 문을 불만족하여 <<GameScreen/> 렌더링
    setRounds(0); //다시 시작할때는 라운드 수 0
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
