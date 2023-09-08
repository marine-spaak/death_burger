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
});

export default styles;