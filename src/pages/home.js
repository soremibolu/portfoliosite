import React, {useRef} from "react";
import Container from "../components/container";
//import Mbutton from "../components/menubutton";
import ScrollToTop from "../components/ScrollToTop";
import SocialMedia from "../parts/general/socialmedia";
import Header from "../parts/general/header";
import Intro from "../parts/home/intro";
import { Scrollbar } from "react-scrollbars-custom";
import styled from "styled-components";
import Webdev from "../parts/home/webdev";
import Digitalart from "../parts/home/digitalart";
import Downbtn from "../components/downarrow";
import Contact from "../parts/home/contact";

const Scrollcover = styled.div`  
    .thumbY,.thumbX {
        background: black !important;
        cursor:default !important;
        z-index:10;
    }

    .dwn-btn{
        position:absolute;
        bottom:15px;
        display:inline-block;
    }

    .footer{
        margin:10px 0;
    }

    a{color:black; text-decoration:none}
`;

function Home() {
    const skillz = useRef(null);
    const scrltoskills = () => {
        skillz.current.scrollIntoView();
    }

  return (
      <Scrollcover>
        <Scrollbar 
        style={{ width: '100%', height: "100vh" }}
        thumbYProps={{ className: "thumbY" }}
        trackYProps={{ className: "trackY" }}
        thumbXProps={{ className: "thumbX" }}
        trackXProps={{ className: "trackX" }}
        >
            <Container>
                <Header />
                <Intro />
                <center>
                <div className="dwn-btn" onClick={scrltoskills}>
                    <Downbtn />    
                </div>
                </center>
                <div ref={skillz}>
                <Webdev />
                <Digitalart />
                </div>
                <Contact />
                <center><p className="footer">Developed by Boluwatife Soremi</p></center>
                <SocialMedia />
                <ScrollToTop />
            </Container>
        </Scrollbar>
      </Scrollcover>
  );
}

export default Home;
