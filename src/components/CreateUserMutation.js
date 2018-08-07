// import {
//     commitMutation,
//     graphql,
// } from 'react-relay'
// import { ConnectionHandler } from 'relay-runtime'
// import environment from "../Environment"
//
// const mutation = graphql`
//   mutation CreateUserMutation($input: mutation!){
//     createUser(data: $input){
//       User{
//         userId
//         name
//       }
//     }
//   }
// `
//
// export default (userId, name, callback) => {
//     const variables = {
//         input: {
//             userId,
//             name,
//             clientMutationId: ""
//         },
//     }
//
//     commitMutation(
//         environment,
//         {
//             mutation,
//             variables,
//             onCompleted: () => {
//                 callback()
//             },
//             onError: err => console.log(err)
//         }
//     )
// }