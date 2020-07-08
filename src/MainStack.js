import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./screens/AccountScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";

const Stack = createStackNavigator();

export const MainStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="TrackListScreen">
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
      <Stack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};
