import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  profile: {
    padding: 10,
    flex: 1,
  },
  images: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  cover: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    objectFit: "cover",
    position: "absolute",
    // left: 0,
    end: 70,
    start: 70,
    // margin: "auto",
    top: 200,
  },
  profileContainer: {
    margin: 20,
  },
  userInfo: {
    height: 25,
    padding: 20,
    paddingTop: 90,
    borderRadius: 20,
    // background-color: themed("bg");
    // color: themed("textColor");
    padding: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {},
  icon: {},
  center: {},
  titleCenter: {},
  info: {},
  item: {},
  textCenter: {},
  button: {},
  textButton: {},
  right: {},
});

export default profileStyle;
