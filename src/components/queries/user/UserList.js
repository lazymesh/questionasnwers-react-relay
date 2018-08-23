import React, { Component } from 'react'
import User from './User'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class UserList extends Component {
    render(){
        return(
            <ol>
                {this.props.viewer.users.map( user =>(
                    <li>
                        <User key={user.__id} user={user}/>
                    </li>
                    ))
                }
            </ol>
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
