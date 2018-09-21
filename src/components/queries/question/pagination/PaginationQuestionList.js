import React, { Component } from 'react'
import Question from '../Question'
import {
    createPaginationContainer,
    graphql
} from 'react-relay'

class PaginationQuestionList extends Component {
    render(){
        return(
            <div>
                <div>
                    <ol>
                        {this.props.viewer.pagedquestions.edges.map( (question) =>(
                            <li>
                                <Question key={question.__id} question={question.node}/>
                            </li>
                        ))
                        }
                    </ol>
                </div>
                <div>
                    <div className='button' onClick={() => this._loadMore()}>click for More</div>
                </div>
            </div>
        )
    }

    _loadMore(){
        console.log(!this.props.relay.hasMore() +" "+ this.props.relay.isLoading())
        if(!this.props.relay.hasMore() || this.props.relay.isLoading()){
            return;
        }
        this.props.relay.loadMore(
            1,
            error => {console.log(error); }
        );
    }
}

export default createPaginationContainer(PaginationQuestionList,
    {
        viewer: graphql`
        fragment PaginationQuestionList_viewer on Query {
            pagedquestions(
                first: $count, 
                after: $after
                ) 
                @connection(key: "PaginationQuestionList_pagedquestions")
            {
                edges{
                    node{
                        ...Question_question
                    }
                }
                pageInfo{
                    hasNextPage
                    endCursor
                }
            }
        }
    `,
    },
    {
        direction: 'forward',
        query: graphql`
        query PaginationQuestionListForwardQuery(
            $count: Int!,
            $after:String
            )
        {
            ...PaginationQuestionList_viewer
        }`,
        getConnectionFromProps(props){
            return props.viewer && props.viewer.pagedquestions
        },
        getFragmentVariables(previousVariables, totalCount){
            return {
                ...previousVariables,
                count: totalCount,
            }
        },
        getVariables(props, paginationInfo, fragmentVariables){
            return {
                count: paginationInfo.count,
                after: paginationInfo.cursor,
            }
        }
    }
)