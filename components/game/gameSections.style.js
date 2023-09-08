import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

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

  progressBar: {
    textAlign: "center",
    marginBottom: 25,
    marginTop: 10,
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: COLORS.gray,
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 5
  },

  titleText: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },

  questionText: {
  },
});

export default styles;