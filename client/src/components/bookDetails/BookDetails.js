import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Rating from "../rating/Rating";
import "./BookDetails.css";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: props.imageLinks
        ? props.imageLinks.thumbnail
        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      rating: props.averageRating
    };
  }
  render() {
    return (
      <Row className="details">
        <Col md={12}>
          <Row>
            <Col md={2}>
              <Image src={this.state.thumbnail} thumbnail />
              <Rating rating={this.state.rating} />
            </Col>
            <Col md={12}>
              <div className="description text-center">
                {this.props.description}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BookDetails;
