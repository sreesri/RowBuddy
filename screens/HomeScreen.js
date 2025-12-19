import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";
import FloatingButton from "../components/FloatingButton";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const projects = await AsyncStorage.getItem("projects");
      if (projects) {
        setData(JSON.parse(projects));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  async function handleSaveProject(projectName) {
    try {
      const newProject = {
        id: Date.now().toString(),
        name: projectName,
      };
      const updatedProjects = [...data, newProject];
      await AsyncStorage.setItem("projects", JSON.stringify(updatedProjects));
      setData(updatedProjects);
    } catch (error) {
      console.error("Error saving project:", error);
    }
  }

  function toggleProjectModal() {
    setVisible(!visible);
  }

  function renderProjectCard(projectdata) {
    return (
      <ProjectCard name={projectdata.item.name} id={projectdata.item.id} />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FloatingButton onPress={toggleProjectModal} />
      <ProjectModal
        visible={visible}
        toggleVisibility={toggleProjectModal}
        onSaveProject={handleSaveProject}
      />
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
