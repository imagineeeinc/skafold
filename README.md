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
## Usage
Initiate an application or a block in the DOM
```js
var app = skafold.bind(document.body)
```
next lets scafold out a virtual DOM
```js
//      This is a div
//            \/
var theDom = div(
  {css: `text-align: center`
         font-family: monoscape`
  },
  h1(txt("Skafold")),
  p(txt("A best scafolding framework"))
)
```
### List of available elements

* [X] div
* [X] txt
* [X] text
* [X] span
* [X] p
* [X] h1
* [X] h2
* [X] h3
* [X] h4
* [X] h5
* [X] h6
* [X] a
* [X] img
* [X] button
* [X] input
* [X] select
* [X] option
* [X] textarea
* [X] ul
* [X] ol
* [X] li
* [X] table
* [X] thead
* [X] tbody
* [X] tr
* [X] td
* [X] th
* [X] form
* [X] fieldset
* [X] legend
* [X] label
* [X] nav
* [X] section
* [X] article
* [X] aside
* [X] footer
* [X] header
* [X] time
* [X] main
* [X] br
* [X] hr
* [X] canvas
* [X] video
* [X] audio
* [X] source
* [X] image (diffrent from img)
* [X] code
* [X] pre
* [X] iframe
* [X] embed
* [X] i (talic)
* [X] b (old)
* [X] u (nderscore)
* [X] italic
* [X] bold
* [X] underscore
* [X] css or style
* [X] script

#### custom attributes

- css
