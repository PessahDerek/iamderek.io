import React from 'react'
import './componentStyle.css'

function Service(props) {
  return (
    <div className='myService'>
        
        <div>
          <h2>{props.service}</h2>
          <ul>
            {props.tools.map(tool=> <li
              key={props.tools.indexOf(tool)}>{tool}</li>)}
          </ul>
        </div>
    </div>
  )
}

export default Service