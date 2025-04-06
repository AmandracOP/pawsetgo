import React, { useEffect } from "react";
import { StyleSheet, StatusBar as Sb, Platform, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainNavigations from "./navigations/MainNavigations";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; // fallback for font loading

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    // Add more fonts if needed
  });

  useEffect(() => {
    if (Platform.OS === "android") {
      import("expo-navigation-bar")
        .then((NavigationBar) => {
          NavigationBar.setBackgroundColorAsync("white");
          // NavigationBar.setButtonStyleAsync("dark"); // optional
        })
        .catch((err) => {
          console.error("Failed to load expo-navigation-bar:", err);
        });
    } else if (Platform.OS === "ios") {
      console.log("iOS platform detected");
    } else if (Platform.OS === "web") {
      console.log("Web platform detected");
      document.body.style.backgroundColor = "#ffffff";
    }
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Sb animated={true} barStyle="dark-content" />
      <MainNavigations />
    </Provider>
  );
}

// ✅ Example style using Platform safely
const styles = StyleSheet.create({
  subText: {
    position: "absolute",
    bottom: 10,
    right: Platform.OS === "android" ? 15 : 12,
    color: "#aaa",
    fontFamily: "Nunito-Bold",
    fontSize: 16,
  },
});