import { StyleSheet } from "react-native";

const commentStyle = StyleSheet.create({
  commentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  comment: {
    flex: 1,
    margin: 10,
    display: "flex",
    // justifyContent: "space-between",
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

export default commentStyle;
