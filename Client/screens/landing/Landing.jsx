import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import style from "./landingStyle.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    // <ImageBackground
    //   source={{
    //     uri: "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   }}
    //   resizeMode="cover"
    //   style={style.bg}
    //   styleImage={style.imgBg}
    // >
    <View style={style.container}>
      <Text style={style.text}>SocialWorldPet</Text>
      <Image
        source={require("../../assets/huella.png")}
        style={style.img}
        // style={styled.container}
        // imageStyle={styled.img}
      ></Image>
      <Text style={style.text2}>All you need is a pet friend</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.textButton}>Start the Experience</Text>
      </TouchableOpacity>
    </View>
    // </ImageBackground>
  );
};

export default Landing;
