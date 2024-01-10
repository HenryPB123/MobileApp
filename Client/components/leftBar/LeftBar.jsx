import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

//style
import style from "./leftBarStyle.js";
import { TouchableOpacity } from "react-native-gesture-handler";

//icons
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";

const LeftBar = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={style.container}>
      <Text style={style.title}>Menu</Text>

      <View style={style.containerMenu}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Friends")}
        >
          <FontAwesome5 name="user-friends" style={style.icon} />
          <Text style={style.textButton}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Groups")}
        >
          <MaterialCommunityIcons
            name="account-group-outline"
            style={style.icon}
          />
          <Text style={style.textButton}>Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialIcons name="storefront" style={style.icon} />
          <Text style={style.textButton}>Marketplace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Ionicons name="play-circle-outline" style={style.icon} />
          <Text style={style.textButton}>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Entypo name="stopwatch" style={style.icon} />
          <Text style={style.textButton}>Memories</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={style.hr} /> */}
      <View style={style.containerMenu}>
        <Text style={style.subtitle}>Your shorcuts</Text>
        <TouchableOpacity style={style.button}>
          <FontAwesome name="calendar" style={style.icon} />
          <Text style={style.textButton}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Ionicons name="ios-game-controller-outline" style={style.icon} />
          <Text style={style.textButton}>Gaming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons
            name="view-gallery-outline"
            style={style.icon}
          />
          <Text style={style.textButton}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Octicons name="device-camera-video" style={style.icon} />
          <Text style={style.textButton}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <SimpleLineIcons name="envelope-letter" style={style.icon} />
          <Text style={style.textButton}>Messages</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={style.hr} /> */}
      <View style={style.containerMenu}>
        <Text style={style.subtitle}>Others</Text>

        <TouchableOpacity style={style.button}>
          <AntDesign name="addfolder" style={style.icon} />
          <Text style={style.textButton}>Tutorials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons
            name="notebook-edit-outline"
            style={style.icon}
          />
          <Text style={style.textButton}>Courses</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default LeftBar;
