import React, { Component, useEffect, useState } from 'react';
import NavBar from './components/navbar';
import ViewRecord from './components/viewRecord';
import './App.css';
import Search from "./components/search";
import Add from "./components/add";
import Records from './records.json';

class App extends Component {
  state = {
    employess: Records
  }

  onAdd = (obj) => {
    this.setState(prevState => ({
      employess: [...prevState.employess, obj]
    }))
  };

  onDelete = (id) => {
    const employess = this.state.employess.filter((c) => c.id !== id);
    this.setState({ employess });
  };

  render() {
    console.log(this.state.employess);
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <h2 className="text-center mt-5 mb-5">View Record</h2>
          <div className="d-flex justify-content-between mt-5">
            <Search />
            <Add onAdd={this.onAdd} employee_id={this.state.employess.length} />
          </div>
          <ViewRecord
            data={this.state.employess}
            onDelete={this.onDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
