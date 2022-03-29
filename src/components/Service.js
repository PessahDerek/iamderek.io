import React from 'react'
import './componentStyle.css'

function Service(props) {
  return (
    <div className='myService'>
        <div>
            <h4>{props.service}</h4>
            {props.tools.map(tool=><li key={props.tools.indexOf(tool)}>
                {tool}
            </li>)}
        </div>
        
    </div>
  )
}

export default Service