import React from "react";
import { history } from "../helpers";

function Header(props) {
  return (
    <header className="App-header centerization">
      {props.backBtn ? (
        <button className="backBtn" onClick={() => history.goBack()}>
          Home
        </button>
      ) : (
        ""
      )}

      <h2>Rick & Morty</h2>
    </header>
  );
}

export default Header;
