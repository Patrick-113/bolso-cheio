import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1e40af",
  },
  tabBar: {
    position: "absolute",
    bottom: 50,
    marginLeft: 20,
    marginRight: 60,
    backgroundColor: "#111", // preto
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
    width: "auto",
    paddingHorizontal: 10,
    height: 70
  },
  tabBarDiv: {
    flexDirection: "row",
    borderRadius: 16,
    fontSize: 11,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  tabBarDivSelected: {
    flexDirection: "row",
    borderRadius: 20,
    borderCurve: "continuous",
    fontSize: 11,
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    width: "100%",
    height: "70%",
    paddingHorizontal: 20,
  },
  tabBarTextSelected: {
    color: "white",
  },
  tabBarText: {
    display: "none",
  },
});
