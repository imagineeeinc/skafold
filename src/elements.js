// The elements
exports.div = (...op) => {
	let opts = seprate(op)
	opts.ele = "div"
	return build(opts).outerHTML
}
exports.txt = (...op) => {
	return op[0]
}
exports.text = (...op) => {
	return op[0]
}
exports.span = (...op) => {
	let opts = seprate(op)
	opts.ele = "span"
	return build(opts).outerHTML
}
exports.p = (...op) => {
	let opts = seprate(op)
	opts.ele = "p"
	return build(opts).outerHTML
}
exports.h1 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h1"
	return build(opts).outerHTML
}
exports.h2 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h2"
	return build(opts).outerHTML
}
exports.h3 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h3"
	return build(opts).outerHTML
}
exports.h4 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h4"
	return build(opts).outerHTML
}
exports.h5 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h5"
	return build(opts).outerHTML
}
exports.h6 = (...op) => {
	let opts = seprate(op)
	opts.ele = "h6"
	return build(opts).outerHTML
}
exports.a = (...op) => {
	let opts = seprate(op)
	opts.ele = "a"
	return build(opts).outerHTML
}
exports.img = (...op) => {
	let opts = seprate(op)
	opts.ele = "img"
	return build(opts).outerHTML
}
exports.button = (...op) => {
	let opts = seprate(op)
	opts.ele = "button"
	return build(opts).outerHTML
}
exports.input = (...op) => {
	let opts = seprate(op)
	opts.ele = "input"
	return build(opts).outerHTML
}
exports.select = (...op) => {
	let opts = seprate(op)
	opts.ele = "select"
	return build(opts).outerHTML
}
exports.option = (...op) => {
	let opts = seprate(op)
	opts.ele = "option"
	return build(opts).outerHTML
}
exports.textarea = (...op) => {
	let opts = seprate(op)
	opts.ele = "textarea"
	return build(opts).outerHTML
}
exports.ul = (...op) => {
	let opts = seprate(op)
	opts.ele = "ul"
	return build(opts).outerHTML
}
exports.ol = (...op) => {
	let opts = seprate(op)
	opts.ele = "ol"
	return build(opts).outerHTML
}
exports.li = (...op) => {
	let opts = seprate(op)
	opts.ele = "li"
	return build(opts).outerHTML
}
exports.table = (...op) => {
	let opts = seprate(op)
	opts.ele = "table"
	return build(opts).outerHTML
}
exports.thead = (...op) => {
	let opts = seprate(op)
	opts.ele = "thead"
	return build(opts).outerHTML
}
exports.tbody = (...op) => {
	let opts = seprate(op)
	opts.ele = "tbody"
	return build(opts).outerHTML
}
exports.tr = (...op) => {
	let opts = seprate(op)
	opts.ele = "tr"
	return build(opts).outerHTML
}
exports.td = (...op) => {
	let opts = seprate(op)
	opts.ele = "td"
	return build(opts).outerHTML
}
exports.th = (...op) => {
	let opts = seprate(op)
	opts.ele = "th"
	return build(opts).outerHTML
}
exports.form = (...op) => {
	let opts = seprate(op)
	opts.ele = "form"
	return build(opts).outerHTML
}
exports.fieldset = (...op) => {
	let opts = seprate(op)
	opts.ele = "fieldset"
	return build(opts).outerHTML
}
exports.legend = (...op) => {
	let opts = seprate(op)
	opts.ele = "legend"
	return build(opts).outerHTML
}
exports.label = (...op) => {
	let opts = seprate(op)
	opts.ele = "label"
	return build(opts).outerHTML
}
exports.nav = (...op) => {
	let opts = seprate(op)
	opts.ele = "nav"
	return build(opts).outerHTML
}
exports.section = (...op) => {
	let opts = seprate(op)
	opts.ele = "section"
	return build(opts).outerHTML
}
exports.article = (...op) => {
	let opts = seprate(op)
	opts.ele = "article"
	return build(opts).outerHTML
}
exports.aside = (...op) => {
	let opts = seprate(op)
	opts.ele = "aside"
	return build(opts).outerHTML
}
exports.footer = (...op) => {
	let opts = seprate(op)
	opts.ele = "footer"
	return build(opts).outerHTML
}
exports.header = (...op) => {
	let opts = seprate(op)
	opts.ele = "header"
	return build(opts).outerHTML
}
exports.time = (...op) => {
	let opts = seprate(op)
	opts.ele = "time"
	return build(opts).outerHTML
}
exports.main = (...op) => {
	let opts = seprate(op)
	opts.ele = "main"
	return build(opts).outerHTML
}
exports.br = (...op) => {
	return document.createElement("br").outerHTML
}
exports.hr = (...op) => {
	return document.createElement("hr").outerHTML
}
exports.define = (...op) => {
	let ele = op.shift()
	let opts = seprate(op)
	opts.ele = ele
	return build(opts).outerHTML
}
exports.customEle = (...op) => {
	let ele = op.shift()
	let opts = seprate(op)
	opts.ele = ele
	return build(opts).outerHTML
}
exports.custEle = (...op) => {
	let ele = op.shift()
	let opts = seprate(op)
	opts.ele = ele
	return build(opts).outerHTML
}
exports.newEle = (...op) => {
	let ele = op.shift()
	let opts = seprate(op)
	opts.ele = ele
	return build(opts).outerHTML
}
exports.script = (...op) => {
	let opts = seprate(op)
	opts.ele = "script"
	return build(opts).outerHTML
}
exports.style = (...op) => {
	let opts = seprate(op)
	opts.ele = "style"
	return build(opts).outerHTML
}
exports.cssBlock = (...op) => {
	let opts = seprate(op)
	opts.ele = "style"
	return build(opts).outerHTML
}
exports.canvas = (...op) => {
	let opts = seprate(op)
	opts.ele = "canvas"
	return build(opts).outerHTML
}
exports.video = (...op) => {
	let opts = seprate(op)
	opts.ele = "video"
	return build(opts).outerHTML
}
exports.audio = (...op) => {
	let opts = seprate(op)
	opts.ele = "audio"
	return build(opts).outerHTML
}
exports.image = (...op) => {
	let opts = seprate(op)
	opts.ele = "img"
	return build(opts).outerHTML
}
exports.source = (...op) => {
	let opts = seprate(op)
	opts.ele = "source"
	return build(opts).outerHTML
}
exports.embed = (...op) => {
	let opts = seprate(op)
	opts.ele = "embed"
	return build(opts).outerHTML
}
exports.iframe = (...op) => {
	let opts = seprate(op)
	opts.ele = "iframe"
	return build(opts).outerHTML
}
exports.code = (...op) => {
	let opts = seprate(op)
	opts.ele = "code"
	return build(opts).outerHTML
}
exports.pre = (...op) => {
	let opts = seprate(op)
	opts.ele = "pre"
	return build(opts).outerHTML
}
exports.i = (...op) => {
	let opts = seprate(op)
	opts.ele = "i"
	return build(opts).outerHTML
}
exports.b = (...op) => {
	let opts = seprate(op)
	opts.ele = "b"
	return build(opts).outerHTML
}
exports.u = (...op) => {
	let opts = seprate(op)
	opts.ele = "u"
	return build(opts).outerHTML
}
exports.italic = (...op) => {
	let opts = seprate(op)
	opts.ele = "i"
	return build(opts).outerHTML
}
exports.bold = (...op) => {
	let opts = seprate(op)
	opts.ele = "b"
	return build(opts).outerHTML
}
exports.underscore = (...op) => {
	let opts = seprate(op)
	opts.ele = "u"
	return build(opts).outerHTML
}
