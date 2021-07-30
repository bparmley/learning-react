import React from 'react';
import Characters from './components/characters/Characters';

const characterList = [
  {charName: 'Ryyka', charRace: 'Wookie', charClass: 'Brawler'},
  {charName: 'Jahren', charRace: 'Chiss', charClass: 'Bounty Hunter'},
  {charName: 'Lianna', charRace: 'Twilek', charClass: 'Entertainer'},
  {charName: 'Sisu', charRace: 'Human', charClass: 'Smuggler'}
];

function App() {
  return (
    <Characters charactersData={characterList} />
  );
}

export default App;
