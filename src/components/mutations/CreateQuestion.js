import React, {Component} from 'react'
import CreateQuestionMutation from './CreateQuestionMutation'

class CreateQuestion extends Component{

    state = {
        text: '',
        answer: '',
        postedBy: ''
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <input
                            value={this.state.text}
                            onChange={(e) => this.setState({text: e.target.value})}
                            type='text'
                            placeholder='a new question'
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.answer}
                            onChange={(e) => this.setState({answer: e.target.value})}
                            type='text'
                            placeholder='answer to the question'
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.postedBy}
                            onChange={(e) => this.setState({postedBy: e.target.value})}
                            type='text'
                            placeholder='enter your userId'
                        />
                    </div>
                </div>
                <div
                    className='button'
                    onClick={() => this.createQuestion()}
                >
                    submit Question
                </div>
            </div>
        )
    }

    createQuestion = () => {
        const {text, answer, postedBy } = this.state
        CreateQuestionMutation(text, answer, parseInt(postedBy), () => console.log("user creation mutaation completed"))
    }
}

export default CreateQuestion