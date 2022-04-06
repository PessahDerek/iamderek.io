import {React, useState} from 'react'
import './componentStyle.css'

function DropDownMenu(props) {
  var [clicked, setClicked] = useState(false)
  function showMenu(){
    if(clicked){
      document.querySelector(".dropMenu").style.cssText = ["visibility: hidden; opacity: 0; width: 0; height: 0; transition: display 2s, opacity 2s"]
      document.querySelector("#two").style.visibility = "visible"
      document.querySelector("#one").style.cssText = [
        "transform: rotateZ(0deg); background-color: #CC835B; position: relative"
      ]
      document.querySelector("#three").style.cssText = [
        "transform: rotateZ(0deg); background-color: #42291b; position: relative"
      ]
      setClicked(false)
    } else {
      document.querySelector(".dropMenu").style.cssText = ["visibility: visible; opacity: 1; width: 100%; height: 50vh"]
      document.querySelector("#two").style.visibility = "hidden"
      document.querySelector("#one").style.cssText = [
        "position: relative; transform: rotateZ(135deg); background-color: white"
      ]
      document.querySelector("#three").style.cssText = [
        "position: relative; transform: rotateZ(-135deg); background-color: white"
      ]
      setClicked(true)
    }
  }
  return (
        <button onClick={showMenu} id="dropBtn">
          <div id="one"></div>
          <div id="two"></div>
          <div id="three"></div>
        </button>
        )
}

export default DropDownMenu