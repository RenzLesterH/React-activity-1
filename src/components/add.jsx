import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class Add extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
      id: this.props.employee_id + 1,
      name: event.target.name.value,
      surname: event.target.surname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      salary: event.target.salary.value,
    });
    event.target.name.value = "";
    event.target.surname.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
    event.target.salary.value = "";
    this.setState({ isOpen: false });
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
              <Form.Group className="mt-4 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Surname"
                  name="surname"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  name="phone"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
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
