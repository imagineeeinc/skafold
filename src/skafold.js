(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global));
}(this, (function (exports) { 'use strict';
  exports.skafold = {
    bind: (ele) => {
      return new (class {
        constructor(ele) {
          this.bindElement = ele
        }
        apply(...html) {
          html.forEach(element => {
            this.bindElement.innerHTML = element
          })
        }
      })(ele)
    }
  }

  {{{elements}}}

  function build(opts) {
    let ele = document.createElement(opts.ele)
    if (opts.atrs) {
      Object.keys(opts.atrs).forEach(atr => {
        if (atr === 'css') {
          ele.setAttribute('style', opts.atrs[atr])
        } else {
          ele.setAttribute(atr, opts.atrs[atr])
        }
      })
    }
    if (opts.children) {
      opts.children.forEach(child => {
        if (typeof child === 'string' || child instanceof String) {
          ele.innerHTML += child
        } else {
          ele.appendChild(child)
        }
      })
    }
    return ele
  }
  function seprate(op) {
    let atrs = null
    let children = []
    if (typeof op[0] === 'object' || op[0] instanceof Object) {
      atrs = op[0]
      op.shift()
    }
    op.forEach(child => {
      if (typeof child === 'string' || child instanceof String) {
        children.push(child)
      } else {
        children.push(child)
      }
    })
    return {atrs: atrs, children: children}
  }
  //Object.defineProperty(exports, '__esModule', { value: true });
})))
