import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListToDo from "./ListToDo";

const initTodos: string[] = [];

export default function AppBai23UseCallbackMemo() {
  const [todos, setTodos] = useState(initTodos);
  const [count, setCount] = useState(0);

  // ---------- component render ----------

  // const addTodo = () => {
  //   setTodos([...todos, "NEW TODO"]);
  // };

  // GIẢI PHÁP - phần 1 = "cache lại FUNCTION" = USE-CALLBACK của REACT
  const addTodo = useCallback(() => {
    setTodos([...todos, "NEW TODO"]);
  }, [todos]);

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
