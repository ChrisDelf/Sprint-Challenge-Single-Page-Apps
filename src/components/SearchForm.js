import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })

  ///---------------Making the Api request
// const [character, setCharacter] = useState({})
//
//
//  useEffect(() => {
//        axios
//      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
//       .then(response => {
//       console.log(response)
//         setCharacter(response.data.results)
//
//       })
//   }, [])
//
let didSearch = false


  const handleInputChange = (event) => {
    console.log(event)
    setQuery({ ...query, name: event.target.value })
    let didSearch = true

  }

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
