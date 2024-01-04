import { StyleSheet } from "react-native";

const letfBarStyle = StyleSheet.create({
  container: {
    backgroundColor: "#e9ecef",
  },
  containerMenu: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#05668D",
    backgroundColor: "#f8f9fa",
    padding: 4,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 5,
    color: "#004E98",
    textAlign: "center",
  },
  hr: { backgroundColor: "orange", height: 1, margin: 2 },
  button: {
    backgroundColor: "#05668D",
    display: "flex",
    flexDirection: "row",
    margin: 2,
    padding: 5,
    gap: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  imgPro: {
    width: 30,
    height: 30,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: "#fca311",
    objectFit: "contain",
    marginLeft: 10,
  },
  textButton: {
    fontSize: 14,
    color: "#EBEBEB",
    fontWeight: "500",
  },
  icon: {
    marginLeft: 10,
    fontSize: 24,
    color: "orange",
  },
});

export default letfBarStyle;
