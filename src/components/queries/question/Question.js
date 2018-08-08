import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Question extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.question.text}
                       {this.props.question.answer}
                       {this.props.question.postedBy}
                       {this.props.question.createdAt}
                </div>
            </div>
        )
    }

}

export default createFragmentContainer(Question, graphql`
    fragment Question_question on Question {
        text
        answer
        postedBy
        createdAt
    }
`)