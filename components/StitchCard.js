import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZE } from "../constants";
import { Minus, Plus } from "lucide-react-native";

const StitchCard = ({ name, totalCount, currentCount }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.countContainer}>
        <View style={styles.incrementContainer}>
          <Minus />
        </View>
        <View style={styles.currentCountContainer}>
          <Text style={styles.text1}>{currentCount}</Text>
        </View>
        {totalCount ? (
          <>
            <Text style={styles.text2}>of</Text>
            <View style={styles.currentCountContainer}>
              <Text style={styles.text1}>{totalCount}</Text>
            </View>
          </>
        ) : null}

        <View style={styles.incrementContainer}>
          <Plus />
        </View>
      </View>
    </View>
  );
};

export default StitchCard;

const styles = StyleSheet.create({
  rootContainer: {
    height: 150,
    backgroundColor: COLORS.ascent,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: COLORS.primary,
    fontSize: SIZE.modalHeading,
  },
  countContainer: {
    backgroundColor: COLORS.backdropColor,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  incrementContainer: {
    backgroundColor: COLORS.background,
    width: "60",
    height: "60",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    margin: 10,
  },
  currentCountContainer: {
    margin: 10,
    backgroundColor: COLORS.ripple,
    borderRadius: 5,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
  },
});
