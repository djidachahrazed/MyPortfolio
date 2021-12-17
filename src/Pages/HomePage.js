import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

function HomePage(){
    return (
      <div className="HomePage">
      <header className="hero">
            <h1 className="hero-text">
                    Hi, I am 
                    <span> Chahrazed Djida.</span>
            </h1>
          <p className="h-sub-text">
                    Data Scientist with Knowledge of SQL coding. 
                    Ability to gather and analyse requirements and translate the needs of project teams and product managers.
                    Dedicated to continiuing professional growth with training in Machine Learning and AI projects and learning.
                    Deep Knowldge of visual analysis design principles and problem-solving and decision-making abilities. 
                    Seeking to learn new ML skills and applying Knowledge to dynamic.
                    growth-oriented role.
          </p>
          <div className="icons">
                    <a href="https://www.facebook.com/chahrazed.djidaa/" className="icon-holder" >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/djidachahrazed" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    
           </div>
      </header>
      </div>

    )
}


export default HomePage;