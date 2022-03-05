import React from 'react';
import styled from "styled-components";
import {FaAngleDoubleDown} from 'react-icons/fa';
// Utilities
import { device } from "../utilities/Breakpoints";

const Downbtn = styled.div`
  display:inline-block;
  height:50px;

 .down{
    font-size: 40px;
    color: black;
    font-weight: normal;
    animation: down 1.2s infinite;
    cursor: pointer;
    display:inline-block;
  }
  @keyframes down {
    0% {margin-top: 0px;scale:1.3;}
    60% {margin-top: 10px;scale: 0.7;}
    100% {margin-top: 0px;scale: 1.3;}
  }

  @media ${device.mobileS} {
    display:none;
  }
`;

function ScrollToTop() {

    return (
        <Downbtn>
            <center>
                <FaAngleDoubleDown className="down"  />
            </center>
        </Downbtn>
    );
  }
  
  export default ScrollToTop;