import { View } from "react-native";
import React from "react";

//styles
import style from "./homeStyle.js";

//Components
import Stories from "../../components/storiess/Stories.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <View>
      <Navbar />
      <View style={style.container}>
        <Stories />
        <Posts />
      </View>
    </View>
  );
};

export default Home;
