import {
    graphql,
    requestSubscription
} from 'react-relay'
import environment from '../../Environment'

const userSubscr = graphql`
    subscription UserSubscriptionSubscription {
        userCreated {
            userId
            name
            questions{
                text
                answer
            }
        }
    }
`

export default () => {
    const subscriptionConfig = {
        subscription: userSubscr,
        variables: {},

        updater:(store) => {
            // console.log("in subscription user updater")
            // const subscriptionRoot = store.getRootField('userCreated')
            // const userId = subscriptionRoot.getValue("userId")
            // const name = subscriptionRoot.getValue("name")
            // console.log("id "+userId+ " name "+name)
        },
        onError: error => console.log('An error occured during subscription user  '+error)
    }
    requestSubscription(
        environment,
        subscriptionConfig
    )
}