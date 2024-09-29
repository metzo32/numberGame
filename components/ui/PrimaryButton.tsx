import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

interface propsType {
  children: string;
  onPress: () => void;
}

export default function PrimaryButton({ children, onPress }: propsType) {

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={(
          { pressed } //53강 참고
        ) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : [styles.innerContainer]
        }
        onPress={onPress}
        android_ripple={{ color: Colors.p400 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 100,
    margin: 4,
    overflow: "hidden",
  },

  innerContainer: {
    backgroundColor: Colors.p500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
