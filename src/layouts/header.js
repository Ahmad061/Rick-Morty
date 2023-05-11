import React from "react";
import { history } from "../helpers";

function Header(props) {
  return (
    <header className="App-header centerization">
      <h2>Rick & Morty</h2>

      {props.backBtn ? (
        <button className="backBtn" onClick={() => history.push("/")}>
          back
        </button>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
