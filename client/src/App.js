import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { Query } from 'react-apollo'
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          < RandomData/>
          </p>
        </div>
      </ApolloProvider>
    )
  }
}

export default App