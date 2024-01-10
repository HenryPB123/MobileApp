import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Friends = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#adb5bd",
      }}
    >
      <FontAwesome5
        name="user-friends"
        style={{ fontSize: 100, color: "orange" }}
      />
      <Text style={{ fontSize: 50, color: "#004E98" }}>My Friends</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#3A6EA5",
          padding: 15,
          width: 120,
          borderRadius: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
          Back
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Friends;
