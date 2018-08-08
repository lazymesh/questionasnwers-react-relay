import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'>questions</Link>
                {"\t\t"}|{"\t\t"}
                <Link to='/users'>users</Link>
                {"\t\t"}|{"\t\t"}
                <Link to='/create_user'>createUser</Link>
                {"\t\t"}|{"\t\t"}
                <Link to='/create_question'>createQuestion</Link>
                <div>-</div>
            </div>

        );
    }
}

export default withRouter(Header);