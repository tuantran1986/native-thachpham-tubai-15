import { StyleSheet, Text, View } from "react-native";
import { createContext, useContext, useState } from "react";

// CYDB - B1: KHAI BÁO = createContext
const UserContext = createContext();

// ------------------ component ------------------
const AvatarComponent = () => {
  // CYDB - B3: LẤY VALUE ra = useContext
  const username = useContext(UserContext) as string;
  return (
    <View>
      <Text style={{ padding: 100 }}>
        AvatarComponent: username = {username}
      </Text>
    </View>
  );
};

// ------------------ component ------------------
const HeaderComponent = () => {
  return <AvatarComponent />;
};

// ------------------ component ------------------
const ProfileComponent = () => {
  return <HeaderComponent />;
};

// ====== AppBai19DungUseContext = BAI 19-2 = USE CONTEXT = không cần TRUYỀN QUA - PROPS ======
export default function AppBai19DungUseContext() {
  const [username, setUsername] = useState("USE_CONTEXT: tuantran1986");

  // CYDB - B2: SỬ DỤNG = { BỌC Provider , TRUYỀN value }
  return (
    <View>
      <UserContext.Provider value={username}>
        <ProfileComponent />
      </UserContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
  },
});
