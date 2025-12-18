import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import FloatingButton from "../components/FloatingButton";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const data = [
    {
      name: "Project 1",
      id: 1,
    },
    {
      name: "Project 2",
      id: 2,
    },
    {
      name: "Project 3",
      id: 3,
    },
    {
      name: "Project 4",
      id: 4,
    },
    {
      name: "Project 5",
      id: 5,
    },
    {
      name: "Project 6",
      id: 6,
    },
    {
      name: "Project 7",
      id: 7,
    },
    {
      name: "Project 8",
      id: 8,
    },
    {
      name: "Project 9",
      id: 9,
    },
  ];

  function toggleProjectModal() {
    setVisible(!visible);
  }

  function renderProjectCard(projectdata) {
    return <ProjectCard name={projectdata.item.name} />;
  }

  return (
    <View style={styles.rootContainer}>
      <FloatingButton onPress={toggleProjectModal} />
      <ProjectModal visible={visible} toggleVisibility={toggleProjectModal} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderProjectCard(item)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingTop: 35,
    padding: 20,
  },
});
