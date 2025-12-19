import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, PROJECT_SCREEN, SIZE } from "../constants";
import { useNavigation } from "@react-navigation/native";

const ProjectCard = ({ name, id }) => {
  const navigate = useNavigation();

  function pressHandler() {
    navigate.navigate(PROJECT_SCREEN, { projectId: id, projectName: name });
  }
  return (
    <Pressable
      android_ripple={{ color: COLORS.ripple, foreground: true }}
      style={styles.pressable}
      onPress={pressHandler}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.ascent,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    overflow: "hidden",
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: SIZE.primary,
    color: COLORS.primary,
    fontWeight: 600,
  },
});
