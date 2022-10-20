import React, { Component } from "react";

import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class Search extends Component {
  render() {
    return (
      <InputGroup className="w-25">
        <Form.Control
          placeholder="Search Employee Here"
          style={{ background: "#eceded" }}
        />
        <Button variant="success" id="search_button">
          <FaSearch />
        </Button>
      </InputGroup>
    );
  }
}

export default Search;
