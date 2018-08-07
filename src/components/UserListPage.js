import React, { Component } from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import UserList from './UserList'
import User from "./User";

const UserListPageQuery = graphql`
    query UserListPageQuery {
        users{
            userId
            name
        }
    }
`

class UserListPage extends Component {

    render() {
        return(
            <QueryRenderer
            environment={environment}
            query={UserListPageQuery}
            render={({error, props}) =>{
                if(error){
                    return <div>{error.message}</div>
                }else if(props){
                    return (
                        <div>
                            <div>userId(name)</div>
                            <div>{props.users.map(u => <User user={u}/>)}</div>
                        </div>
                    )
                }
                return <div>Loading</div>
            }}
            />
        )
    }
}

export default UserListPage