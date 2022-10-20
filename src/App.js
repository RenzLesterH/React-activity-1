import React, { Component } from "react";

/*Components*/
import Add from "./components/add";
import NavBar from "./components/navbar";
import Records from "./records.json";
import Search from "./components/search";
import ViewRecord from "./components/viewRecord";

import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: Records
    }
  }

  onAdd = (employee_new_data) => {
    this.setState(prevState => ({
      employees: [...prevState.employees, employee_new_data]
    }))
  };

  onUpdate = (employee_data) => {
    let employees = [...this.state.employees];
    employees.map(employee_item => {
      if (parseInt(employee_item.id) === parseInt(employee_data.id)) {
        employee_item.name = employee_data.name;
        employee_item.surname = employee_data.surname;
        employee_item.email = employee_data.email;
        employee_item.phone = employee_data.phone;
        employee_item.salary = employee_data.salary;
      };

    });
    this.setState({ employees });
  };

  onDelete = (fetched_employee_id) => {
    const employees = this.state.employees.filter((employee) => employee.id !== fetched_employee_id);
    this.setState({ employees });
  };

  render() {
    // console.log(this.state.employees);
    let { employees } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h2 className="text-center mt-5 mb-5">View Record</h2>
          <div className="d-flex justify-content-between mt-5">
            <Search />
            <Add onAdd={this.onAdd} employee_id={employees.length} />
          </div>
          <ViewRecord
            data={employees}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
