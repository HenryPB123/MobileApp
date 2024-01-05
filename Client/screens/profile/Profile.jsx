import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

//Styles
import style from "./profileStyle.js";

//components
import Posts from "../../components/posts/Posts.jsx";

const Profile = () => {
  return (
    <View style={style.profile}>
      <ScrollView>
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

        <View style={style.profileContainer}>
          <View style={style.userInfo}>
            <View style={style.left}>
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
              <Text style={style.titleCenter}>Name Pet</Text>
              <View style={style.info}>
                <View style={style.item}>
                  {/* <PlaceIcon /> */}
                  <Text style={style.textCenter}>USA</Text>
                </View>
                <View style={style.item}>
                  {/* <LanguageIcon /> */}
                  <Text style={style.textCenter}>Social-Pet</Text>
                </View>
              </View>
              <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={style.right}>
              {/* <MailOutlineIcon />
            <MoreVertIcon /> */}
            </View>
          </View>
        </View>
        <Posts />
      </ScrollView>
    </View>
  );
};

export default Profile;
