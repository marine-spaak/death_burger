import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({

  titleContainer: {
    width: "100%",
    marginBottom: 25,
    alignItems: "center",
  },

  largeText: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },

  titleLogo: {
    width: 100,
    height: 100,
  },
});

export default styles;