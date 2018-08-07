import React, { Component } from 'react'
import User from './User'
// import {
//     createFragmentContainer,
//     graphql
// } from 'react-relay'

class UserList extends Component {
    render(){
        return(
            <div>
                {this.props.viewer.edges.map( edge =>(
                        <User user={edge.node}/>
                    ))
                }
            </div>
        )
    }
}

export default UserList

// export default createFragmentContainer(UserList, graphql`
//     fragment UserList_viewer on User {
//         users(first:100){
//           edges{
//             node{
//               id,
//               ...User_user
//             }
//           }
//         }
//     }
// `)

// class UserList extends Component {
//     render(){
//         const usersToRender = [{
//             id: '1',
//             name: "ramesh"
//         },{
//             id:'2',
//             name:'sulu'
//         }]
//
//         return (
//             <div>
//                 {usersToRender.map(user => (
//                     <User key={user.id} user={user}/>
//                 ))}
//             </div>
//         )
//     }
// }
//
// export default UserList