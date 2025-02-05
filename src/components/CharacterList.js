import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {

        setCharacter(response.data.results)

      })
  }, [])
  return <section className='character-list grid-view'>

    {character.map(character => <CharacterCard key = {character.id} character= {character} />)}
    </section>

}
