import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
type TodoProps = {
  todos: string[];
  addTodo: any;
};
function ListToDo(todoProps: TodoProps) {
  const { todos, addTodo } = todoProps;
  // ---------- component render ----------
  console.log("COMPONENT - 'CON' = ListToDo - RENDER");
  return (
    <View style={styles.container}>
      {todos.map((todo: string, index: number) => (
        <View key={`${todo}-${index}`}>
          <Text>{todo}</Text>
        </View>
      ))}
      <View style={styles.spaceBlock}></View>
      <Button
        title="component CON - ADD TODO vào STATE CHA"
        onPress={() => {
          addTodo();
        }}
      />
      <View style={styles.spaceBlock}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  spaceBlock: {
    margin: 10,
  },
});

// GIẢI PHÁP - phần 2 = "cache lại COMPONENT CON" = MEMO của REACT
export default memo(ListToDo);
