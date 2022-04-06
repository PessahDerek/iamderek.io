import React from 'react'
import './componentStyle.css'


function Project(props) {
    function hover(inOut, obj) {
        let object = document.querySelector("#"+obj);
        if(inOut == "in"){
            object.style.width = "100%";
            object.style.height = "40vmin";
            object.style.opacity = "1";
        } else {
            object.style.width = "0";
            object.style.height = "0";
            object.style.opacity = "0";
        }
    }
  return (
    <div className="project" onMouseEnter={()=>hover("in", "x"+props.id)}
        onMouseLeave={()=>hover("out", "x"+props.id)}>
        <div className='projectImg'>
            <img src={props.img} alt="" />
            <div id={"x" + props.id} className="overview">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <a href={props.link}>View</a>
            </div>
        </div>
    </div>
  )
}

export default Project