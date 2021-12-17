import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../Img/design.svg';
import intelligence from '../Img/intelligence.svg';

function AboutPage(){
    return (
        <div className="AboutPage">
            
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill="Javascript" progress="60%" width="60%"/>
                <SkillsSection skill="React Js" progress="70%" width="70%"/>
                <SkillsSection skill="Python" progress="85%" width="85%"/>
                <SkillsSection skill="Web Design" progress="50%" width="50%"/>
                <SkillsSection skill="Java" progress="60%" width="60%"/>
                <SkillsSection skill="C" progress="60%" width="60%"/>
                <SkillsSection skill="MangoDb" progress="70%" width="70%"/>
                <SkillsSection skill="UI/UX Design" progress="25%" width="25%"/>
                <SkillsSection skill="Node Js" progress="40%" width="40%"/>
                <SkillsSection skill="Php" progress="55%" width="55%"/>
            </div>
            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web Design'} 
                text="Take the plans and layouts provided by web designers and use coding languages to turn them into live" />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text="build AI functionality into software applications, My role require creating, testing, and deploying code." />
            
            </div>

        </div>

        
    )
}

export default AboutPage;
