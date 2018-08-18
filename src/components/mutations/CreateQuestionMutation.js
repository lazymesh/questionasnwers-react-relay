import {
    commitMutation,
    graphql,
} from 'react-relay'
// import { ConnectionHandler } from 'relay-runtime'
import environment from "../../Environment"

const mutation = graphql`
  mutation CreateQuestionMutation($text: String!, $answer: String!, $postedBy: Int!){
    createQuestion(text: $text, answer: $answer, postedBy: $postedBy){
        text
        answer
        postedBy
        createdAt
    }
  }
`

export default (question, answerInput, postBy, callback) => {
    const variables = {
        text: question,
        answer: answerInput,
        postedBy: postBy
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            optimisticUpdater: (store) => {
            },
            updater: (store) => {
              // console.log("updater of create question mutation")
                // const mutatedData = store.getRootField("createQuestion")
                // const text = mutatedData.getValue("text")
                // const answer = mutatedData.getValue("answer")
                // const postedBy= mutatedData.getValue("postedBy")
                // const createdAt= mutatedData.getValue("createdAt")
                // console.log("text "+text+ " answer "+answer+ " postedBy "+postedBy+ " createdAt "+createdAt)
            },
            onCompleted: () => {
                callback()
            },
            onError: err => console.log("error in question mutation "+err)
        }
    )
}