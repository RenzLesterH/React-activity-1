import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Add extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd({
      id: this.props.employee_id + 1,
      Name: e.target.name.value,
      Surname: e.target.surname.value,
      Email: e.target.email.value,
      Phone: e.target.phone.value,
      Salary: e.target.salary.value,
    });
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.salary.value = "";
  };

  render() {
    return (
      <React.Fragment>
        <div className="align-self-end">
          <Button variant="primary" onClick={this.openModal}>
            Add Employee
          </Button>{" "}
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Body>
            <Form className="p-2 text-center" onSubmit={this.handleOnSubmit}>
              <h3>Insert Employee Records</h3>
              <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Surname"
                  name="surname"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  name="phone"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Enter Salary"
                  name="salary"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Insert Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Add;
