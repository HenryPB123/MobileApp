import { StyleSheet } from "react-native";

const commentsStyle = StyleSheet.create({
  comments: {
    // flex: 1,
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
});

export default commentsStyle;
