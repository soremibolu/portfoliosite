import React, {useState} from 'react';
import styled from "styled-components";
import {RiArrowUpSFill} from 'react-icons/ri';

const ScrollTop = styled.div`
    display: none;
    transition: .2s;
    cursor: pointer;
  
    .scrl-icon{
        color: black;
        font-size: 45px;
        position: fixed;
        bottom:50px;
        right: 50px;
    }
    .scrl-icon:hover{
        color: darkgray;
        transition: .3s;
    }
`;


function ScrollToTop() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <ScrollTop onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            <RiArrowUpSFill className="scrl-icon" />
        </ScrollTop>
    );
  }
  
  export default ScrollToTop;