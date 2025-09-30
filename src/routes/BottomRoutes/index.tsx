import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DashScreen } from "@/app/screens/dash";
import { HomeScreen } from "@/app/screens/home";
import { UserScreen } from "@/app/screens/user";
import { styles } from "./style";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStaticNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator({
  screenOptions: ({ route, navigation, theme }) => ({
    tabBarIcon({ color, focused, size }) {
      let icon: "home" | "bar-chart" | "person" = "home";
      switch (route.name) {
        case "home":
          icon = "home";
          break;
        case "dash":
          icon = "bar-chart";
          break;
        case "user":
          icon = "person";
          break;
      }
      return <Ionicons name={icon} size={size} color={color} />;
    },
    tabBarLabel(props) {
      return <Text>{props.children}</Text>;
    },
    tabBarButton(props) {
      return (
        <View style={{ gap: 10, backgroundColor: "black" }}>
          <Text style={{ color: "white" }}>Cachorro</Text>
        </View>
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
// export function ButtonStackRoutes() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerStyle: styles.header,
//         tabBarStyle: styles.tabBar,
//         tabBarLabelPosition: "beside-icon",
//         tabBarShowLabel: false,
//         tabBarIcon: ({ color, focused, size }) => {
//           let icon!: "home" | "bar-chart" | "person";
//           switch (route.name) {
//             case "home":
//               icon = "home";
//               break;
//             case "dash":
//               icon = "bar-chart";
//               break;
//             case "user":
//               icon = "person";
//               break;
//           }
//           if (focused) {
//             return (
//               <View style={styles.tabBarIconDiv}>
//                 <Ionicons name={icon} color={"white"} size={size} />
//                 <Text style={{ color: "white" }}>{route.name}</Text>
//               </View>
//             );
//           }

//           return (
//             <View style={{ flexDirection: "row" }}>
//               <Ionicons name={icon} color={"white"} size={size} />
//             </View>
//           );
//         },
//       })}
//     >
//       <Tab.Screen name="home" component={HomeScreen}></Tab.Screen>
//       <Tab.Screen name="dash" component={DashScreen}></Tab.Screen>
//       <Tab.Screen name="user" component={UserScreen}></Tab.Screen>
//     </Tab.Navigator>
//   );
// }
