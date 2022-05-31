import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TaskInputField from "./components/TaskInputField";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState(["titta fotboll", "handla mat", "träna", "plugga"]);
  const [input, setInput] = useState("");

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((index) => index != deleteIndex));
  };

  return (
    <View style={styles.wrapper}>
      <TaskInputField input={input} setInput={setInput} />
      <Text style={styles.heading}>TODO</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.filter(task => task.includes(input)).map((task, index) => {
          return (
            <View key={index} style={styles.taskWrapper}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#3A3B3C",
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 12,
    marginLeft: 22,
  },
  scrollView: {
    marginBottom: 72,
  },
  taskWrapper: {
    marginTop: 22,
  },
});
