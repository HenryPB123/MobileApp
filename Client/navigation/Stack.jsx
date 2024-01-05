import Register from "../screens/register/Register.jsx";
import Landing from "../screens/landing/Landing.jsx";
import Login from "../screens/login/Login.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import Tab from "./Tab.jsx";
import Drawer from "./Drawer.jsx";

const MyStack = createStackNavigator();

const Stack = () => {
  return (
    <MyStack.Navigator
      initialRouteName="Landing"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        // headerTitle: "SocialWorldPet",
        headerTitleAlign: "center",
        // headerStyle: { backgroundColor: "#EBEBEB" },
      })}
    >
      <MyStack.Screen name="Landing" component={Landing} />
      <MyStack.Screen name="Login" component={Login} />
      <MyStack.Screen name="Register" component={Register} />
      <MyStack.Screen name="Home" component={Drawer} />
      {/* <MyStack.Screen name="Home" component={Tab} /> */}
    </MyStack.Navigator>
  );
};

export default Stack;
