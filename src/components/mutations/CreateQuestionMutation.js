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
              //   const ud = store.getRootField("createQuestion")
              //   const udd= ud.getValue("text")
              //   console.log(udd)
                // const q = store.get(this.props.test.test)
                // console.log(q)
            },
            onCompleted: () => {
                callback()
            },
            onError: err => console.log(err)
        }
    )
}