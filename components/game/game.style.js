import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

// TODO harmoniser entre styles et style (singulier vs pluriel)
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

  nextBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 200,
    padding: 10,
    borderRadius: 9,
    backgroundColor: '#3939A6',
    flex:1,
    flexDirection: "row",
  },

  nextIcon: {
    width: 30,
    height: 30,
    tintColor: '#83D2EC'
  },

  nextBtnText: {
    textAlign: 'center',
    color: '#83D2EC',
    fontSize: SIZES.medium,
    flex:1,
  }
});

export default styles;