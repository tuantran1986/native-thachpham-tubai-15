import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const initialTodoList = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: true,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

// ====== App = BAI 21-1 = "TODOLIST" = "USE STATE" ======
// NHƯỢC ĐIỂM – USE STATE:
// •	có nhược điểm 1 = STATE nằm trên UI
// •	có nhược điểm 2 = logic xử lý STATE nằm trên UI
// •	có nhược điểm 3 = STATE không tập trung

export default function AppBai21TodoListUseState() {
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleComplete = (id) => {
    const newTodoList = todoList.map((elm) => {
      if (elm.id === id) {
        return { ...elm, complete: !elm.complete };
      } else {
        return elm;
      }
    });

    setTodoList(newTodoList);
  };

  // ---------- component render ----------
  return (
    <View style={styles.container}>
      {todoList.map((todo) => (
        <View key={todo.id} style={styles.itemTodo}>
          <Text style={styles.textItemTodo}>{todo.title}</Text>
          <Button
            style={styles.btnItemTodo}
            title={todo.complete ? "Hoàn thành" : "Chưa xong"}
            onPress={() => {
              handleComplete(todo.id);
            }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  itemTodo: {
    flexDirection: "row",
    margin: 5,
  },
  textItemTodo: {
    margin: 10,
  },
  btnItemTodo: {},
});
