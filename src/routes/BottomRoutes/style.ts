import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1e40af",
  },
  tabBar: {
    position: "absolute",
    backgroundColor: "black",
    flexDirection: "row",
    bottom: 50,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 20,
    // paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    height: 40,
  },
  tabBarIconDiv: {
    flexDirection: "row",
    borderRadius: 16,
    fontSize: 11,
    gap: 4,
    // width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
