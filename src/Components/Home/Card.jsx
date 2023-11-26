// project details

import React from 'react'
import "../../App.css"
import healthcare_project from '../../Assets/healthcare_project.png';
import Recycle_project from '../../Assets/Recycle_project.png';
import Portfolio from '../../Assets/Portfolio.png';
import travel_website from '../../Assets/travel_website.png';



function Card() {
  return (
    <>
   
      <div className='card-container'>
      <div className="card_main_title">
      <h3 className='card-heading'>Projects</h3>
    </div>
        <div className="cards">
          <a href='https://github.com/devichandana12?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={healthcare_project} alt="" />
              </div>
              <div className="card-text">
                <h3>Healthcare</h3>
                <span>Python</span>

              </div>

            </div>
          </a>
         <a href='https://github.com/devichandana12?tab=repositories'  target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Recycle_project} alt="" />
              </div>
              <div className="card-text">
                <h3>Recycle World</h3>
                <span>Angular,Nodejs,Xamp</span>
  
              </div></div>
         </a>
         <a href='https://656234cbfbcc7556dec6516b--inspiring-maamoul-3d7ce8.netlify.app/' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Portfolio} alt="" />
              </div>
              <div className="card-text">
                <h3>Portfolio</h3>
                <span>React,React Material UI</span>
  
              </div></div>
          </a>
          <a href='https://github.com/devichandana12/Travel_Website.git' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={travel_website} alt="" />
              </div>
              <div className="card-text">
                <h3>Travel Website</h3>
                <span>Html,Css,Bootstrap5</span>
  
              </div></div>
  
          </a>
        </div>





      </div>
    </>
  )
}

export default Card