import { StyleSheet } from "react-native";

const commentsStyle = StyleSheet.create({
  comments: {
    flex: 1,
    padding: 5,
    backgroundColor: "#dee2e6",
    borderRadius: 5,
  },
  commentContainer: {
    flex: 1,
    height: 300,
    borderRadius: 5,
  },

  write: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "#EBEBEB",
    padding: 3,
    borderRadius: 3,
  },
  profilePic: {
    width: 34,
    height: 34,
    borderRadius: 17,
    objectFit: "cover",
  },
  textInput: {
    backgroundColor: "white",
    color: "#004E98",

    flex: 5,
    padding: 4,
    borderRadius: 3,
    margin: 3,
  },
  button: {
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 3,
    width: 50,
  },
  textButton: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default commentsStyle;
