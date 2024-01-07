import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useAnimatedValue,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

//style
import style from "./postStyle.js";

//components
import Comments from "../comments/Comments.jsx";

//Icons
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);
  const navigation = useNavigation();

  // const liked = false;
  const liked = true;
  return (
    <View style={style.container}>
      <View style={style.user}>
        <View style={style.userInfo}>
          <Image style={style.profilePic} source={{ uri: post.profilePic }} />
          <TouchableOpacity style={style.details}>
            <Text style={style.name}>{post.name}</Text>
            <Text style={style.date}>1 Min Ago</Text>
          </TouchableOpacity>
          <Feather name="more-horizontal" style={style.icon} />
        </View>
      </View>

      <View style={style.hr} />

      <View style={style.content}>
        <Text>{post.description}</Text>
        {post.img && <Image style={style.img} source={{ uri: post.img }} />}
      </View>

      <View style={style.info}>
        <View style={style.item}>
          {liked ? (
            <MaterialIcons name="favorite" style={style.iconItem} />
          ) : (
            <MaterialIcons name="favorite-outline" style={style.iconItem} />
          )}
          <Text>12</Text>
          <Text>Likes</Text>
        </View>
        <TouchableOpacity
          style={style.item}
          onPress={() => setOpenComment(!openComment)}
        >
          <MaterialCommunityIcons
            name="comment-processing-outline"
            style={style.iconItem}
          />
          <Text> 12 Comments</Text>
        </TouchableOpacity>
        <View style={style.item}>
          <AntDesign name="sharealt" style={style.iconItem} />
          <Text>Share</Text>
        </View>
      </View>
      {openComment && <Comments />}
    </View>
  );
};

export default Post;
