import React, {Component} from 'react'
import CreateUserMutation from './CreateUserMutation'

class CreateUser extends Component{

    state = {
        userId: '',
        name : ''
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.userId}
                        onChange={(e) => this.setState({userId: e.target.value})}
                        type='text'
                        placeholder='userId of the user below'
                    />
                    <input
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        type='text'
                        placeholder='user name for the id above'
                    />
                </div>
                <div
                    className='button'
                    onClick={() => this.createUser()}
                    >
                    submit
                </div>
            </div>
        )
    }

    createUser = () => {
        const {userId, name } = this.state
        CreateUserMutation(userId, name, () => console.log("user creation mutaation completed"))
    }
}

export default CreateUser