import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,

} from "react-native";

const TaskInputField = (props) => {

  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <TextInput
        style={styles.inputField}
        value={props.input}
        onChangeText={(text) => props.setInput(text)}
        placeholder={"Filter tasks"}
        placeholderTextColor={"white"}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "white",
    width: 500,
    backgroundColor: "#010101",
    borderWidth: 1,
    marginHorizontal: 22,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 22,
  },
  inputField: {
    color: "white",
    height: 60,
    flex: 1,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskInputField;
