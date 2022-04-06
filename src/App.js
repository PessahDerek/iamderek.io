
import './App.css';
import './animations.css'
import './AppMobile.css'
import {React, useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './components/Menu'
import Scroller from './components/Scroller';
import Contacts from './components/Contacts';
import DropDownMenu from './components/DropDownMenu';

import wapp from './images/whatsapp.png'
import mail from './images/mail.png'
import phone from './images/phone.png'
import twitter from './images/twitter.png'
import me from './images/me.png'

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

function App() {
  var[dropBtnTxt, setBtnText] = useState("menu");
  const landing = document.querySelector(".landingCont");
  const serv = document.querySelector("#others")

  window.addEventListener('resize', ()=>{
    
    if(window.innerWidth < 1120){
      document.querySelector(".landingCont").style.gridAutoFlow = "row"
      document.querySelector("#others").style.gridAutoFlow = "row"
    } else {
      document.querySelector(".landingCont").style.gridAutoFlow = "column"
      document.querySelector("#others").style.gridAutoFlow = "column"
    }
  })

  function scrollTo(targ){
    let subject = document.querySelector(targ)
    subject.scrollIntoView({behavior:'smooth',  block: "end", inline: "nearest"});
    
  }
  useEffect(()=> {
    AOS.init({duration : 1000});
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Scroller func={scrollTo} />
      <Contacts 
        call={phone} 
        whatsapp={wapp}
        twitter={twitter}
        gmail={mail}
      />
      
      <div className='landingPage'>
        <nav>
          <h1>i_am_derek</h1>
          <DropDownMenu/>
          <div id="navs">
            <a onClick={()=>scrollTo(".portfolio")}>portfolio</a>
            <a onClick={()=>scrollTo(".services")}>services</a>
            <a onClick={()=>scrollTo(".hireMe")}>hire_me</a>
          </div>
        </nav>


        <Menu />


        <div id='page' data-AOS="fade-up" className="landingCont">
          <div className="dp">
            <img src={me} />
          </div>
          <article>
            <p>
            hello, I am Derek Pesa. I design and develop 
            websites.<br/><br/>

            I would like, actually love, to work with you
            on your next project😃.<br/><br/>

            You can check out some of my 
            projects on the portfolio section.
            </p>
            <button>Download CV</button>
          </article>
        </div>
      </div>

      {/**portfolio page */}
      <div id='page' className='portfolio'>
        <nav>
          <h1>Portfolio</h1>
          <div></div>
        </nav>
        <div className='projectList'>
          {webProjects.map(project => <Project
            key={webProjects.indexOf(project)}
            id={webProjects.indexOf(project)}
            title={project.title}
            img={project.thumbnail}
            desc={project.description}
            link={project.link} />)}
        </div>
      </div>

      {/**services page */}
      <div id='page' className='services'>
        <nav>
          <h1>Services</h1>
          <div></div>
        </nav>
        <div className='projectList'>
            {services.map(service=><Service 
              key={services.indexOf(service)}
              service={service.service}
              tools={service.tools}
            />)}
        </div>
      </div>

      {/**hire me page */}
      <div id="page" className="hireMe">
        <nav>
          <h1>hire mw</h1>
          <div></div>
        </nav>
        <p>Do you have a project? Just a brief introduction and I will get back
          to you ASAP, I promise.</p>
        <form>
          <input maxLength="30" type="text" placeholder='name' required />
          <input maxLength="30" type="email" placeholder='johndoe@gmail.com' required />
          <textarea placeholder="short project description"></textarea>
          <button type="button">Submit</button>
        </form>
        <div  id="others">
          <a id="fiverr" href="">hire me on fiverr</a>
          <a id="upwork" href=''>hire me on upwork</a>
          <a id="git" href="">collaborate on Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
