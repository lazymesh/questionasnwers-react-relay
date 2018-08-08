import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import UserListPage from "./queries/user/UserListPage";
import QuestionListPage from "./queries/question/QuestionListPage";
import CreateUser from "./mutations/CreateUser";
import CreateQuestion from "./mutations/CreateQuestion";

class App extends Component {
  render() {
    return (
        <div>
            <div>
                <p>Create a user</p>
                <CreateUser/>
            </div>
            <div>
                <p>Create a question</p>
                <CreateQuestion/>
            </div>
            <div>
                <p>users list</p>
                <UserListPage/>
            </div>
            <div>
                <p>questions list</p>
                <QuestionListPage/>
            </div>
        </div>

    );
  }
}

export default App;
