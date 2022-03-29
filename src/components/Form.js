import React from 'react'
import './componentStyle.css'

function Form() {
  return (
    <div className="form">
        <input 
            type="text"
            placeholder="Name"
            required
        />
        <input 
            type="email"
            placeholder="you@gmail.com"
            required
        />
        <textarea 
            placeholder="short project description"
        />
        <button type='button'>Submit</button>
        <div className="hirePlatforms">
            <a id='fiverr' href="">hire me on fiverr</a>
            <a id='upwork' href="">hire me on upwork</a>
        </div>
    </div>
  )
}

export default Form