import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import userContext from "./context/context";

import NavBar from "./components/NavBar";

export default function App() {
  const [currUser, setCurrUser] = useState({});

  return (
    <userContext.Provider value={{ currUser, setCurrUser }}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </userContext.Provider>
  );
}
