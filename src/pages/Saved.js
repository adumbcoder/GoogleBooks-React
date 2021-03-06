import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { SavedList, ListItem} from "../components/List";

function Saved(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <Header />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 md-offset-1">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <div>
          <p>Saved</p>
          <SavedList>
            <ListItem />
          </SavedList>
        </div>
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;
