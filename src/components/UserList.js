import React, { Component } from 'react'
import User from './User'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class UserList extends Component {
    render(){
        return(
            <div>
                {this.props.viewer.users.map( user =>(
                        <User user={user}/>
                    ))
                }
            </div>
        )
    }
}

export default createFragmentContainer(UserList, graphql`
    fragment UserList_viewer on Query {
        users{
              ...User_user
        }
    }
`)
