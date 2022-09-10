<h1 align="center">Skafold</h1>
<h4 align="center">A small html scaffolding library, to build beautiful UI in JavaScript</h4>
Skafold (spelled as the regular Scaffold) is meant to be a unique js library to build websites by scaffolding up using modular bricks. Its quite simple as just creating elements in your code to build a nice DOM. There are helper functions in place to also apply changes to the actual dom.

## Example
```js
e('div', {
  id: "app",
  class: "bg-blue",
  js: "yes"
},
e('h1',
  "Skafold the app"
),
e('p',{
  css: "text-align: center;"
},
    'Welcome to the '+
    e('span', {
      style: "color: aqua;"
    }, 'Skafold')+
    ' web app.'+
    e('br')+
    'hope you have fun!'
  )
)
```
This converts to:
```html
<div id="app" class="bg-blue" js="yes">
  <h1>Skafold the app</h1>
  <p style="text-align: center;">
    Welcome to the <span style="color: aqua;">Skafold</span> web app.<br>hope you have fun!
  </p>
</div>
```
It's as simple as stacking bricks.

## Install
### Browser
Simple as importing this in your html:
```
# production
https://unpkg.com/skafold-js@latest/dist/skafold.min.js
# development
https://unpkg.com/skafold-js@latest/dist/skafold.js
```
### [NPM](https://www.npmjs.com/package/skafold-js)
```bash
npm install skafold-js
```
## Docs
### Usage
Importing
```js
// browser
import {e, skafold} from 'https://unpkg.com/skafold-js@latest/dist/skafold.min.js'
// Node (cjs)
const {e, skafold} = require('skafold-js')
// Node (esm)
import {e, skafold} from 'skafold-js'
```
Initiate an application or a block in the DOM
```js
var app = skafold.bind(document.body)
```
next lets scaffold out a virtual DOM
```js
//   This is a element block
//            \/
var theDom = e('div',
//               /\
//    The element you are creating
// Some css styling in a custom attribute
//             \
//              |
// Atributes    |
// put in a     |
// json object  |
//    \/        \/
  {css: `text-align: center`
         font-family: monoscape`
  },
// h1 element  Some text
// \          /
// \/        \/
  e('h1', 'Skafold')),
// p element
//  \
//  \/
  e('p', 'A best scafolding framework')
)
```
using now setting the selected elements inside to our new dom
```js
app.apply(theDom)
```

#### css attribute
A custom css attribute, works like the normal style attribute.
### `skafold.bind`
parms:
- dom element

creates a new link to a dom element
#### `skafold.apply`
parms:
- the virtual dom

applies the dom to actual dom

### `skafold.makeObject`
parms:
- a skafold element made with skafold (or any string that will be a DOM object)

turns skafold elements into DOM objects

### `skafold.strigify`
parms:
- a DOM object

turns DOM object into strings to be used in skafold

turns skafold elements into DOM objects

### `e` the element block
parms:
- The element (Required as first argument)
- The attributes in a json object
- children...

### text
basicly strings

# License
This project is under [MIT License](https://github.com/imagineeeinc/skafold/blob/main/LICENSE)
