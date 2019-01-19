import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 md-offset-1">
            <article>
              <h1 style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>Synopsis</h1><p></p>
              <p style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/" style={{ fontFamily: "Roboto", letterSpacing: "0.5", color: "#3D6CAD", textDecoration: "none" }}><i class="fas fa-arrow-circle-left"></i> Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
