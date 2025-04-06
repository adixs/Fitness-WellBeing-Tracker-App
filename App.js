import React from "react";
import { FitnessContextProvider } from "./Context";
import StackNavigator from "./StackNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <FitnessContextProvider>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <StackNavigator />
    </FitnessContextProvider>
  );
}
