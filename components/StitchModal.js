import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, SIZE } from "../constants";
import SaveAndCancel from "./SaveAndCancel";

const StitchModal = ({ visible, toggleVisibility }) => {
  function handleSave() {
    console.log("sdfds");

    toggleVisibility();
  }

  function handleCancel() {
    console.log("sdfsfdfg");

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
          <TextInput style={styles.input} textAlign="center" value="ABCD" />
          <Text style={styles.heading}>End Count</Text>
          <TextInput style={styles.input} textAlign="center" value="ABCD" />
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
