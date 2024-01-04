import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import style from "./storiesStyled.js";

const Stories = () => {
  const user = {
    name: "The Cat",
    profilePic:
      "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const stories = [
    {
      id: 1,
      name: "Pet Name",
      img: "https://images.pexels.com/photos/2013665/pexels-photo-2013665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Pet Name",
      img: "https://images.pexels.com/photos/2013665/pexels-photo-2013665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Pet Name",
      img: "https://images.pexels.com/photos/2013665/pexels-photo-2013665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Pet Name",
      img: "https://images.pexels.com/photos/2013665/pexels-photo-2013665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.story}>
        <Image source={{ uri: user.profilePic }} style={style.img} />
        <Text>{user.name}</Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      {stories.map((story) => (
        <View key={story.id} style={style.story}>
          <Image source={{ uri: story.img }} style={style.img} />
          <Text>{story.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Stories;
