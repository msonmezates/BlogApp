import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const { meta : { touched, error } } = field;
    const className = `form group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}:</label>
        {/*field.input is an object that contains event handlers*/}
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <br/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values); -> {title:'aaa',categories:'bbb',content:'ccc'}

  const errors = {};

  //Validate the inputs from values
  if(!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  } else if(!values.categories) {
    errors.categories = 'Enter a category!';
  } else if(!values.content) {
    errors.content = 'Enter some content!'
  }

  //If errors object is empty, the form is fine to submit

  //If errors object has any property, redux-form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
