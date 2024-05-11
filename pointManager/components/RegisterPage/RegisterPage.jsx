import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput style={styles.input} placeholder="Họ và tên" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry={true}
      />
      <Button title="Đăng ký" buttonStyle={styles.button} onPress={() => {}} />
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
    marginLeft: 20,
  },
});

export default RegisterPage;
