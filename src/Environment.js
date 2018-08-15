// import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
    return fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Credentials': true,
            // 'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
},
    (config, variables, cacheConfig, observer) => {
        return fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: config.text,
                variables,
            }),
        }).then(response => {
            console.log("subsccccccccccccccccccccsssssssssssssssss")
            return response.json()
            // observer.onNext({data: response.json()})
        })
    // const subscriptionClient = new SubscriptionClient('http://localhost:8080/graphql', {reconnect: true});
    // subscriptionClient.subscribe({query, variables}, (error, result) => {
    // observer.onNext({data: result})
    // })
}
)

const environment = new Environment({
    network,
    store,
})

export default environment