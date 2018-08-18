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
            updater: (store) => {
                // console.log("in updater of user mutation")
                // const mutatedRoot = store.getRootField('createUser')
                // const userId = mutatedRoot.getValue("userId")
                // const name = mutatedRoot.getValue("name")
                // console.log("id "+userId+ " name "+name)
            },
            onCompleted: () => {
                callback()
            },
            onError: err => console.log("error in user mutation "+err)
        }
    )
}