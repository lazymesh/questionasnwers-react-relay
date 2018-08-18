# questionasnwers-react-relay
Front end project of graphql project (haven't worked on CSS part yet) to aid the [QuestionAnswers](https://github.com/lazymesh/QuestionAnswers) backend graphql project

This project is created by using ``create-react-app`` command

The dependencies were added by doing the following 

```
yarn add graphql
yarn add react-relay
yarn add relay-compiler --dev
yarn add babel-plugin-relay --dev
```

Schema is downloaded from the Graphql server by doing 

```
get-graphql-schema http://localhost:8080/graphql > shema.graphql
```

My graphql server is running at ``http://localhost:8080/graphql`` and ``schema.graphql`` is the filename for the downloaded schema

The project can be started by using ``yarn start`` but before that make sure you run relay compiler by doing ``yarn relay-compiler --src ./src --schema schema.graphql``

Subscription is added which is done on SSE (Server Sent Events) rather than web sockets. [fetch-streaming](https://www.npmjs.com/package/fetch-streaming) dependecy was used for subscription to work 

```
yarn add fetch-streaming
```
More info on how subscription should work is on [Subscription-relay](https://facebook.github.io/relay/docs/en/subscriptions.html)
