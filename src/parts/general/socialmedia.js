import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CV from "../../docs/myCV.pdf";
import {FaFile} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
// Utilities
import { device } from "../../utilities/Breakpoints";

const SMcover = styled.div`
    z-index:3;
    display: inline-block;
    position: fixed;
    right: 30px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-decoration: none;
    animation: soc 1.2s ;
    @keyframes soc {
      0% {right: -30px;opacity:0.1;}
      100% {right: 30px;opacity:1;}
    }

    a{
    text-decoration: none;
    color:black;
    }
    span{
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    margin:5px 0;
    text-decoration: none;
    }
    
    .sm-icons{
    padding: 5px;
    font-size: 20px;
    cursor: pointer;

    :hover{
      color:  rgb(255, 230, 89);
    }
    }
    
    .resume{
    border-radius: 3px;
    padding: 10px 7px;
    margin-top: 15px;
    box-shadow: 0px 0px 10px gray;
    cursor: pointer;
    color:black;
    background:white;

    :hover{
      color:  rgb(255, 230, 89);
    }
    }
    .resume .file{
    margin-bottom: 7px;
    }

    .sm-c{
      @media ${device.mobileS} {
        display:none;
    }
    }
`;

function Socialmedia() {
  return (
    <SMcover>
        <center>
        <span className="sm-c">
        <a href="mailto:soremibolu@gmail.com"><div id="linkedin" className="sm-icons"><GrMail /></div></a>
        <a href="https://www.linkedin.com/in/boluwatife-soremi-161401206/"><div id="linkedin" className="sm-icons"><FaLinkedin /></div></a>
        <a href="https://instagram.com/myartissacruise"><div id="github" className="sm-icons"><FaInstagram /></div></a>
        <a href="https://github.com/soremibolu"><div id="instagram" className="sm-icons"><FaGithub /></div></a>
        </span>

        
        <Link to={CV} target="_blank">
            <div className="resume">
                <FaFile className="file"/>                
                <span>r</span>
                <span>é</span>
                <span>s</span>
                <span>u</span>
                <span>m</span>
                <span>é</span>                
            </div>
        </Link>
        </center>
    </SMcover>
  );
}

export default Socialmedia;
