import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../../constants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

export default function NumberContainer({ children }: NumberContainerProps) {
  const { width, height } = useWindowDimensions();

  const isWideView = width > 380;

  return (
    <View style={[styles.container, isWideView && styles.containerWide]}>
      <Text style={[styles.numberText, isWideView && styles.numberWide]}>{children}</Text>
    </View>
  );
}

//screen: 상태바 포함, window: 상태바 제외
// const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.p500,
    borderRadius: 8,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
  },

  containerWide: {
    padding: 24,
    margin: 30,
  },

  numberText: {
    color: Colors.p500,
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },

  numberWide : {
    fontSize: 36, 
  }

});
