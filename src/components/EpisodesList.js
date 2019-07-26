import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function LocationsList() {
 // TODO: Add useState to track data from useEffect
    const [episode, setEpisode] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
      console.log(response.data.results)
        setEpisode(response.data.results)

      })
  }, [])

  return <section className='character-list grid-view'>
    {episode.map(episode => <EpisodeCard key = {episode.id} character= {episode} />)}
    </section>

}
