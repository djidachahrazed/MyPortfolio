import React from 'react';
import about from '../Img/ch.jpg';

function ImageSection(){
    return(
        <div className='ImageSection'>
            <div className='img'>
                <img src={about} alt=""/>
            
            </div>
            <div className="about-info">
                <h3>I am <span>Chahrazed</span></h3>
                <p className="about-text">
                    Data Scientist with Knowledge of SQL coding. 
                    Ability to gather and analyse requirements and translate the needs of project teams and product managers.
                    Dedicated to continiuing professional growth with training in Machine Learning and AI projects and learning.
                     
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>City</p>
                        <p>Email</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Chahrazed Djida</p>
                        <p>: 26</p>
                        <p>: Algerian</p>
                        <p>: Arabic,French, English</p>
                        <p>: Tipaza </p>
                        <p>: djidachahrazeda6@gmail.com </p>
                        

                    </div>
                </div>
                <a href= "https://drive.google.com/file/d/1wlA0KFKw8Z_My9BilZrEWeVQ6EkMaX9j/view?usp=sharing">
                <button className="btn">Download Cv</button>
                </a>
            </div>

        </div>
    )
}
export default ImageSection;