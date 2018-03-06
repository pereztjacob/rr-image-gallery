import React, { Component } from 'react';
import './Image.css';

export default class ImageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ title: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.title]: target.value });
  };

  render() {
    const { title, description, url } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit} className="add-image">
          <label htmlFor="image">
            <input required name="title" value={title} onChange={this.handleChange} placeholder="image title"/>
            <input required name="description" value={description} onChange={this.handleChange} placeholder="description"/>
            <input required name="url" value={url} onChange={this.handleChange} placeholder="image URL"/>
          </label>
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}