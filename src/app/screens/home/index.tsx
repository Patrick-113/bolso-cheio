import { CardContainer } from "@/app/components/card-container";
import { Text, View } from "react-native";
import { styles } from "./style";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <CardContainer></CardContainer>;
    </View>
  );
}
