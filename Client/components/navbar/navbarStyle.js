import { StyleSheet } from "react-native";

const navbarStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#2F6690",
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
  textTitle: {
    color: "#fca311",
    fontWeight: "900",
  },
  img: {
    width: 30,
    height: 30,
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
    backgroundColor: "#EBEBEB",
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
    color: "orange",
    // color: "#022B3A",
  },
  iconHome: {
    fontSize: 28,
    color: "orange",
    // color: "#022B3A",
  },
});

export default navbarStyle;
