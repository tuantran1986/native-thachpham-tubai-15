import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListToDo from "./ListToDo";

const initTodos: string[] = [];

export default function AppBai22KhongDungUseCallbackMemo() {
  const [todos, setTodos] = useState(initTodos);
  const [count, setCount] = useState(0);

  // ---------- component render ----------
  const addTodo = () => {
    setTodos([...todos, "NEW TODO"]);
  };

  // ---------- component render ----------
  console.log("COMPONENT - 'CHA' = AppBai22KhongDungUseCallbackMemo - RENDER");
  return (
    <>
      <Text>....... Danh sach Todo .......</Text>
      <ListToDo todos={todos} addTodo={addTodo} style={styles.listStyle} />
      <Button
        title="coponent CHA: tăng COUNT - RENDER LẠI CHA"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  listStyle: {
    margin: 10,
  },
});
