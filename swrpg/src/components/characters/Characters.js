import React from "react";

import CharacterSummary from "./CharacterSummary";

const Characters = (props) => {
  return (
    <article className="character-list">
      <CharacterSummary
        charName={props[0].charName}
        charRace={props[0].charRace}
        charClass={props[0].charClass}
        key={props[0].id}
      />
      <CharacterSummary
        charName={props[1].charName}
        charRace={props[1].charRace}
        charClass={props[1].charClass}
        key={props[1].id}
      />
      <CharacterSummary
        charName={props[2].charName}
        charRace={props[2].charRace}
        charClass={props[2].charClass}
        key={props[2].id}
      />
      <CharacterSummary
        charName={props[3].charName}
        charRace={props[3].charRace}
        charClass={props[3].charClass}
        key={props[3].id}
      />
    </article>
  );
};

export default Characters;
