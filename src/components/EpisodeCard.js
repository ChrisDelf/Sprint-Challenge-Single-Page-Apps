import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react';

export default function EpisodeCard (props) {
   const episodeInfo = props.character


  return (

<div className="ui card">

  <div className="content">
    <a className="header">{episodeInfo.name}</a>
    <div className="meta">
    <span className="date">Date Created: {episodeInfo.created}</span>
    </div>
    <div className="description">
    <p>Date aired: {episodeInfo.air_date}</p>
    <p>Episode: {episodeInfo.episode}</p>

    </div>
  </div>
  <div className="extra content">
    <a herf = {episodeInfo.url}> Episode Link
      <i className="user icon"></i>

    </a>
  </div>
</div>







  )
}
