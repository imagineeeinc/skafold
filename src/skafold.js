(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global));
}(this, (function (exports) { 'use strict';
  exports.skafold = {
    bind: (ele) => {
      return new class {
        constructor(ele) {
          this.bindElement = ele
        }
        apply(html) {
          this.bindElement.innerHTML = html
        }
      }
    }
  }
  
  // The elements
  exports.div = (...op) => {
    let opts = seprate(op)
    opts.ele = "div"
  }
  function build(opts) {}
  function seprate(op) {
    let atrs = null
    let children = []
    if (Array.isArray(op[0]) == false) {
      atrs = op[0]
    } else if (String.isString(op[0]) == true) {
      children.push(op[0])
    } else if (Array.isArray(op[0]) == true) {
      children = op[0]
    } else {
      throw Error("The first option is not a array, json object or a string.")
    }
    return {atrs: atrs, children: children}
  }
  //Object.defineProperty(exports, '__esModule', { value: true });
})))