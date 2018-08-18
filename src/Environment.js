import fetchS from 'fetch-streaming'

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
        fetchS('http://localhost:8080/graphql',
            {method: 'POST',
                    headers: {
                        'Accept': 'text/event-stream',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: config.text,
                        variables,
                    }),
                 },
                stream => {
                    observer.onNext({data: JSON.parse(stream.substring(5))})
                }
        )
    }
)

const environment = new Environment({
    network,
    store,
})

export default environment