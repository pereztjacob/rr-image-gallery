export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_REMOVE = 'IMAGE_REMOVE';

export function images(state = [], { type, payload }) {
  switch(type) {

    case IMAGE_LOAD:
      return payload;

    case IMAGE_ADD:
      return [
        ...state,
        payload
      ];

    case IMAGE_REMOVE:
      return state.filter(n => n.id !== payload);

    default:
      return state;
  }
}