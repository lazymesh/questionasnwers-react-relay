import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import UserListPage from "./queries/user/UserListPage";
import QuestionListPage from "./queries/question/QuestionListPage";
import CreateUser from "./mutations/CreateUser";
import CreateQuestion from "./mutations/CreateQuestion";
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={QuestionListPage}/>
                <Route exact path='/users' component={UserListPage}/>
                <Route exact path='/create_user' component={CreateUser}/>
                <Route exact path='/create_question' component={CreateQuestion}/>
            </Switch>
        </div>

    );
  }
}

export default App;
