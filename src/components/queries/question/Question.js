import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Question extends Component {
    render() {
        return (
                <div>
                    <p><b>{this.props.question.text}</b></p>
                    <p>{this.props.question.answer}</p>
                    <p>Posted by : {this.props.question.user.name} on {this.props.question.createdAt}</p>
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
        user{
            name
        }
    }
`)