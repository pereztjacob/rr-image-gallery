import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage, load } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';
import './Image.css';

class Images extends Component {
  
  render() {
    const { images, addImage } = this.props;
    return (
      <div>
        <div>
          <p>Add a cute bunny image</p>
          <ImageForm onEdit={image => addImage(image)}/>
        </div>
        <ul className="image-ul">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addImage, load }
)(Images);