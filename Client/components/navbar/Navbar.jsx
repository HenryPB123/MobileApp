import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//Style
import style from "./navbarStyle.js";

//Icons
import {
  FontAwesome,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <Image
          source={require("../../assets/huella.png")}
          style={style.img}
        ></Image>
        {/* <Text style={style.textTitle}>SWP</Text> */}
        <FontAwesome name="moon-o" style={style.icon} />
        <AntDesign name="appstore-o" style={style.icon} />
      </View>
      <View style={style.inputContainer}>
        <AntDesign name="search1" style={style.icon} />
        <TextInput style={style.textInput} placeholder="Search"></TextInput>
      </View>
      <View style={style.iconContainer}>
        <FontAwesome name="bell-o" style={style.icon} />
        <Feather name="mail" style={style.icon} />
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={style.imgPro}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
