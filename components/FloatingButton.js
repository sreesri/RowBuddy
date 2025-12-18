import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZE } from "../constants";
import { Plus } from "lucide-react-native";

const FloatingButton = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Plus color={COLORS.primary} size={50} strokeWidth={3} />
    </Pressable>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 60,
    width: 60,
    borderColor: COLORS.secondary,
    borderRadius: SIZE.borderRadius,
    borderWidth: SIZE.borderSize,
    backgroundColor: COLORS.ascent,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});
