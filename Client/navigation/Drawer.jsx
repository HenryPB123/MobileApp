import { createDrawerNavigator } from "@react-navigation/drawer";
import Posts from "../components/posts/Posts.jsx";
import Stories from "../components/storiess/Stories.jsx";
import Home from "../screens/home/Home.jsx";
import Profile from "../screens/profile/Profile.jsx";
import LeftBar from "../components/leftBar/LeftBar.jsx";

//Drawer
const MyDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <MyDrawer.Navigator
      drawerContent={(props) => <LeftBar {...props} />}
      screenOptions={{
        headerTitleAlign: "center",

        //   headerShown: false,
        //   tabBarActiveTintColor: "teal",
      }}
    >
      <MyDrawer.Screen name="Home" component={Home} />
      <MyDrawer.Screen name="Posts" component={Posts} />
      <MyDrawer.Screen name="Stories" component={Stories} />
      <MyDrawer.Screen name="Profile" component={Profile} />
    </MyDrawer.Navigator>
  );
};

export default Drawer;
