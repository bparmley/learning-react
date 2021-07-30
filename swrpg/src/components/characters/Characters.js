import React from 'react';

const Characters = props => {
  const charactersData = props.charactersData;

  return (
    <article className="character-list">
      <div className="character-list__character">
        <h3>{charactersData[0].charName}</h3>
        <p>Race: {charactersData[0].charRace}<br/>
        Class: {charactersData[0].charClass}</p>
      </div>
      <div className="character-list__character">
        <h3>{charactersData[1].charName}</h3>
        <p>Race: {charactersData[1].charRace}<br/>
        Class: {charactersData[1].charClass}</p>
      </div>
      <div className="character-list__character">
        <h3>{charactersData[2].charName}</h3>
        <p>Race: {charactersData[2].charRace}<br/>
        Class: {charactersData[2].charClass}</p>
      </div>
      <div className="character-list__character">
        <h3>{charactersData[3].charName}</h3>
        <p>Race: {charactersData[3].charRace}<br/>
        Class: {charactersData[3].charClass}</p>
      </div>
    </article>
  );
}

export default Characters;