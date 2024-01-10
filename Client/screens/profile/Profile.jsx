import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

//Styles
import style from "./profileStyle.js";

//Icons
import {
  Feather,
  FontAwesome5,
  Entypo,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

//components
import Posts from "../../components/posts/Posts.jsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.profile}>
      <ScrollView>
        <View style={style.containerViewIcons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" style={style.icons} />
          </TouchableOpacity>
          <Text style={style.textProfile}>Pet Name</Text>
          <TouchableOpacity style={style.buttonTitle}>
            <Text style={style.textButtonTitle}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={style.images}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/2004393/pexels-photo-2004393.jpeg?auto=compress&cs=tinysrgb&w=800",
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1612846/pexels-photo-1612846.jpeg?auto=compress&cs=tinysrgb&w=800",
            }}
            style={style.profilePic}
          />
        </View>
        <View style={style.userInfo}>
          <View style={style.left}>
            <Entypo name="facebook" style={style.iconLR} />
            <FontAwesome5 name="instagram-square" style={style.iconLR} />
          </View>
          <View style={style.center}>
            <View style={style.item}>
              <Entypo name="location-pin" style={style.iconCenter} />
              <Text style={style.iconTextCenter}>USA</Text>
            </View>
            <View style={style.item}>
              <Fontisto name="world-o" style={style.iconCenter} />
              <Text style={style.iconTextCenter}>myweb.com</Text>
            </View>
          </View>
          <View style={style.right}>
            <MaterialIcons name="email" style={style.iconLR} />
            <Feather name="more-vertical" style={style.iconLR} />
          </View>
        </View>

        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
