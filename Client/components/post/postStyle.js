import { StatusBar, StyleSheet } from "react-native";

const postStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    gap: 5,
    // flex: 1,
  },

  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3A7CA5",
    borderRadius: 5,
  },
  icon: {
    fontSize: 30,
    color: "orange",
    paddingEnd: 5,
  },
  iconItem: {
    fontSize: 20,
    color: "orange",
    paddingEnd: 4,
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
    alignItems: "center",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    objectFit: "cover",
  },
  details: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  date: {
    fontSize: 12,
    color: "lightgray",
  },
  hr: {
    height: 1,
    backgroundColor: "orange",
  },

  content: {
    margin: 5,
    gap: 10,
  },
  img: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  info: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 20,
    padding: 5,
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 5,
    fontSize: 14,
  },
});

export default postStyle;
