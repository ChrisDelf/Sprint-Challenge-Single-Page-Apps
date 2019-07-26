import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react';

export default function CharacterCard (props) {
const characterInfo = props.character
  return (
<div class="ui card">
  <div class="image">
    <img src= {characterInfo.image}/>
  </div>
  <div class="content">
    <a class="header">{characterInfo.name}</a>
    <div class="meta">
    <span class="date">Date Created: {characterInfo.created}</span>
    </div>
    <div class="description">
    <p>Gender: {characterInfo.gender}</p>
    <p>Species: {characterInfo.species}</p>
    <p>Status: {characterInfo.status}</p>

    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>





    )
}
