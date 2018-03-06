React/Redux Cute Bunny Image Gallery
===

For this assignment, build and image gallery view that has:
* A main page that displays a lists of images
    * Allows user to add an image
    * Allows an image to be removed
* Add and remove functionality for the list of images:
  * Use redux to manage state
  * Async Actions
    * Load Images
    * Add a new image
    * Remove an existing image
  * Use common loading and error handling for the three async actions
  
## Data

The image data looks like:

```js
{ 
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}
```

You can use your own URL, or work with these cute bunnies:

* http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg 
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg

## Components

For now, pick on of the three image viewer component(s) styles:

1. "list" 
    1. tabular list - show the list like a table
    1. list item - display the title of the image, the link (not the  actual image), and description.  
1. "thumbnail" -  
    1. float or inline-block list - show "cards" for each image
    1. each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).
1. "gallery" - 
    1. display one image at a time, have left and right arrows to advance/go back
    1. Display the title, description and the full-size image.

## Stretch Goal:

* Create the other two views as well. You can use the router to determine which to display:
    * `/images/gallery`
    * `/images/thumbnail`
    * `/images/list`

## Testing

Unit test:
* Reducers

## Rubric *10pts*
- reducers and actions **2pts**
- testing reducers **2pts**
- connect Container components **2pts**
- Presentation components **2pt**
- Project Organization **1pt**
- Code quality **1pt**
