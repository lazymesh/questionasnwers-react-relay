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
            postedBy
            createdAt
        }
    }
`

export default () => {
    const subscriptionConfig = {
        subscription: questionSubscr,
        variables: {},

        updater:(store) => {
            // console.log("in subscription question updater")
            // const subscriptionRoot = store.getRootField('questionCreated')
            // const text = subscriptionRoot.getValue("text")
            // const answer = subscriptionRoot.getValue("answer")
            // const postedBy= subscriptionRoot.getValue("postedBy")
            // const createdAt= subscriptionRoot.getValue("createdAt")
            // console.log("text "+text+ " answer "+answer+ " postedBy "+postedBy+ " createdAt "+createdAt)
        },
        onError: error => console.log('An error occured during subscription question  '+error)
    }
    requestSubscription(
        environment,
        subscriptionConfig
    )
}