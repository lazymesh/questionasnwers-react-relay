import {
    commitMutation,
    graphql,
} from 'react-relay'
// import { ConnectionHandler } from 'relay-runtime'
import environment from "../../Environment"

const mutation = graphql`
  mutation CreateUserMutation($uId: Int!, $n: String!){
    createUser(userId: $uId, name: $n){
        userId
        name
    }
  }
`

export default (userId, name, callback) => {
    const variables = {
        uId: userId,
        n: name,
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: () => {
                callback()
            },
            onError: err => console.log(err)
        }
    )
}