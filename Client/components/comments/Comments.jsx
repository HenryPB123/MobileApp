import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

//style
import style from "./commentsStyle.js";
import { useNavigation } from "@react-navigation/native";
import Comment from "../comment/Comment.jsx";

const Comments = () => {
  //Temporary
  const user = {
    name: "The Cat",
    profilePic:
      "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo velit incidunt aut cum numquam praesentium, dignissimos laborum qui aliquam a nam aspernatur laboriosam nulla consequatur nisi autem minima nemo.",
      name: "Name Pet",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo velit incidunt aut cum numquam praesentium, dignissimos laborum qui aliquam a nam aspernatur laboriosam nulla consequatur nisi autem minima nemo.",
      name: "Name Pet",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/977935/pexels-photo-977935.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo velit incidunt aut cum numquam praesentium, dignissimos laborum qui aliquam a nam aspernatur laboriosam nulla consequatur nisi autem minima nemo.",
      name: "Name Pet",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo velit incidunt aut cum numquam praesentium, dignissimos laborum qui aliquam a nam aspernatur laboriosam nulla consequatur nisi autem minima nemo.",
      name: "Name Pet",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/977935/pexels-photo-977935.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo velit incidunt aut cum numquam praesentium, dignissimos laborum qui aliquam a nam aspernatur laboriosam nulla consequatur nisi autem minima nemo.",
      name: "Name Pet",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const navigation = useNavigation();
  return (
    <View style={style.comments}>
      <View style={style.write}>
        <Image source={{ uri: user.profilePic }} style={style.profilePic} />
        <TextInput
          type="text"
          placeholder="Write a comment..."
          style={style.textInput}
        />
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>SEND</Text>
        </TouchableOpacity>
      </View>
      <View style={style.commentContainer}>
        <ScrollView>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Comments;
