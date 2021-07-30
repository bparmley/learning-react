import React from "react";

const CharacterSummary = (props) => {
  return (
    <div className="character-list__character">
      <h3>{props.charName}</h3>
      <p>
        Race: {props.charRace}
        <br />
        Class: {props.charClass}
      </p>
    </div>
  );
};

export default CharacterSummary;
