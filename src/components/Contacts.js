import React from 'react'
import './componentStyle.css'

function Contacts(props) {
  return (
    <div className="contacts">
        <a href=""><img src={props.call} /></a>
        <a href=""><img src={props.whatsapp} /></a>
        <a href=""><img src={props.twitter} /></a>
        <a href=""><img src={props.gmail} /></a>
    </div>
  )
}

export default Contacts