import React from "react";
import styled from "styled-components";
import Title from "../../components/title";
import {MdOutlineDoubleArrow} from "react-icons/md";
import Odua from "../../images/odua1.png";
import Fas from "../../images/fas1.png";
import Ree from "../../images/ree1.png";


// Utilities
import { device } from "../../utilities/Breakpoints";

const Skills = styled.div`
    width: 92%;
    margin-left: 4%;
    margin-bottom: 30px;

    .arrow{
      position:relative;
      top:2px;
    }

    p{
      margin:5px 0;
    }
    @media ${device.mobileS} {
      #switch{
        display:flex;
        flex-direction:column-reverse;

        h3{margin-top:0}
      }
    }

    .pjt{
      width:80%;
      margin:2rem 0;
      display:flex;
      justify-content:center;
      margin-left:10%;


      .pjt-about{
        width:50%;
        z-index:2;

        h3{
          font-size:1.4rem;
          margin-top:20%;
        }

        .main-abt{
          width:100%;
          background-color: rgba(255, 230, 89, 0.7);
          border-radius:3px;
          padding:15px;
          margin:10px 0;
          text-align:justify;
        }
      }

      img{
        height:31rem;
      }


      .pjt-about2{
        width:calc(50% + 30px);
        z-index:2;

        h3{
          font-size:22px;
          margin-top:20%;
        }

        
        h3, .tools2{text-align:right;}

        .main-abt2{
          width:calc(100% - 30px);
          background-color: rgba(255, 230, 89, 0.7);
          border-radius:3px;
          padding:15px;
          margin:10px 0;
          text-align:justify;
        }
      }

      .img{
        height:31rem;
        position:relative;
        left:30px;
      }


      @media ${device.mobileS} {
        margin-left:0;
        width:100%;
        display:block;

        .pjt-about,.pjt-about2{
          width:calc(100% - 30px);
        }

        .pjt-about2{
          width:100%;
        }

        img, .img{
          width:100%;
          height:auto;
          left:0;
        }

        .main-abt2{
          float:left;
        }

      }

    }
    
`;

function SkillsC() {
  return (
      <Skills>
        <Title>Software Development</Title>
        <p>Regarding my software development skills, the tools I am most familiar with are <MdOutlineDoubleArrow className="arrow" /> HTML|(S)CSS, JavaScript, React, Node.js, PHP, MySQL, Python and MongoDB </p>
        <p>A few projects that I've built are shown below.</p>

        <a href="https://reehousing.netlify.app/" target="_blank" rel="noreferrer">
        <div className="pjt">
          <div className="pjt-about">
            <h3>REE</h3>
            <div className="main-abt">
              <p>A web application called REE to show case houses for rent and for sale. This project is to mainly showcase my skills in react such reusability of components and data population using json data.</p>
            </div>
            <p className="tools">HTML|(S)CSS, React</p>

          </div>
          <img src={Ree} alt="" />
        </div>
        </a>


        <a href="https://www.favorautosales.net/" target="_blank" rel="noreferrer">
        <div className="pjt" id="switch">
          <img src={Fas} alt="" className="img" />
          <div className="pjt-about2">
            <h3>Favor Auto-Sales</h3>
            <div className="main-abt2">
              <p>A car sales web platform called favour autosales based in the USA, for my client to display cars being put up for sale and their respective details.</p>
            </div>
            <p className="tools2">HTML|(S)CSS, JavaScript, PHP, MySQL</p>

          </div>
        </div>
        </a>

        
        
        <a href="https://www.oduamke.org/" target="_blank" rel="noreferrer">
        <div className="pjt">
          <div className="pjt-about">
            <h3>Odua Mke</h3>
            <div className="main-abt">
              <p>A web application for an organization called Odua association based in Milwaukee, USA. The application consists of a general section, a members section and an admin section for complete creative control of the content on each section.</p>
            </div>
            <p className="tools">HTML|(S)CSS, JavaScript, PHP, MySQL</p>

          </div>
          <img src={Odua} alt="" />
        </div>
        </a>
        
      </Skills>
  );
}

export default SkillsC;
