import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import style from "./commentStyle.js";

const Comment = ({ comment }) => {
  return (
    <View style={style.commentContainer}>
      <ScrollView style={style.comment} key={comment.id}>
        <View style={style.info}>
          <Image source={{ uri: comment.profilePicture }} style={style.img} />
          <Text style={style.name}>{comment.name}</Text>
          <Text style={style.date}>1 hour ago</Text>
        </View>
        <Text style={style.description}>{comment.desc}</Text>
      </ScrollView>
    </View>
  );
};

export default Comment;
