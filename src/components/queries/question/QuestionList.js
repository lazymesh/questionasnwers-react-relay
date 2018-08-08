import React, { Component } from 'react'
import Question from './Question'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class QuestionList extends Component {
    render(){
        return(
            <div>
                {this.props.viewer.questions.map( question =>(
                    <Question question={question}/>
                ))
                }
            </div>
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