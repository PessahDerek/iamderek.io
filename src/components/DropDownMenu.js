import React from 'react'

function DropDownMenu(props) {
    function scrollTo(targ){
        const dropMenu = document.querySelector("#pageNav")
        document.querySelector(targ).scrollIntoView({behavior:'smooth',  block: "end", inline: "nearest"});;
        props.func("menu");
        dropMenu.style.width="0";
        dropMenu.style.height="0";
        dropMenu.style.opacity="0";
    }
  return (
    <nav id="pageNav">
        <button onClick={()=>scrollTo(".portfolio")}>portfolio</button>
        <button onClick={()=>scrollTo(".services")}>services</button>
        <button>resume'</button>
        <a href="">whatsapp</a>
        <a href=''>email</a>
        <a href=''>phone</a>
        <a href=''>twitter</a>
    </nav>
  )
}

export default DropDownMenu