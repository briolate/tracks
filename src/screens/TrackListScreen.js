import React, { useContext, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

const TrackListScreen = () => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(
    useCallback(() => {
      fetchTracks();
    }, [])
  );

  console.log(state);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackList</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate("TrackDetailScreen", { _id: item._id });
              }}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
