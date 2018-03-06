import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';

class Image extends Component {

  state ={
    editing: false
  };

  render() {
    const { id, title, description, url } = this.props;
    
    return (
      <li className="image-li">
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <img src={url} alt={description}/>
          <div className="buttons">
            <button onClick={() => removeImage(id)}>X</button>
          </div>
        </div>
      </li>  
    );
  }
}

export default connect(
  null,
  { removeImage }
)(Image);