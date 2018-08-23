import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class User extends Component {
    render() {
        return (
            <p>{this.props.user.name}</p>
        )
    }

}

export default createFragmentContainer(User, graphql`
    fragment User_user on User {
        userId
        name
    }
`)