import React from "react";
import Container from "../components/container";
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <Container>
        <center>
            <h1>PAGE NOT FOUND</h1>
            <Link to="/">GO HOME</Link>
        </center>
      </Container>
  );
}

export default NotFound;
