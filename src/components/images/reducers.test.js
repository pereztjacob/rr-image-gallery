import { images, IMAGE_ADD/*, IMAGE_LOAD*/ } from './reducer';

const imageToAdd = {
  title: 'bunny',
  description: 'proper bunny description',
  url: 'http://cdn.video.nationalgeographic.com/cd/69/020352bf4a99a44c01ecaddf7f1b/171012-wild-sand-cat-kittens-filmed.jpg'
};

it('Add an image', () => {
  const state = images([], { type: IMAGE_ADD, payload: imageToAdd });
  expect(state).toEqual([imageToAdd]);
});

// it('loads images', () => {
//   c
// })