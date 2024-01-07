import { StyleSheet } from "react-native";

const storiesStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  story: {
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
    width: 50,
    height: 70,
    borderWidth: 1,
    borderColor: "#012a4a",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  name: {
    position: "absolute",
    opacity: 0.6,
    padding: 0.6,
    paddingEnd: 2,
    paddingStart: 2,
    borderRadius: 6,
    bottom: 2,
    left: 4,
    color: "#022B3A",
    backgroundColor: "white",
    fontSize: 10,
    fontWeight: "600",
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
    // textAlign: "center",
  },
});

export default storiesStyle;
