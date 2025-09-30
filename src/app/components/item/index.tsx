import { FilterStatus } from "@/types/filterStatus";
import { Trash2 } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../statusIcon";

type ItemData = {
  status: FilterStatus;
  description: string;
};
type Props = {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
};
export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onStatus} activeOpacity={0.8}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282"></Trash2>
      </TouchableOpacity>
    </View>
  );
}
