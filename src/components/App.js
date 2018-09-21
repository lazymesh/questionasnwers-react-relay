import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import UserListPage from "./queries/user/UserListPage";
import QuestionListPage from "./queries/question/QuestionListPage";
import PaginationQuestionListPage from "./queries/question/pagination/PaginationQuestionListPage";
import CreateUser from "./mutations/CreateUser";
import CreateQuestion from "./mutations/CreateQuestion";
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <h4 className="navbar-brand">Question Answer react-relay app with graphql(sangria) and neo4j at backend</h4>
            </nav>

            <Header />
            <Switch>
                <Route exact path='/' component={QuestionListPage}/>
                <Route exact path='/users' component={UserListPage}/>
                <Route exact path='/create_user' component={CreateUser}/>
                <Route exact path='/create_question' component={CreateQuestion}/>
                <Route exact path='/paginatedQuestions' component={PaginationQuestionListPage}/>
            </Switch>
        </div>
    );
  }
}

export default App;
