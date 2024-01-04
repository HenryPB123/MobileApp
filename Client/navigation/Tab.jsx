import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//components
import Register from "../screens/register/Register.jsx";
import Drawer from "../navigation/Drawer.jsx";

//Tabs
const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator
      //   initialRouteName="Home"
      screenOptions={
        {
          // headerShown: false,
          // tabBarActiveTintColor: "teal",
        }
      }
    >
      <MyTab.Screen
        name="HomeScreen"
        component={Drawer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" size={30} color={color} />
            );
          },

          headerShown: false, //se muestra el nombre de la screen
        }}
      />
      <MyTab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabel: "Register",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="login" size={24} color="black" />
            );
          },
        }}
      />
    </MyTab.Navigator>
  );
};
export default Tab;
