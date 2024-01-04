import { StyleSheet } from "react-native";

const registerStyle = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a6ea5",
    height: "100%",
    gap: 25,
  },
  title: {
    color: "#ebebeb",
    fontSize: 25,
    fontWeight: "500",
  },
  containerInputs: {
    display: "flex",
    gap: 20,
    width: "80%",
  },
  input: {
    backgroundColor: "#ebebeb",
    color: "#c0c0c0",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#f79d65",
    width: "50%",
    padding: 10,
    borderRadius: 15,
  },
  textButton: {
    color: "#ebebeb",
    textAlign: "center",
    fontWeight: "800",
  },
  containerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textAccount: {
    color: "#ffdac6",
  },
});

export default registerStyle;
