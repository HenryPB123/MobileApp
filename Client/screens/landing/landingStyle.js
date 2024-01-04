import { StyleSheet } from "react-native";
import React from "react";

const landingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
    gap: 10,
  },
  bg: { flex: 1, justifyContent: "center", height: "100%" },
  imgBg: { flex: 1, justifyContent: "center" },
  img: { width: "80%", height: "35%" },
  text: {
    color: "#004e98",
    fontSize: 40,
    fontWeight: "800",
  },
  text2: {
    color: "#3a6ea5",
    fontSize: 20,
    fontWeight: "500",
    width: "50%",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#3a6ea5",
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  textButton: {
    color: "#ebebeb",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default landingStyle;
