
import './App.css';
import './animations.css'
import './AppMobile.css'
import {React, useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './components/Form'
import DropDownMenu from './components/DropDownMenu';

import wapp from './images/whatsapp.png'
import mail from './images/mail.png'
import phone from './images/phone.png'
import twitter from './images/twitter.png'
import redTri from './images/Polygon 5.png'
import purpTri from './images/Polygon 4.png'
import orangeTri from './images/Polygon 6.png'

import Project from './components/Project';
import Service from './components/Service';

import cakeMagic from './images/cakemagic.png'
import boston from './images/boston.png'


var webProjects = [
  {title: "Cake Magic", description: "A bakery business", thumbnail: cakeMagic, link: "https://cakehut.netlify.app/"},
  {title: "Boston Round", description: "Cosmetics landing page", thumbnail: boston, link: "https://bostonround.netlify.app/"},
  
]
var services = [
  {service: "Web/UI/UX design", tools: ["Adobe XD"]},
  {service: "Web development", tools: ["React JS", "Django", "CSS", "HTML", "Firebase"]},
  {service: "Desktop Applications", tools: ["Electron Js", "Kivy/KivyMD"]},
  {service: "Collaboration", tools: ["Github"]}
]
var btnClick = 0;

function App() {
  var[dropBtnTxt, setBtnText] = useState("menu");
  
  function scrollTo(targ){
    document.querySelector(targ).scrollIntoView({behavior:'smooth',  block: "end", inline: "nearest"});;
  }
  useEffect(()=> {
    AOS.init({duration : 1000});
    AOS.refresh();
  }, []);

  function dropDown(){
    const dropMenu = document.querySelector("#pageNav")
    if(btnClick == 0){
      setBtnText("close");
      dropMenu.style.width="95vmin";
      dropMenu.style.height="25em";
      dropMenu.style.opacity="1";
      dropMenu.style.display="flex";
      btnClick += 1;
    }else{
      setBtnText("menu");
      dropMenu.style.width="0";
      dropMenu.style.height="0";
      dropMenu.style.opacity="0";
      btnClick = 0;
    }
}
  return (
    <div className="App">
      <DropDownMenu func={setBtnText} />
      <div data-aos="fade-in" id="page" className="landingPage">
        <nav>
          <h2>pesa</h2>
          <button id="drop" onClick={()=>dropDown()}>{dropBtnTxt}</button>
          <div className='contacts'>
            <a href="">
              <img src={wapp} /></a>
            <a href=''>
              <img src={mail} /></a>
            <a href=''>
              <img src={phone} /></a>
            <a href=''>
              <img src={twitter} /></a>
          </div>
          <div className="pageNav">
            <button onClick={()=>scrollTo(".portfolio")}>portfolio</button>
            <button onClick={()=>scrollTo(".services")}>services</button>
          </div>
        </nav>

        <img src={purpTri} id="purpTri" />
        <img src={redTri} id="redTri" />
        <img src={orangeTri} id='orangeTri' />

        <div className="landingTxt">
          <p>Hello, my name is</p>
          <h1><div></div>Derek Pesa</h1>
          <article>
          I'm from Kenya, I design and develop websites, web apps
          and stunning user interfaces. I would like😃, actually love♥
          to work with you on your next project.
          </article>
          <button onClick={()=>scrollTo(".hireMe")} >hire me</button>
        </div>

        <div className='orangeCirc' />
        <div className='redCirc' />
        <div className='greenCirc' />
      </div>

      {/**portfolio page */}
      <div data-aos="zoom-in" id='page' className='portfolio'>
        <nav>
          <h2>portfolio</h2>
          <a href='https://github.com/PessahDerek'>github</a>
        </nav>
        <div className="list" id='websites'>
          <div className='nav'>Websites</div>
            <div className='projectList'>
              {webProjects.map(project => <Project 
                  key={webProjects.indexOf(project)}
                  title={project.title}
                  img={project.thumbnail}
                  desc={project.description}
                  link={project.link}
                  id={webProjects.indexOf(project)}
                />)}
            </div>
          </div>
      </div>

      {/**services page */}
      <div data-aos="zoom-in" id="page" className='services' >
        <nav><h2>services</h2></nav>
        <div className='servicesList'>
          {services.map(service=>
          <Service key={services.indexOf(service)}
            service={service.service}
            tools={service.tools} />)}
        </div>
      </div>

      {/**hire me last page */}
      <div data-aos="zoom-in" id="page" className='hireMe'>
        <nav><h2>hire me</h2></nav>
        <div>
            <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
