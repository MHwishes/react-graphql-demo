import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const MessageList = ({ data: {loading, error, messages }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="message-list">
      { messages.map( message =>
        (<li className="message-item" key={message.id}>{message.content}--{message.author}</li>)
      )}
    </div>
  );
};

export const messageListQuery = gql`
  query { 
      messages{
         id,
         content,
         author
      }
    }
`;

export default graphql(
  messageListQuery,{options: { pollInterval: 5000 }},
)(MessageList)