import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TaskItem = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.indexWrapper}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskWrapper}>
        <Text style={styles.task}>{props.task}</Text>
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={18}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  indexWrapper: {
    backgroundColor: "#010101",
    borderRadius: 14,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
  },
  index: {
    color: "#fff",
    fontSize: 22,
  },
  taskWrapper: {
    backgroundColor: "#010101",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 52,
  },
  task: {
    color: "#fff",
    width: "95%",
    fontSize: 18,
  },
  delete: {
    marginLeft: 12,
  },
});

export default TaskItem;
