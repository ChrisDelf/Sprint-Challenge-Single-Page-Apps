import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react';

export default function CharacterCard (props) {
const characterInfo = props.character
  return (
<div className="ui card">
  <div className="image">
    <img src= {characterInfo.image}/>
  </div>
  <div className="content">
    <a className="header">{characterInfo.name}</a>
    <div className="meta">
    <span className="date">Date Created: {characterInfo.created}</span>
    </div>
    <div className="description">
    <p>Gender: {characterInfo.gender}</p>
    <p>Species: {characterInfo.species}</p>
    <p>Status: {characterInfo.status}</p>

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
