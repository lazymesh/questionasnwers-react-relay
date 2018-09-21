import React, { Component } from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../../../../Environment'
import PaginationQuestionList from './PaginationQuestionList'

const PaginationQuestionListPageQuery = graphql`
    query PaginationQuestionListPageQuery($count: Int!, $after:String) {
        ...PaginationQuestionList_viewer
    }
`

class PaginationQuestionListPage extends Component {

    render() {
        return(
            <QueryRenderer
                environment={environment}
                variables={{
                    count:1,
                    after:""
                }}
                query={PaginationQuestionListPageQuery}
                render={({error, props}) =>{
                    if(error){
                        return <div>{error.message}</div>
                    }else if(props){
                        return <PaginationQuestionList viewer={props}/>
                    }
                    return <div>Loading</div>
                }}
            />
        )
    }
}

export default PaginationQuestionListPage