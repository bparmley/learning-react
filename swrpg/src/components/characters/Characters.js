import React from "react";

import CharacterSummary from "./CharacterSummary";

const Characters = (props) => {
  const charactersData = props.charactersData;

  return (
    <article className="character-list">
      <CharacterSummary
        charName={charactersData[0].charName}
        charRace={charactersData[0].charRace}
        charClass={charactersData[0].charClass}
        key={charactersData[0].id}
      />
      <CharacterSummary
        charName={charactersData[1].charName}
        charRace={charactersData[1].charRace}
        charClass={charactersData[1].charClass}
        key={charactersData[1].id}
      />
      <CharacterSummary
        charName={charactersData[2].charName}
        charRace={charactersData[2].charRace}
        charClass={charactersData[2].charClass}
        key={charactersData[2].id}
      />
      <CharacterSummary
        charName={charactersData[3].charName}
        charRace={charactersData[3].charRace}
        charClass={charactersData[3].charClass}
        key={charactersData[3].id}
      />
    </article>
  );
};

export default Characters;
