import React, {useState} from "react";
import styled from "styled-components";

const Mbutton = styled.div`
  z-index:3;
  display: inline-block;
  cursor: pointer;
  position: fixed;
  left: 35px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%) rotate(270deg);
  animation: menu 1.2s ;
@keyframes menu {
  0% {left: -35px;opacity:0.1;}
  100% {left: 35px;opacity:1;}
}

  .mline{
    color: black;
    font-size: 9px;
    margin:6px 5px ;
    margin-top: 20px;
    font-weight: bold;
  }

  .mline1{
    display: inline-block;
    width: 1.5px;
    height: 10px;
    background-color: black;
  }
  
  .mline2{
    display: inline-block;
    width: 3px;
    height: 20px;
    margin:0 3px;
    background-color: black;
  }
  
  .mline3{
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: black;
  }
  
  .mline span{
    position: relative;
  }
`;

function Menubutton() {

    const [ml1, setMl1] = useState();
    const [ml2, setMl2] = useState();
    const [ml3, setMl3] = useState();

    
    
    const [m, setM] = useState();
    const [e, setE] = useState();
    const [n, setN] = useState();
    const [u, setU] = useState();

    const menu = () => {
        setMl1("20px");
        setMl2("40px"); 
        setMl3("30px"); 

        setM("-14px");
        setE("-1px");
        setN("-10px");
        setU("-6px");
    }

    const menuleave = () => {
        setMl1("10px");
        setMl2("20px"); 
        setMl3("16px"); 

        setM("0px");
        setE("0px");
        setN("0px");
        setU("0px");
    }
  return (
    <Mbutton onMouseOver={menu} onMouseLeave={menuleave}>
        <center>
            <div>
                <div className="mline1" style={{height: ml1}}></div>
                <div className="mline2" style={{height: ml2}}></div>
                <div className="mline3" style={{height: ml3}}></div>
            </div>
            <p className="mline">
                <span className="menu-m" style={{top: m}}>M</span>
                <span className="menu-e" style={{top: e}}>E</span>
                <span className="menu-n" style={{top: n}}>N</span>
                <span className="menu-u" style={{top: u}}>U</span>    
            </p>
        </center>
    </Mbutton>
  );
}

export default Menubutton;
