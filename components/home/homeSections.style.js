import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    padding: 10,
    borderRadius:10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: COLORS.gray2,
  },

  container: {
    width: "100%",
    padding: 10,
    marginBottom: 25,
  },

  titleText: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },

  text: {
  },

  playBtn: {
    marginTop: 10,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },

  alainContainer: {
    alignSelf: "flex-start",
    marginTop: 10,
    flex:1,
    flexDirection: "row",
  },

  alainPicture: {
    width: 160,
    height: 160,
  },

  alainText: {
    flex:1,
    paddingLeft: 20,
  },

  alainParagraph: {
    marginBottom: 10,
  },

  alainContactBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },

  alainContactText: {
    textAlign: "center",
    color: COLORS.lightWhite,
    padding: 5,
  },
});

export default styles;