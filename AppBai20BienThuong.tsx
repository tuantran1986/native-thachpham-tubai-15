import { StyleSheet, Text, TextInput, View } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";

// ====== App = BAI 20-1 = "ĐẾM SỐ LẦN RENDER" = "BIẾN THƯỜNG" là bị "SAI" ======
export default function AppBai20BienThuong() {
  // 1. sử dụng BIẾN STATE: khi thay đổi - sẽ làm COMPONENT RENDER LẠI, vẫn lưu được VALUE sau mỗi lần render
  // 2. sử dụng BIẾN THƯỜNG: khi thay đổi - không làm COMPONENT RENDER LẠI, sẽ bị RESET VALUE - khi COMPONENT RENDER LẠI
  // 3. sử dụng BIẾN REF = (STATE + BIẾN THƯỜNG): khi thay đổi - không làm COMPONENT RENDER LẠI, vẫn lưu được VALUE sau mỗi lần render
  // nhận xét: biến REF = ở giữa - trung hòa 2 biến (STATE + BIẾN THƯỜNG)

  let count = 0; // "BIẾN THƯỜNG là SAI": - bị RESET sau mỗi lần RENDER LẠI
  const [valueInput, setValueInput] = useState<string>("");

  useEffect(() => {
    count++;
  }, [valueInput]);

  return (
    <View style={styles.container}>
      <Text>SỐ LẦN RENDER: {count}</Text>
      <TextInput
        style={styles.inputtxt}
        value={valueInput}
        onChange={(e) => setValueInput(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputtxt: {
    backgroundColor: "gray",
    width: "80%",
  },
});
