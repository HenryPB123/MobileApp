import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
  profile: {
    padding: 10,
    flex: 1,
  },
  containerViewIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2F6690",
    padding: 10,
  },
  icons: {
    color: "orange",
    fontSize: 25,
    fontWeight: "500",
  },

  images: {
    width: "100%",
    height: 220,
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
    top: 130,
  },
  // profileContainer: {
  //   margin: 5,
  //   backgroundColor: "red",
  //   display: "flex",
  //   flexDirection: "row",
  // },
  userInfo: {
    height: 150,
    margin: 5,
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 5,
  },
  left: {
    flex: 1,
    backgroundColor: "blue",
    height: 100,
  },
  icon: {},
  center: {
    flex: 1,
    backgroundColor: "pink",
    height: 100,
  },
  titleCenter: {},
  info: {},
  item: {},
  textCenter: {},
  button: {},
  textButton: {},
  right: {
    flex: 1,
    height: 100,
    backgroundColor: "yellow",
  },
});

export default profileStyle;
