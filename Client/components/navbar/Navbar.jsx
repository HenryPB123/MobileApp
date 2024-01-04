import { View, Text, TextInput, Image } from "react-native";
import React from "react";
//Style
import style from "./navbarStyle.js";

//Icons
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <Image
          source={require("../../assets/huella.png")}
          style={style.img}
        ></Image>
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
        <Image
          source={{
            uri: "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={style.imgPro}
        ></Image>
      </View>
    </View>
  );
};

export default Navbar;
