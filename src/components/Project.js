import React from 'react'
import './componentStyle.css'


function Project(props) {
    function hover(inOut, targ){
        let target = document.getElementById(targ)
        if(inOut === "in") {
            target.style.width = "90%";
            target.style.opacity = "1";
        }else{
            target.style.width = "0";
            target.style.opacity = "0";
        }
    }
    let id = "x"+props.id.toString()
  return (
    <div className="project">
        <div className='projectImg' onMouseEnter={()=>hover('in', id)} onMouseLeave={()=>hover('out', id)}>
            <img src={props.img} alt="" />
            <div id={id}>
                <p>{props.desc}</p>
                <a href={props.link}>View</a>
            </div>
        </div>
        <div>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Project