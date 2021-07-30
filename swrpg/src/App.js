import React from 'react';
import Characters from './components/characters/Characters';

const characterList = [
  {id: 0, charName: 'Ryyka', charRace: 'Wookie', charClass: 'Brawler'},
  {id: 1, charName: 'Jahren', charRace: 'Chiss', charClass: 'Bounty Hunter'},
  {id: 2, charName: 'Lianna', charRace: 'Twilek', charClass: 'Entertainer'},
  {id: 3, charName: 'Sisu', charRace: 'Human', charClass: 'Smuggler'}
];

function App() {
  return (
    <Characters charactersData={characterList} />
  );
}

export default App;
