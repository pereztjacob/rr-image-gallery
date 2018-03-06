import { IMAGE_LOAD, IMAGE_ADD, IMAGE_REMOVE } from './reducers';
import galleryApi from '../../services/galleryApi';

export function load() {
  return dispatch => {
    return galleryApi.load()
      .then(images => {
        dispatch({
          type: IMAGE_LOAD,
          payload: images
        });
      });
  };
}

export function addImage(image) {
  return (dispatch) => {
    return galleryApi.add(image)
      .then(addedImage => {
        const action = {
          type: IMAGE_ADD,
          payload: addedImage
        };
        dispatch(action);
      });
  };
}

export function removeImage(id) {
  return dispatch => {
    return galleryApi.remove(id)
      .then(() => {
        dispatch({
          type: IMAGE_REMOVE,
          payload: id
      
        });
      });
  };
}