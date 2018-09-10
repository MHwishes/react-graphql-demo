import { graphql } from 'react-apollo'
import React, { Component } from 'react'
import { mutate } from 'react-apollo'
import gql from 'graphql-tag';

class AddMessage extends Component {

  state = {
    author: '',
    content: ''
  }

  handleKeyUpAuthor = (evt) => {
    this.setState({author: evt.target.value})
  }

  handleKeyUpContent = (evt) => {
    this.setState({content: evt.target.value})
  }

  confirm = () => {
    this.props.mutate({
      variables: {author: this.state.author,content:this.state.content},
    })
      .then(res => {
        console.log(res,"成功啦")
        this.setState({author:'',content:''})
      })
  }

  render () {
    return (
      <div>
        <div>作者：<input
          type="text"
          value={this.state.author}
          placeholder="author"
          onChange={this.handleKeyUpAuthor}
        />
        </div>
        <div>
          内容：<input
          type="text"
          value={this.state.content}
          placeholder="New message"
          onChange={this.handleKeyUpContent}
        />
        </div>
        <button onClick={this.confirm}>确定</button>
      </div>
    )
  }
}

const addMessageMutation = gql`
 mutation createMessage($author:String,$content:String){
  createMessage(input: {
    author: $author,
    content: $content,
  }) {
    id
  }
}
`

export default graphql(
  addMessageMutation,
)(AddMessage)
