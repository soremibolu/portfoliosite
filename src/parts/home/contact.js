import React from "react";
import {FaSmileBeam} from "react-icons/fa";
import styled from "styled-components";
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
// Utilities
import { device } from "../../utilities/Breakpoints";

const IntroC = styled.div`
    width: 92%;
    height: calc(100vh - 90px);
    margin-left: 4%;
    margin-bottom: 10px;
    background-color: rgb(255, 230, 89);
    display:inline-block;

    @media ${device.mobileS} {
        height:auto;
        padding-bottom:2rem;
      }
  
    h1{
        text-align:center;
        color:white;
        font-size:80px;
        margin-top: 15%;
        margin-bottom:30px;
    }

    p{
        text-align:center;
        width:40%;
    }

    .smile{
        position:relative;
        top:2px;
        font-size: 19px;
        color:white;
    }

    button{
        border:none;
        padding:15px;
        margin:40px 0;
        cursor: pointer;
        font-weight: bold;
        color: rgb(255, 230, 89);
        background-color:black;
        text-transform:uppercase;

        :hover{
            background-color: white;
        }
    }



    .sm {
        display:none;
        
        @media ${device.mobileS} {
            display:flex;
            justify-content:center; 
        }
    }
    .sm-icons{
        padding: 5px;
        font-size: 20px;
        cursor: pointer;
    
        :hover{
          color:  rgb(255, 230, 89);
        }
    }
        
`;




function Contact() {
  return (
      <IntroC>
          <h1>Get In Touch</h1>
          <center>
          <p>Please feel free to contact me for whatever reason. For work or just to say hello, I'm just one mail away <FaSmileBeam className="smile" /> . </p>
          
          <a href="mailto:soremibolu@gmail.com"><button>Say Hello</button></a>

            <div className="sm">
                <a href="mailto:soremibolu@gmail.com"><div id="linkedin" className="sm-icons"><GrMail /></div></a>
                <a href="https://www.linkedin.com/in/boluwatife-soremi-161401206/"><div id="linkedin" className="sm-icons"><FaLinkedin /></div></a>
                <a href="https://instagram.com/myartissacruise"><div id="github" className="sm-icons"><FaInstagram /></div></a>
                <a href="https://github.com/soremibolu"><div id="instagram" className="sm-icons"><FaGithub /></div></a>
            
            </div>
          </center>
      </IntroC>
  );
}

export default Contact;
