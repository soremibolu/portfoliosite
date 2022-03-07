import React from "react";
import styled from "styled-components";
import Title from "../../components/title";
import { Scrollbar } from "react-scrollbars-custom";
import Hands from "../../images/digitalart/hands.png";
import Xx from "../../images/digitalart/xxxtentacion2.png";
import SClaw from "../../images/digitalart/swords-and-claws.png";
import Shades from "../../images/digitalart/furandredshades.png";
import Lions from "../../images/digitalart/lions.png";
import Climb from "../../images/digitalart/climb.png";
import PShades from "../../images/digitalart/prettyshades.png";



const Skills = styled.div`
    width: 92%;
    margin-left: 4%;
    margin-bottom: 30px;

    .showcase{
      margin:25px 0;
      width:100%;
      white-space:nowrap;
      overflow:auto;
    }
    
    .thumbY,.thumbX {
      background: black !important;
      cursor:default !important;
    }

    img{
      height:20rem;
      margin-right: 15px;
    }

    
    
`;

function SkillsC() {
  return (
      <Skills>
        <Title>Digital Art</Title>
        <p>I am also a digital artist. I make visual aesthetics using Adobe illustrator and Adobe photoshop </p>
        <p>A few of the pieces I made are shown below.</p>

        <div className="showcase">
        
        <Scrollbar 
        style={{ width: '100%', height: "20rem", padding: "10px 0" }}
        thumbYProps={{ className: "thumbY" }}
        trackYProps={{ className: "trackY" }}
        thumbXProps={{ className: "thumbX" }}
        trackXProps={{ className: "trackX" }}
        >

          <img src={Hands} alt="" />
          <img src={Xx} alt="" />
          <img src={SClaw} alt="" />
          <img src={Shades} alt="" />
          <img src={Lions} alt="" />
          <img src={Climb} alt="" />
          <img src={PShades} alt="" />


        </Scrollbar>
        </div>

        
      </Skills>
  );
}

export default SkillsC;
