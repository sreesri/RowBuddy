import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Check, X } from "lucide-react-native";
import { COLORS, SIZE } from "../constants";

const SaveAndCancel = ({ onSave, onCancel }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.button} onPress={onCancel}>
        <X color="#E02404" size={50} strokeWidth={3} />
        <Text style={styles.text}>Cancel</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onSave}>
        <Check color="#A0CC44" size={50} strokeWidth={3} />
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
};

export default SaveAndCancel;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 120,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: COLORS.background,
  },
  text: {
    color: COLORS.primary,
    fontSize: SIZE.button,
  },
});
