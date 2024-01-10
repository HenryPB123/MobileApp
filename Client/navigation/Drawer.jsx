import { createDrawerNavigator } from "@react-navigation/drawer";
import Posts from "../components/posts/Posts.jsx";
import Stories from "../components/storiess/Stories.jsx";
import Home from "../screens/home/Home.jsx";
import Profile from "../screens/profile/Profile.jsx";
import LeftBar from "../components/leftBar/LeftBar.jsx";
import Comments from "../components/comments/Comments.jsx";
import { SafeAreaView } from "react-native";
import Groups from "../components/groups/Groups.jsx";
import Friends from "../components/friends/Friends.jsx";

//Drawer
const MyDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <MyDrawer.Navigator
      drawerContent={(props) => <LeftBar {...props} />}
      screenOptions={{
        headerTitleAlign: "center",

        headerShown: false,
        //   tabBarActiveTintColor: "teal",
      }}
    >
      <MyDrawer.Screen name="MyHome" component={Home} />
      <MyDrawer.Screen name="Posts" component={Posts} />
      <MyDrawer.Screen name="Stories" component={Stories} />
      <MyDrawer.Screen name="Profile" component={Profile} />
      <MyDrawer.Screen name="Comments" component={Comments} />
      <MyDrawer.Screen name="Groups" component={Groups} />
      <MyDrawer.Screen name="Friends" component={Friends} />
    </MyDrawer.Navigator>
  );
};

export default Drawer;
