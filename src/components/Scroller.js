import React from 'react'
import './componentStyle.css'
import '../AppMobile.css'

function Scroller(props) {
  return (
    <div className="scroller">
        <button onClick={()=>props.func(".landingPage")} ></button>
        <button onClick={()=>props.func(".portfolio")} ></button>
        <button onClick={()=>props.func(".services")} ></button>
        <button onClick={()=>props.func(".hireMe")} ></button>
    </div>
  )
}

export default Scroller