import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() { //avoid async behavior
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Post Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
