/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../layouts/header";
import "../styles/App.css";
import { Container } from "@mui/material";
import Menu from "./menu";

function App() {
  const [currentComponent, setCurrentComponent] = useState("App");
  const [backBtn, setBackBtn] = useState(false);

  useEffect(() => {
    if (currentComponent !== "App") {
      setBackBtn(true);
    } else if (currentComponent === "App" && backBtn) {
      setBackBtn(false);
    }
  }, [currentComponent]);

  const changeComponent = (component) => {
    setCurrentComponent(component);
  };

  //-------------------- return -------------------\\
  return (
    <>
      <Header />
      {backBtn ? (
        <button className="backBtn" onClick={() => changeComponent("App")}>
          Home
        </button>
      ) : (
        ""
      )}

      {currentComponent === "App" ? (
        <div className="App">
          <Container maxWidth="xl" sx={{ pt: 10 }}>
            <Menu onChangeComponent={changeComponent} />
          </Container>
        </div>
      ) : (
        currentComponent
      )}
    </>
  );
}

export default App;
