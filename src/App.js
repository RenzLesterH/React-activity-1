import React, { Component } from 'react';

/*Components*/
import Add from "./components/add";
import NavBar from './components/navbar';
import Records from './records.json';
import Search from "./components/search";
import ViewRecord from './components/viewRecord';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employess: Records
    }
  }


  onAdd = (obj) => {
    this.setState(prevState => ({
      employess: [...prevState.employess, obj]
    }))
  };

  onUpdate = (employee_data) => {
    let employess = [...this.state.employess];
    employess.map(employee_item => {
      if (parseInt(employee_item.id) === parseInt(employee_data.id)) {
        employee_item.Name = employee_data.Name;
        employee_item.Surname = employee_data.Surname;
        employee_item.Email = employee_data.Email;
        employee_item.Phone = employee_data.Phone;
        employee_item.Salary = employee_data.Salary;
      };

    });

    console.log(employess);

    this.setState({ employess });
  };

  onDelete = (id) => {
    const employess = this.state.employess.filter((c) => c.id !== id);
    this.setState({ employess });
  };

  render() {
    console.log(this.state.employess);
    let { employess } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h2 className="text-center mt-5 mb-5">View Record</h2>
          <div className="d-flex justify-content-between mt-5">
            <Search />
            <Add onAdd={this.onAdd} employee_id={employess.length} />
          </div>
          <ViewRecord
            data={employess}
            onDelete={this.onDelete}
            onUpdate={this.onUpdate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
