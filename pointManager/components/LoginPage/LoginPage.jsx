import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";

const LoginPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput style={styles.input} placeholder="Tên người dùng" />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
      />
      <Button
        title="Đăng nhập"
        buttonStyle={styles.button}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    backgroundColor: "blue",
    marginLeft: 30,
  },
});

export default LoginPage;
