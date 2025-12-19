import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";
import FloatingButton from "../components/FloatingButton";
import StitchModal from "../components/StitchModal";
import StitchCard from "../components/StitchCard";

const ProjectScreen = ({ route }) => {
  const { projectId, projectName } = route.params || {};
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (projectId) {
      fetchStitches(projectId);
    }
  }, [projectId]);

  async function fetchStitches(id) {
    try {
      const stitches = await AsyncStorage.getItem(`stitches_${id}`);
      if (stitches) {
        setData(JSON.parse(stitches));
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching stitches:", error);
    }
  }

  async function handleSaveStitch(stitchName, totalCount) {
    try {
      const newStitch = {
        id: Date.now().toString(),
        name: stitchName,
        totalCount: totalCount ? parseInt(totalCount) : null,
        currentCount: 0,
      };
      const updatedStitches = [...data, newStitch];
      await AsyncStorage.setItem(
        `stitches_${projectId}`,
        JSON.stringify(updatedStitches)
      );
      setData(updatedStitches);
    } catch (error) {
      console.error("Error saving stitch:", error);
    }
  }

  async function handleIncrementCount(stitchId) {
    try {
      const updatedStitches = data.map((stitch) =>
        stitch.id === stitchId
          ? { ...stitch, currentCount: stitch.currentCount + 1 }
          : stitch
      );
      await AsyncStorage.setItem(
        `stitches_${projectId}`,
        JSON.stringify(updatedStitches)
      );
      setData(updatedStitches);
    } catch (error) {
      console.error("Error incrementing count:", error);
    }
  }

  async function handleDecrementCount(stitchId) {
    try {
      const updatedStitches = data.map((stitch) =>
        stitch.id === stitchId
          ? { ...stitch, currentCount: Math.max(0, stitch.currentCount - 1) }
          : stitch
      );
      await AsyncStorage.setItem(
        `stitches_${projectId}`,
        JSON.stringify(updatedStitches)
      );
      setData(updatedStitches);
    } catch (error) {
      console.error("Error decrementing count:", error);
    }
  }

  function toggleStitchModal() {
    setVisible(!visible);
  }

  function renderStitchCard(stitchData) {
    return (
      <StitchCard
        id={stitchData.item.id}
        name={stitchData.item.name}
        totalCount={stitchData.item.totalCount}
        currentCount={stitchData.item.currentCount}
        onIncrement={handleIncrementCount}
        onDecrement={handleDecrementCount}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FloatingButton onPress={toggleStitchModal} />
      <StitchModal
        visible={visible}
        toggleVisibility={toggleStitchModal}
        onSaveStitch={handleSaveStitch}
      />
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
