import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        const marginLeftStyle = {
            marginLeft : '5px',
            marginRight: '5px'
        }
        return (
            <div>
                <Link to='/' class='button' style={marginLeftStyle}>questions</Link>
                <Link to='/users' class='button' style={marginLeftStyle}>users</Link>
                <Link to='/create_user' class='button' style={marginLeftStyle}>createUser</Link>
                <Link to='/create_question' class='button' style={marginLeftStyle}>createQuestion</Link>
                <div>-</div>
            </div>

        );
    }
}

export default withRouter(Header);