import React from "react";
import { StatusBar } from "expo-status-bar";

import { Home } from "./src/pages/home/home.screen";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
