import { StyleSheet } from "react-native";

const navbarStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#ebebeb",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 40,
    height: 40,
  },
  imgPro: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: "#fca311",
    objectFit: "contain",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f7f7ff",
    borderWidth: 0.5,
    borderColor: "#fca311",
    width: "40%",
    height: 30,
    alignItems: "center",
    borderRadius: 15,
    paddingStart: 5,
    gap: 5,
  },
  textInput: {
    fontSize: 14,
    color: "#004E98",
    fontWeight: "300",
    textAlign: "center",
  },
  icon: {
    fontSize: 20,
    color: "#004e98",
    // color: "#022B3A",
  },
});

export default navbarStyle;
