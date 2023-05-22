/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../layouts/header";
import "../styles/App.css";
import { Container } from "@mui/material";
import Menu from "./menu";

function App() {
  //-------------------- return -------------------\\
  return (
    <>
      <Header />

      <div className="App">
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <Menu />
        </Container>
      </div>
    </>
  );
}

export default App;
