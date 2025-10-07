import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashScreen } from "@/app/screens/dash";
import { HomeScreen } from "@/app/screens/home";
import { UserScreen } from "@/app/screens/user";
import { styles } from "./style";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStaticNavigation } from "@react-navigation/native";
import { colors } from "@/utils/color.utils";

// function tabBarButton({ accessibilityState, onPress, label, icon }) {}

const Tab = createBottomTabNavigator({
  screenOptions: ({ route, navigation, theme }) => ({
    tabBarStyle: styles.tabBar,
    tabBarButton: (props) => {
      const state = navigation.getState();
      const isSelected = state.routes[state.index].name === route.name;
      const icon = () => {
        if (route.name == "home") return "home";
        if (route.name == "dash") return "bar-chart";
        else return "person";
      };
      const tabBarText = isSelected
        ? styles.tabBarTextSelected
        : styles.tabBarText;

      const tabBarDiv = isSelected
        ? styles.tabBarDivSelected
        : styles.tabBarDiv;
      return (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={tabBarDiv}>
            <Ionicons name={icon()} size={20} color={colors.branco} />
            <Text style={tabBarText}>{route.name}</Text>
          </View>
        </TouchableOpacity>
      );
    },
  }),
  screens: {
    home: HomeScreen,
    dash: DashScreen,
    user: UserScreen,
  },
});
export const Navigation = createStaticNavigation(Tab);
