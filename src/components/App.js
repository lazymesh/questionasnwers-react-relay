import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import UserListPage from "./UserListPage";
import CreateUser from "./CreateUser";

class App extends Component {
  render() {
    return (
      <UserListPage/>
    );
  }
}

export default App;
