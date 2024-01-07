import { StyleSheet } from "react-native";

const commentStyle = StyleSheet.create({
  comment: {
    // flex: 1,
    margin: 5,
    display: "flex",
    gap: 5,
    backgroundColor: "#2a6f97",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
  },
  info: {
    backgroundColor: "white",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    gap: 15,
    alignItems: "center",
  },
  img: {
    width: 24,
    height: 24,
    borderRadius: 12,
    objectFit: "cover",
  },
  name: {
    fontWeight: "500",
    fontSize: 15,
  },
  date: {
    color: "orange",
    fontSize: 12,
  },
  description: {
    textAlign: "justify",
    color: "white",
  },
});

export default commentStyle;
