import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResolveAuthScreen from "./screens/ResolveAuthScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";

const Stack = createStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResolveAuthScreen"
        component={ResolveAuthScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          header: () => {
            null;
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{
          header: () => {
            null;
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
