/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../layouts/header";
import "../styles/App.css";
import { Container } from "@mui/material";
import Menu from "./menu";



function App() {


  //-------------------- return -------------------\\
  return (
    <div className="App">
      <Header />

      <Container maxWidth="xl">
        <Menu />
      </Container>
    </div>
  );
}

export default App;
