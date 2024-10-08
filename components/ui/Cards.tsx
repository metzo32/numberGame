import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Colors } from "../../constants/colors";

interface CardProps {
  children: React.ReactNode;
}

export default function Cards({ children }: CardProps) {
  const { width, height } = useWindowDimensions();

  const isWideView = width > height;

  return <View style={[styles.inputContainer, isWideView &&  styles.inputContainerWide]}>{children}</View>;
}

const styles = StyleSheet.create({
  
  inputContainer: {
    backgroundColor: Colors.p300,
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

  inputContainerWide : {
    flex: 1,
  },
});
