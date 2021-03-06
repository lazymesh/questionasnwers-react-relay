import React, { Component } from 'react'
import Question from './Question'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class QuestionList extends Component {
    render(){
        return(
            <ol>
                {this.props.viewer.questions.map( (question) =>(
                    <li>
                        <Question key={question.__id} question={question}/>
                    </li>
                ))
                }
            </ol>
        )
    }
}

export default createFragmentContainer(QuestionList, graphql`
    fragment QuestionList_viewer on Query {
        questions{
              ...Question_question
        }
    }
`)