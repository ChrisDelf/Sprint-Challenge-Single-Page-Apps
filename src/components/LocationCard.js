import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react';

export default function LocationCard (props) {
   const locationInfo = props.character
  // image={image}

  return (
<div className="ui card">

  <div className="content">
    <a className="header">{locationInfo.name}</a>
    <div className="meta">
    <span className="date">Type: {locationInfo.type}</span>
    </div>
    <div className="description">
    <p>Dimension: {locationInfo.dimension}</p>
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>

    </a>
  </div>
</div>






  )
}
