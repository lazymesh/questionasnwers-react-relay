import {
    graphql,
    requestSubscription
} from 'react-relay'
import environment from '../../Environment'

const questionSubscr = graphql`
    subscription QuestionSubscriptionSubscription {
        questionCreated {
            text
            answer
        }
    }
`

export default () => {
    const subscriptionConfig = {
        subscription: questionSubscr,
        variables: {},

        updater:(store) => {
            console.log("in subscription question updater")
            const q = store.getRootField("questionCreated")
            const tt = q.getValue("text")
            console.log(tt)
        },
        onCompleted: () => console.log("completed subscription"),
        onError: error => console.log('An error occured during subscription question  '+error)
    }
    requestSubscription(
        environment,
        subscriptionConfig
    )
}