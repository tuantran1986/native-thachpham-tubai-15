import { Button, StyleSheet, Text, View } from "react-native";
import { useReducer } from "react";

interface TodoType {
  id: number;
  title: string;
  complete: boolean;
}
interface ActionType {
  type: string;
  id: number;
}

const initialTodoList = [
  {
    id: 1,
    title: "Todo Reducer - 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo Reducer - 2",
    complete: true,
  },
  {
    id: 3,
    title: "Todo Reducer - 3",
    complete: false,
  },
];

// •	"CÓ ƯU ĐIỂM - 1" = QLY STATE TẬP TRUNG
const reducer = (state: TodoType[], action: ActionType) => {
  switch (action.type) {
    // •	"CÓ ƯU ĐIỂM - 2" = TÁCH ĐƯỢC LOGIC XỬ LÝ STATE
    case "CHANGE-STATUS":
      return state.map((elm) => {
        if (elm.id === action.id) {
          return { ...elm, complete: !elm.complete };
        } else {
          return elm;
        }
      });

    default:
      return state;
  }
};

// ====== App = BAI 21-2 = "TODOLIST" = "USE REDUCER" ======
// ƯU ĐIỂM – USE CALLBACK:
// •	"CÓ ƯU ĐIỂM - 1" = QLY STATE TẬP TRUNG
// •	"CÓ ƯU ĐIỂM - 2" = TÁCH ĐƯỢC LOGIC XỬ LÝ STATE
// •	"CÓ ƯU ĐIỂM - 3" = chỉ DISPATCH 1 tín hiệu lên REDUCER

export default function AppBai21TodoListUseReducer() {
  // const [todoList, setTodoList] = useState(initialTodoList);
  const [todoList, dispatch] = useReducer(reducer, initialTodoList);
  // const handleComplete = (id) => {
  //   const newTodoList = todoList.map((elm) => {
  //     if (elm.id === id) {
  //       return { ...elm, complete: !elm.complete };
  //     } else {
  //       return elm;
  //     }
  //   });
  //   setTodoList(newTodoList);
  // };
  const handleComplete = (id: number) => {
    // •	"CÓ ƯU ĐIỂM - 3" = chỉ DISPATCH 1 tín hiệu lên REDUCER
    // dispatch - [ ACTION = { type: any; id: any } ]
    dispatch({ type: "CHANGE-STATUS", id: id });
  };
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      {todoList.map((todo: TodoType) => (
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
