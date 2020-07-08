import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { setNavigator } from "./navigationRef";
import { Context as AuthContext } from "./context/AuthContext";

import { AuthStack } from "./AuthStack";
import { MainStack } from "./MainStack";
import AppTabs from "./AppTabs";

export const Routes = ({}) => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      {state.token != null ? (
        <AppTabs>
          <MainStack />
        </AppTabs>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
