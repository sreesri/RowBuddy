import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZE } from "../constants";
import SaveAndCancel from "./SaveAndCancel";

const ProjectModal = ({ visible, toggleVisibility, onSaveProject }) => {
  const [projectName, setProjectName] = useState("");

  function handleSave() {
    if (projectName.trim()) {
      onSaveProject(projectName);
      setProjectName("");
      toggleVisibility();
    }
  }

  function handleCancel() {
    setProjectName("");
    toggleVisibility();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      backdropColor={COLORS.backdropColor}
      transparent={false}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.heading}>Project Name</Text>
          <TextInput
            style={styles.input}
            textAlign="center"
            placeholder="Enter project name"
            placeholderTextColor={COLORS.primary}
            value={projectName}
            onChangeText={setProjectName}
          />
          <SaveAndCancel onSave={handleSave} onCancel={handleCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default ProjectModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.ascent,
    width: "80%",
    height: "25%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: SIZE.modalHeading,
    color: COLORS.secondary,
  },
  input: {
    backgroundColor: COLORS.secondary,
    width: "85%",
    borderRadius: 5,
    margin: 5,
    color: COLORS.primary,
    fontSize: 18,
  },
});
