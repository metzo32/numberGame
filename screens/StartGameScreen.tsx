import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Titles from "../components/ui/Titles";
import Cards from "../components/ui/Cards";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainer from "../components/ui/ButtonContainer";
import { Colors } from "../constants/colors";

interface StartGameProps {
  onPickedNumber: (pickedNumber: number) => void;
}

export default function StartGameScreen({ onPickedNumber }: StartGameProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const confirmInputHandler = () => {
    if (enteredNumber.trim().length === 0) {
      Alert.alert("", "숫자를 입력해주세요.", [
        //(제목, 내용, [버튼글자, 확인버튼디자인, onPress함수])
        { text: "확인", style: "destructive" },
      ]);
      return;
    }
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber)) {
      Alert.alert("", "숫자만 입력할 수 있습니다.", [
        { text: "확인", style: "destructive", onPress: resetInputHandler },
      ]);
    } else if (chosenNumber < 0) {
      Alert.alert("", "음수는 입력할 수 없습니다.", [
        { text: "확인", style: "destructive", onPress: resetInputHandler },
      ]);
    } else if (chosenNumber > 99) {
      Alert.alert("", "99 이하의 수를 입력해주세요.", [
        { text: "확인", style: "destructive", onPress: resetInputHandler },
      ]);
    } else {
      onPickedNumber(chosenNumber); //부모 컴포넌트에 입력값 전달
    }
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Titles>Guess My Number</Titles>

      <Cards>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad" //숫자만
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <ButtonContainer>
  
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
   
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
    
        </ButtonContainer>
      </Cards>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  inputContainer: {
    backgroundColor: Colors.p300,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    elevation: 5, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },

  buttonBox: {
    flex: 1,
  },

  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    color: Colors.white,
    marginVertical: 8,
  },
});
