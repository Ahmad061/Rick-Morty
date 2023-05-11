import React from "react";
import MortyPhoto from "../images/Morty_Smith.png";

function Morty() {
  return (
    <div className="Morty">
      <img className="Morty-img" src={MortyPhoto} alt="Morty" />
    </div>
  );
}

export default Morty;
