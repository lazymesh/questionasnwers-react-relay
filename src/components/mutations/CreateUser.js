import React, {Component} from 'react'
import CreateUserMutation from './CreateUserMutation'
import UserSubscription from '../subscription/UserSubscription'

class CreateUser extends Component{

    componentDidMount() {
        UserSubscription()
    }

    state = {
        userId: '',
        name : ''
    }

    render() {
        return (
            <div>
                <div>
                    <div>

                    <input
                        value={this.state.userId}
                        onChange={(e) => this.setState({userId: e.target.value})}
                        type='text'
                        placeholder='userId of the user below'
                    />

                    </div>
                    <div>
                    <input
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        type='text'
                        placeholder='user name for the id above'
                    />
                    </div>
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
        CreateUserMutation(parseInt(userId, 10), name, () => this.props.history.push('/users'))
    }
}

export default CreateUser