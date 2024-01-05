import { StyleSheet } from "react-native";

const commentsStyle = StyleSheet.create({
  comments: {
    padding: 5,
  },
  write: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    margin: 5,
  },
  profilePic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    objectFit: "cover",
  },
  textInput: {
    backgroundColor: "gray",
    color: "white",
    flex: 5,
    padding: 5,
    borderRadius: 3,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 3,
  },
  textButton: {
    color: "blue",
  },
  comment: {
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
  },
  info: {
    paddingLeft: 10,
    flex: 5,
    display: "flex",
    flexDirection: "row",

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
    color: "gray",
  },
  description: {
    textAlign: "justify",
  },
});

export default commentsStyle;
