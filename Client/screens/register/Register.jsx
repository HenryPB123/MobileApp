import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import style from "./registerStyle.js";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}>SING UP</Text>
      <View style={style.containerInputs}>
        <TextInput style={style.input} placeholder="Email" />
        <TextInput style={style.input} placeholder="Name" />
        <TextInput style={style.input} placeholder="Username" />
        <TextInput style={style.input} placeholder="Password" />
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.textButton}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <View style={style.containerText}>
        <Text>Do you already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={style.textAccount}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
