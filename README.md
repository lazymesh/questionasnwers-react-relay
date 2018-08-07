# questionasnwers-react-relay
front end project of graphql project to aid the QuestionAnswers backend graphql project

This project is created by using ``create-react-app`` command

The dependencies were added by doing the following 

```
yarn add graphql
yarn add react-relay
yarn add relay-compiler --dev
yarn add babel-plugin-relay --dev
```

schema is downloaded from the Graphql server by doing 

```
get-graphql-schema http://localhost:8080/graphql > shema.graphql
```

My graphql server is running at ``http://localhost:8080/graphql`` and ``schema.graphql`` is the filename for the downloaded schema