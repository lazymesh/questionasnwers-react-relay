import {
    commitMutation,
    graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from "../../Environment"

const mutation = graphql`
  mutation CreateQuestionMutation($text: String!, $answer: String!, $postedBy: Int!){
    createQuestion(text: $text, answer: $answer, postedBy: $postedBy){
        text
        answer
        postedBy
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
            onCompleted: () => {
                callback()
            },
            onError: err => console.log(err)
        }
    )
}