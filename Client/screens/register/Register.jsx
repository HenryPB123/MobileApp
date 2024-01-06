import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import style from "./registerStyle.js";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return (
    // <KeyboardAvoidingView
    //   style={{
    //     height: "100%",
    //     width: "100%",
    //     flex: 1,
    //   }}
    //   keyboardVerticalOffset={Platform.OS === "android" ? 0 : 45}
    //   behavior="padding"
    // >
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
    // </KeyboardAvoidingView>
  );
};

export default Register;
