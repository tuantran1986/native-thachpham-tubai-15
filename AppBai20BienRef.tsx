import { StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useRef, useState } from "react";

// ====== App = BAI 20-2 = "ĐẾM SỐ LẦN RENDER" = "BIẾN REF" là "ĐÚNG" ======
export default function AppBai20BienRef() {
  // 1. sử dụng BIẾN STATE: khi thay đổi - sẽ làm COMPONENT RENDER LẠI, vẫn lưu được VALUE sau mỗi lần render
  // 2. sử dụng BIẾN THƯỜNG: khi thay đổi - không làm COMPONENT RENDER LẠI, sẽ bị RESET VALUE - khi COMPONENT RENDER LẠI
  // 3. sử dụng BIẾN REF = (STATE + BIẾN THƯỜNG): khi thay đổi - không làm COMPONENT RENDER LẠI, vẫn lưu được VALUE sau mỗi lần render
  // nhận xét: biến REF = ở giữa - trung hòa 2 biến (STATE + BIẾN THƯỜNG)

  // let count = 0;      // "BIẾN THƯỜNG là SAI" - bị RESET sau mỗi lần RENDER LẠI
  const count = useRef(0); // "BIẾN REF là ĐÚNG" - giữ đc value sau mỗi lần RENDER
  const [valueInput, setValueInput] = useState<string>("");

  useEffect(() => {
    console.log("---------- chay useEffect ----------");
    count.current += 1;
  }, [valueInput]);

  console.log("---------- component render ----------");
  return (
    <View style={styles.container}>
      {/* USE REF - lấy ra value = CURRENT */}
      <Text>SỐ LẦN RENDER: {count.current}</Text>
      {/* <Text>SỐ LẦN RENDER: {count}</Text> */}
      <TextInput
        style={styles.inputtxt}
        value={valueInput}
        onChangeText={(e) => setValueInput(e)} // ĐÚNG
        // SAI: onChange={(e) => setValueInput(e)}
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
