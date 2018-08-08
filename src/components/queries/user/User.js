import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class User extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.user.userId}
                    ({this.props.user.name})
                </div>
            </div>
        )
    }

}

export default createFragmentContainer(User, graphql`
    fragment User_user on User {
        userId
        name
    }
`)