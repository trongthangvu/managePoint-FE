// UserContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userInforLocal } from "../../services/local.service";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await userInforLocal.get();
      setUserData(user);
    };

    fetchUserData();
  }, []);

  const login = async (user) => {
    await userInforLocal.set(user);
    setUserData(user);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("access_token");
    await userInforLocal.remove();
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
