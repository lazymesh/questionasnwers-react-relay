const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
    console.log(operation)
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
})

const environment = new Environment({
    network,
    store,
})

export default environment