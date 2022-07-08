<h1 align="center">Skafold</h1>
<h4 align="center">A small html scaffolding library, to build beautiful UI in JavaScript</h4>
Skafold (speled as the regular Scafold) is meant ot be a unique js libary to build websites by scafolding up using modular bricks. Its quite simple as just calling a few functions in your code to build a nice dom. There are helper functions inplace to also apply changes to the actual dom.

## Example
```js
div({
  id: "app",
  class: "bg-blue",
  js: "yes"
},
  h1(
    txt("Skafold the app")
  ),
  p({
    css: "text-align: center;"
  },
    text(
      'Welcome to the '+
      span({
        style: "color: aqua;"
      }, 'Skafold')+
      ' web app.'+
      br()+
      'hope you have fun!'
    )
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
It's as simple as defining functions.

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
var app = skafold.bind(document.body)
```
next lets scafold out a virtual DOM
```js
//      This is a div
//            \/
var theDom = div(
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
  h1(txt("Skafold")),
// p element    Some text also, thats just a string also works
//  \           /
// \/          \/
  p("A best scafolding framework")
)
```
using now setting the selected elements inside to our new dom
```js
app.apply(theDom)
```
Now read on avalible elements
### List of available elements
- [list of elements in a js file](https://github.com/imagineeeinc/skafold/blob/main/src/elements.js)
- [list of elements in a md file](https://github.com/imagineeeinc/skafold/blob/main/list-o-elements.md)
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

### The elements
parms:
- The attributes in a json objects
- children...

makes a elements with the attributs and children
### txt
parms:
- the text

makes a text string
