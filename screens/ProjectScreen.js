import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import FloatingButton from "../components/FloatingButton";
import StitchModal from "../components/StitchModal";
import StitchCard from "../components/StitchCard";

const ProjectScreen = () => {
  const [visible, setVisible] = useState(false);

  const data = [
    {
      name: "Stitch 1",
      id: 1,
      totalCount: 100,
      currentCount: 10,
    },
    {
      name: "Stitch 2",
      id: 2,
      totalCount: 100,
      currentCount: 10,
    },
    {
      name: "Stitch 3",
      id: 3,
      totalCount: 100,
      currentCount: 10,
    },
    {
      name: "Stitch 4",
      id: 4,
      currentCount: 10,
    },
  ];

  function toggleStitchModal() {
    setVisible(!visible);
  }

  function renderStitchCard(stitchData) {
    return (
      <StitchCard
        name={stitchData.item.name}
        totalCount={stitchData.item.totalCount}
        currentCount={stitchData.item.currentCount}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FloatingButton onPress={toggleStitchModal} />
      <StitchModal visible={visible} toggleVisibility={toggleStitchModal} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderStitchCard(item)}
      />
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingTop: 35,
    padding: 20,
  },
});
