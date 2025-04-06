import { StyleSheet, Text, View, LogBox, StatusBar as Sb } from "react-native";
import React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Platform } from "react-native";
import MainNavigations from "./navigations/MainNavigations";

export default function App() {
  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync("white");
    // NavigationBar.setButtonStyleAsync("dark");
  }

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Sb animated={true} barStyle="dark-content" />
      <MainNavigations />
    </Provider>
  );
}

const styles = StyleSheet.create({});