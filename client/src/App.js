import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import Search from "./components/search/Search.js";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <div className="App-header">
          <h2 className="text-center">Google Books</h2>
        </div>
        <Search />
        <br />
        <div className="container"></div>
      </Container>
    );
  }
}

export default App;
