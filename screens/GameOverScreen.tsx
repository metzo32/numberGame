import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Titles from "../components/ui/Titles";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";

interface GameOverProps {
  userInput: number;
  roundsNumber: number;
  onRestart: () => void;
}

export default function GameOverScreen({
  userInput,
  roundsNumber,
  onRestart,
}: GameOverProps) {
  const [isPortrait, setIsPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 240;
  }
  if (height >= 400) {
    imageSize = 280;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  useEffect(() => {
    if (width > height) {
      setIsPortrait(false);
    } else {
      setIsPortrait(true);
    }
  }, [width, height]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Titles>Game over</Titles>

        <View style={isPortrait ? styles.portraitWrapper : styles.wideWrapper}>
          <View
            style={
              isPortrait
                ? styles.portraitImageContainer
                : styles.wideImageContainer
            }
          >
            <View style={[styles.shadowContainer, imageStyle]}>
              <View style={[styles.imageContainer, imageStyle]}>
                <Image
                  source={require("../assets/images/human_lost.webp")}
                  style={styles.image}
                />
              </View>
            </View>
          </View>

          <View
            style={isPortrait ? styles.portraitContainer : styles.wideContainer}
          >
            <Text style={styles.text01}>"인간 시대의 끝이 도래했다"</Text>

            <Text style={styles.text01}>
              정답 :<Text style={styles.strong}> {userInput}</Text>
            </Text>

            <Text style={styles.text02}>
              당신을
              <Text style={styles.strong}> {roundsNumber}</Text>
              번만에 이겼습니다!
            </Text>
            <PrimaryButton onPress={onRestart}>다시하기</PrimaryButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  portraitWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  wideWrapper: {
    flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  portraitImageContainer: {
    alignItems: "center",
    marginTop: 24,
  },

  wideImageContainer: {
    marginTop: 12,
  },

  shadowContainer: {
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6, //android box shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },

  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 200,
    overflow: "hidden",
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

  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
  },

  wideContainer: {
    flex: 1,
    marginLeft: 36,
    alignItems: "center",
    paddingTop: "10%",
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
