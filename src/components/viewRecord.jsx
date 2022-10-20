import React, { Component } from "react";

import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

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

  openModal = (employee_id) => {
    this.setState({ isOpen: true });

    const index = this.props.data
      .map((object) => object.id)
      .indexOf(employee_id);

    this.setState({ data_index: index });
  };

  handleOnSubmitUpdate = (event) => {
    event.preventDefault();
    this.props.onUpdate({
      id: event.target.employee_id.value,
      name: event.target.name.value,
      surname: event.target.surname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      salary: event.target.salary.value,
    });

    this.setState({ isOpen: false });
  };

  render() {
    let { data } = this.props;
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
                <td key={employee.name}>{employee.name}</td>
                <td key={employee.surname}>{employee.surname}</td>
                <td key={employee.email}>{employee.email}</td>
                <td key={employee.phone}>{employee.phone}</td>
                <td key={employee.salary}>{employee.salary}</td>
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
            <Form
              className="p-2 text-center"
              onSubmit={this.handleOnSubmitUpdate}
            >
              <Form.Control
                type="hidden"
                name="employee_id"
                defaultValue={data[this.state.data_index].id}
              />
              <h3>Edit Employee Records</h3>
              <Form.Group className="mt-4 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  defaultValue={data[this.state.data_index].name}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Surname"
                  name="surname"
                  defaultValue={data[this.state.data_index].surname}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  defaultValue={data[this.state.data_index].email}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  name="phone"
                  defaultValue={data[this.state.data_index].phone}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Salary"
                  name="salary"
                  defaultValue={data[this.state.data_index].salary}
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
