<h1 align="center">Skafold</h1>
<h4 align="center">A small html scaffolding library, to build beautiful UI in JavaScript</h4>
Skafold (speled as the regular Scafold) is meant ot be a unique js libary to build websites by scafolding up using modular bricks. Its quite simple as just calling creating elements in your code to build a nice DOM. There are helper functions inplace to also apply changes to the actual dom.

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
Simple as importing this in your html:
```
# production
https://cdn.jsdelivr.net/gh/imagineeeinc/skafold/dist/skafold.min.js
```
## Docs
### Usage
Initiate an application or a block in the DOM
```js
import {e, skafold} form 'https://cdn.jsdelivr.net/gh/imagineeeinc/skafold/dist/skafold.min.js'
var app = skafold.bind(document.body)
```
next lets scafold out a virtual DOM
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

### `e` the element block
parms:
- The element (Required as first argument)
- The attributes in a json object
- children...

### text
basicly strings

# License
This project is under [MIT License](https://github.com/imagineeeinc/skafold/blob/main/LICENSE)
