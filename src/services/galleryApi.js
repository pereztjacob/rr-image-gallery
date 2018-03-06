const URL = 'https://image-gallery-server.herokuapp.com/api';

function load() {
  return fetch(`${URL}/albums/5a9edd5cd22df00021b2c655`)
    .then(response => response.json());
}

function add(image) {
  return fetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  }).then(response => response.json);
}

export default {
  load,
  add,
  remove
};