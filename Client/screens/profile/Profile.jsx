import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

//Styles
import style from "./profileStyle.js";

//Icons
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

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
            <Entypo name="back" style={style.icons} />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-edit-outline"
              style={style.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="settings" style={style.icons} />
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
        {/* <View style={style.profileContainer}> */}
        <View style={style.userInfo}>
          <View style={style.left}>
            {/* <Entypo name="facebook-with-circle" size={24} color="black" /> */}
            {/* <a href="">
              <FacebookTwoToneIcon className="large" />
            </a>
            <a href="">
              <LinkedInIcon className="large" />
            </a>
            <a href="">
              <InstagramIcon className="large" />
            </a>
            <a href="">
              <PinterestIcon className="large" />
            </a>
            <a href="">
              <TwitterIcon className="large" />
            </a> */}
          </View>
          <View style={style.center}>
            {/* <Text style={style.titleCenter}>Name Pet</Text>
            <View style={style.info}>
              <View style={style.item}> */}
            {/* <PlaceIcon /> */}
            {/* <Text style={style.textCenter}>USA</Text>
              </View>
              <View style={style.item}> */}
            {/* <LanguageIcon /> */}
            {/* <Text style={style.textCenter}>Social-Pet</Text>
              </View>
            </View>
            <TouchableOpacity style={style.button}>
              <Text style={style.textButton}>Follow</Text>
            </TouchableOpacity> */}
          </View>
          <View style={style.right}>
            {/* <MailOutlineIcon />
            <MoreVertIcon /> */}
          </View>
        </View>
        {/* </View> */}

        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
