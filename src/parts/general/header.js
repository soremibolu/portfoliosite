import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import King from "../../images/king.png";

const Header = styled.div`
    width: 100%;
    height: 30px;
    padding: 15px 0px;
    position:fixed;
    top:0;

    a{text-decoration:none}

    img{
    width: 25px;
    height: 25px;
    margin-left: 4%;
    position: relative;
    top: 5px;
    }

    span{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bolder;
    margin-left: 5px;
    color:black;
    }
`;

function Socialmedia() {
  return (
    <Header>
    <Link to="/">
        <img src={King} alt="Soremi Boluwatife" />
        <span>soremi.</span>
    </Link>
    </Header>
  );
}

export default Socialmedia;
