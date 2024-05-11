// UserNav.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const UserNav = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Đăng nhập"
        buttonStyle={styles.button}
        onPress={goToLogin}
      />
      <Button
        title="Đăng ký"
        buttonStyle={styles.button}
        onPress={goToRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "blue",
  },
  button: {
    width: 150,
    borderRadius: 10,
    backgroundColor: "brown",
  },
});

export default UserNav;
