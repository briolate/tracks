import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackListScreen from "./screens/TrackListScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import AccountScreen from "./screens/AccountScreen";

const Tabs = createBottomTabNavigator();

const AppTabs = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Track List" component={TrackListScreen} />
      <Tabs.Screen name="Create Track" component={TrackCreateScreen} />
      <Tabs.Screen name="Account" component={AccountScreen} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
