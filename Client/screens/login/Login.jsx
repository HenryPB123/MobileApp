import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import style from "./loginStyle.js";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  //!---------------------------PENDIENTE
  const user = true;
  // const user = false;
  const ProtectedRoute = () => {
    if (user === false) {
      return navigation.navigate("Register");
    }
    return navigation.navigate("Home");
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>SING IN</Text>
      <View style={style.containerInputs}>
        <TextInput style={style.input} placeholder="Username" />
        <TextInput style={style.input} placeholder="Password" />
      </View>
      <Text>Forgot password?</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => ProtectedRoute()}
        // onPress={() => navigation.navigate("Home")}
      >
        <Text style={style.textButton}>LOG IN</Text>
      </TouchableOpacity>
      <View style={style.containerText}>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={style.textAccount}>Create new acoount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
