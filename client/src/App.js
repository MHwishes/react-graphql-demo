import React, { Component } from 'react'
import './App.css'
import AddMessage from './AddMessage'
import MessageList from './MessageList'

import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const RandomData = () => (
  <Query
    query={gql`
      {
        random
      }
    `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return <div>{data.random}</div>
    }}
  </Query>
)

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-intro">
            <h1 className="App-header">react-graphql-demo</h1>
            < RandomData/>
            <AddMessage/>
            <MessageList/>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App