import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './Pages.css';

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="display-4" id="google-lead">Google Books Search App</h1>
              <p className="lead" id="motto">Search for and Save Books of Interest</p>
            </Jumbotron>
            <div className="card">
              <h5 className="card-header" style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>Book Search</h5>
              <div className="card-body">
                <form>
                  <Input style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <Input style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis (optional)"
                  />
                  <FormBtn style={{ fontFamily: "Roboto", letterSpacing: "0.5", }}
                    disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    <i class="far fa-paper-plane"></i> Submit Book
              </FormBtn>
                </form>
              </div>
            </div>
            <br />
            <br />
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 className="display-4" id="results-lead">Search Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <div className="card" style={{marginBottom: "100px" }}>
                <h5 className="card-header" style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>Results</h5>
                <div className="card-body">
                  <List>
                    {this.state.books.map(book => (
                      <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                          <strong style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            ) : (
                <h3 style={{ fontFamily: "Roboto", letterSpacing: "0.5" }}>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;