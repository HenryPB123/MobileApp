import { StyleSheet } from "react-native";

const storiesStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: 150,
  },
  story: {
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    width: 50,
    height: 70,
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  textButton: {
    color: "#ebebeb",
    fontSize: 13,
    textAlign: "center",
  },
});

export default storiesStyle;
