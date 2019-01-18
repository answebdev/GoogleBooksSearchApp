import React from "react";
import { Col, Row, Container } from "../components/Grid";
import sadOwl from "../img/sadOwl.png";
// import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* <Jumbotron> */}
          <div class="container">
            <div className="jumbotron">
              <div className="text-center"><img src={sadOwl} style={{ width: "7%", height: "auto" }} alt="Sad Owl" /></div>
              <br />
              <h1 className="text-center">404 Not Found<p> </p><p><small className="text-center"> Oh noes everything broke</small></p></h1>
              <p className="text-center">Try pressing the back button or clicking on this button.</p>
              <p className="text-center"><a class="btn btn-primary" style={{ backgroundColor: "#24292e", border: "#ffffff" }} href="/"><i className="fa fa-home"></i> Take Me Home</a></p>
            </div>
          </div>
          {/* </Jumbotron> */}
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
