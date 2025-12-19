import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZE } from "../constants";
import SaveAndCancel from "./SaveAndCancel";

const StitchModal = ({ visible, toggleVisibility, onSaveStitch }) => {
  const [stitchName, setStitchName] = useState("");
  const [totalCount, setTotalCount] = useState("");

  function handleSave() {
    if (stitchName.trim()) {
      onSaveStitch(stitchName, totalCount);
      setStitchName("");
      setTotalCount("");
      toggleVisibility();
    }
  }

  function handleCancel() {
    setStitchName("");
    setTotalCount("");
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
          <Text style={styles.heading}>Stitch Name</Text>
          <TextInput
            style={styles.input}
            textAlign="center"
            placeholder="Enter stitch name"
            placeholderTextColor={COLORS.primary}
            value={stitchName}
            onChangeText={setStitchName}
          />
          <Text style={styles.heading}>End Count (Optional)</Text>
          <TextInput
            style={styles.input}
            textAlign="center"
            placeholder="Enter total count"
            placeholderTextColor={COLORS.primary}
            value={totalCount}
            onChangeText={setTotalCount}
            keyboardType="numeric"
          />
          <SaveAndCancel onSave={handleSave} onCancel={handleCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default StitchModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.ascent,
    width: "400",
    height: "325",
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
    fontSize: 20,
  },
});
