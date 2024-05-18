import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { store } from "./store";
import { Provider } from "react-redux";
import GradesPage from "./pages/GradesPage/GradesPage";
import ForumCommentsPage from "./pages/ForumComment/ForumCommentPage";
import { UserProvider } from "./components/UserContext/UserContext.jsx";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Grades" component={GradesPage} />
            <Stack.Screen name="ForumComments" component={ForumCommentsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </Provider>
  );
};

export default App;
