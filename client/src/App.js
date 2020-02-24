import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import Search from "./components/search/Search.js";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <div className="App-header">
          <h2>Google Books</h2>
        </div>
        <div className="App-intro">
          <Search />
        </div>
      </Container>
    );
  }
}

export default App;
