var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var skafold_exports = {};
__export(skafold_exports, {
  e: () => e,
  skafold: () => skafold
});
function e(...op) {
  let opts = seprate(op);
  return build(opts).outerHTML;
}
function seprate(op) {
  let el = op[0];
  op.shift();
  let atrs = null;
  let children = [];
  if (typeof op[0] === "object" || op[0] instanceof Object) {
    atrs = op[0];
    op.shift();
  }
  op.forEach((child) => {
    if (typeof child === "string" || child instanceof String) {
      children.push(child);
    } else {
      children.push(child);
    }
  });
  return { atrs, children, ele: el };
}
function build(opts) {
  let ele = document.createElement(opts.ele);
  if (opts.atrs) {
    Object.keys(opts.atrs).forEach((atr) => {
      if (atr === "css") {
        ele.setAttribute("style", opts.atrs[atr]);
      } else {
        ele.setAttribute(atr, opts.atrs[atr]);
      }
    });
  }
  if (opts.children) {
    opts.children.forEach((child) => {
      if (typeof child === "string" || child instanceof String) {
        ele.innerHTML += child;
      } else {
        ele.appendChild(child);
      }
    });
  }
  return ele;
}
const skafold = {
  bind(ele) {
    return new class {
      constructor(ele2) {
        this.bindElement = ele2;
      }
      apply(...html) {
        let num = 0;
        html.forEach((element) => {
          if (num == 0) {
            this.bindElement.innerHTML = element;
          } else {
            this.bindElement.innerHTML += element;
          }
        });
      }
    }(ele);
  }
};
module.exports = __toCommonJS(skafold_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  e,
  skafold
});
