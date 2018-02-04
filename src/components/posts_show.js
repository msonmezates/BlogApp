import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    if(!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  handleDeletePost() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.handleDeletePost.bind(this)}
        >Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id] //ownProps === this.props in this context
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
