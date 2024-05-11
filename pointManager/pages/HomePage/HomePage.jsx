// HomePage.js
import React from "react";
import { View } from "react-native";

import Footer from "../../components/Footer/Footer";
import UserNav from "../../components/Header/UserNav";
import Header from "../../components/Header/Header";
const HomePage = () => {
  return (
    <View>
      <Header />
      <UserNav />
      <Footer />
    </View>
  );
};

export default HomePage;
