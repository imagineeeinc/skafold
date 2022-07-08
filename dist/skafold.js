export function e(...op) {
  let opts = seprate(op)
	return build(opts).outerHTML
}

function seprate(op) {
  let el = op[0]
  op.shift()
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
  return {atrs: atrs, children: children, ele: el}
}

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

export const skafold = {
  bind(ele) {
    return new (class {
      constructor(ele) {
        this.bindElement = ele
      }
      apply(...html) {
  let num = 0
        html.forEach(element => {
  if(num == 0) {  
              this.bindElement.innerHTML = element
  } else {
    this.bindElement.innerHTML += element
  }
        })
      }
    })(ele)
  }
}