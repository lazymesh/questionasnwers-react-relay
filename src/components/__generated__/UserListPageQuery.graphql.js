/**
 * @flow
 * @relayHash f9d5c7d6d87428b251af9ea6de842ccd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserListPageQueryVariables = {||};
export type UserListPageQueryResponse = {|
  +users: $ReadOnlyArray<{|
    +userId: number,
    +name: string,
  |}>
|};
export type UserListPageQuery = {|
  variables: UserListPageQueryVariables,
  response: UserListPageQueryResponse,
|};
*/


/*
query UserListPageQuery {
  users {
    userId
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "userId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserListPageQuery",
  "id": null,
  "text": "query UserListPageQuery {\n  users {\n    userId\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListPageQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91789b0b4eaebef783348477f264ce31';
module.exports = node;
