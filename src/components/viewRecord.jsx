import React, { Component, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class ViewRecords extends Component {
  styles = {
    border: "0px none",
    background: "transparent",
    margin: 2,
    padding: 0,
  };

  state = {
    isOpen: false,
    data_index: 0,
  };

  closeModal = () => this.setState({ isOpen: false });

  openModal = (id) => {
    this.setState({ isOpen: true });
    this.setState({ data_index: id - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <Table striped bordered hover className="text-center mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((employee) => (
              <tr>
                <td key={employee.Name}>{employee.Name}</td>
                <td key={employee.Surname}>{employee.Surname}</td>
                <td key={employee.Email}>{employee.Email}</td>
                <td key={employee.Phone}>{employee.Phone}</td>
                <td key={employee.Salary}>{employee.Salary}</td>
                <td>
                  <button
                    onClick={() => this.props.onDelete(employee.id)}
                    style={this.styles}
                  >
                    <FaRegTrashAlt color="red" />
                  </button>
                  <button
                    onClick={() => this.openModal(employee.id)}
                    style={this.styles}
                  >
                    <FaEdit color="#1266F1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Body>
            <Form className="p-2 text-center" onSubmit={this.handleOnSubmit}>
              <h3>Edit Employee Records</h3>
              <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={this.props.data[this.state.data_index].Name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Surname"
                  name="surname"
                  value={this.props.data[this.state.data_index].Surname}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={this.props.data[this.state.data_index].Email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  name="phone"
                  value={this.props.data[this.state.data_index].Phone}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Enter Salary"
                  name="salary"
                  value={this.props.data[this.state.data_index].Salary}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ViewRecords;
