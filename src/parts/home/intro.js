import React from "react";
import Hello from "../../components/hello";
import drone from "../../images/drone.png";
import styled from "styled-components";

// Utilities
import { device } from "../../utilities/Breakpoints";

const IntroC = styled.div`
    width: 92%;
    height: calc(100vh - 90px);
    margin-top:60px;
    margin-left: 4%;
    margin-bottom: 30px;
    background-color: rgb(255, 230, 89);

    @media ${device.mobileS} {
        height:auto;
        padding-bottom:2rem;
      }
  
    #hello-cover{
        display:inline-block;
    }

    #Layer_1{
        display: inline-block;
        height: 25rem;

        @media ${device.mobileS} {
            height:10rem;
            margin-left:1rem;
          }
    }
    
    #hello-anime{
        display: inline-block;
        margin-top: 3rem;
        width: auto;


        @media ${device.mobileS} {
            margin-top:20%;
          }
    }
    .animate{
        stroke-dasharray: 3000;
        stroke-dashoffset: 4000;
        animation: dash 3s linear forwards;
    }@keyframes dash {
    to {
        stroke-dashoffset: 0;
        }
    }
    
    #let-o{
        display: inline-block;
        width: 3rem;
        height: 3rem;
        margin-left: 4.4rem;
        border-radius: 100%;
        background-color: white;
        animation-name: dot;
        animation-duration: 2s;

        

        @media ${device.mobileS} {
            width:2rem;
            height:2rem;
            margin-left: 2rem;
          }
    }  
    @keyframes dot {
        0%   {background-color: black; scale: .1;}
        70%  {background-color: white; scale: 1.4}
        100% {background-color: white; scale: 1}
    }
    
    #main-image {
        display: inline-block;
        margin-left: -10rem;

        @media ${device.mobileS} {
            margin-left: -6rem;
          }
    }
    
    #main-image img{
        height: 10rem;
        @media ${device.mobileS} {
            height:5rem;
          }
    }

    #textcover{
    display: inline-block;
    }
    
    
    #textspace{
    display: block;
    width: 70%;
    margin-left: 15%;
    margin-top:3%;
    height: 3rem;
    text-align: justify;
    font-weight: normal;

    
    @media ${device.mobileS} {
        height:auto;
        width: 90%;
        margin-left: 5%;
      }
    }
    
    
    #textspace span{
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    }
    
    #title{
    margin-top:5%; 

    @media ${device.mobileS} {
        margin:20% 0;
      }
    }
    
    #title span{
    display: inline-block;
    width: 200px;
    font-weight: lighter;
    font-size: 17px;
    text-transform: uppercase;
    

    @media ${device.mobileS} {
        margin:5% 0;
      }
    }

    .midspan{
        border-left:1px solid white; 
        border-right:1px solid white;}
`;




function Intro() {
  return (
      <IntroC>
          <center>
        <div id="hello-cover">
            <Hello /> 
            <div id="let-o"></div>
            <div id="main-image">
                <img src={drone} alt="drone" />
            </div>
        </div></center>

        <div id="title">
            <center>
            <span>Web developer</span>
            
            <span className="midspan">Data scientist</span>
            
            <span>Digital artist</span>
            </center>
        </div>


        <span id="textspace">
            <p id="type">
                I'm <span>Boluwatife Soremi</span>, a young creative and visionary who loves art in all its forms. My interests are centered round tech and codes. I love to design and develop in every sense those words encapsulate.
            </p>
        </span>



      </IntroC>
  );
}

export default Intro;
