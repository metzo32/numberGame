import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Titles from "../components/ui/Titles";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

const generateNumBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min; //랜덤 정수 생성

  //컴퓨터는 첫 시도에서 답을 맞출 수 없음.
  if (randomNum === exclude) {
    return generateNumBetween(min, max, exclude);
  } else {

    return randomNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  onGameOver,
}: GameScreenProps) {
  
  // 아래는 게임오버 화면 넘어가지 않는 원인
  // const initialGuess = generateNumBetween(minBoundary, maxBoundary, userNumber);

  //GameScreen이 실행될 때마다  실행될 함수. guessNumber가 생길 때마다 다시 실행된다.
  //문제는 minBoundary와 maxBoundary가 똑같은 상황에서도 실행된다.
  //아래 useEffect문은 이 함수가 실행되고 난 다음 실행되기 때문에 리렌더링이 발생했을 때 이 함수가 먼저 호출된다.
  //따라서 gameOver 화면으로 넘어가기도 전에 에러가 발생한다.

  const initialGuess = generateNumBetween(1, 100, userNumber);
  //해결방법은 이 minBoundary와 maxBoundary를 하드코딩 해버리는 것. --- 초기값은 어차피 한번만 쓰기 때문에.

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
      console.log(minBoundary,maxBoundary)
    }
  }, [currentGuess, userNumber, onGameOver]); //67강 참고

  const nextGuessHandler = (direction: string) => {
    if (
      //유저가 +,-를 올바른 방향으로 사용하도록
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("정말인가요?", "다시 한 번 생각해보세요.", [
        { text: "아차차", style: "cancel" },
      ]);
      return;
    }

    //수를 올릴 방향. 키울지 줄일지?
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1; //66강 참고
    }
    console.log(minBoundary, maxBoundary);

    const newRandomNum = generateNumBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    //경우에 따라 업데이트된 최소값, 최대값, 최근에 썼던 정수는 배제
    setCurrentGuess(newRandomNum);
  };

  return (
    <View style={styles.screen}>
      <Titles>Opponent's Guess</Titles>

      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
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
