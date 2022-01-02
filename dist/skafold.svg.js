(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global));
}(this, (function (exports) { 'use strict';
exports.svg = (...op) => {
	let opts = seprate(op)
	opts.ele = "svg"
	return build(opts).outerHTML
}
exports.svgDefs = (...op) => {
	let opts = seprate(op)
	opts.ele = "defs"
	return build(opts).outerHTML
}
exports.svgSymbol = (...op) => {
	let opts = seprate(op)
	opts.ele = "symbol"
	return build(opts).outerHTML
}
exports.svgUse = (...op) => {
	let opts = seprate(op)
	opts.ele = "use"
	return build(opts).outerHTML
}
exports.svgG = (...op) => {
	let opts = seprate(op)
	opts.ele = "g"
	return build(opts).outerHTML
}
exports.svgPath = (...op) => {
	let opts = seprate(op)
	opts.ele = "path"
	return build(opts).outerHTML
}
exports.svgCircle = (...op) => {
	let opts = seprate(op)
	opts.ele = "circle"
	return build(opts).outerHTML
}
exports.svgRect = (...op) => {
	let opts = seprate(op)
	opts.ele = "rect"
	return build(opts).outerHTML
}
exports.svgLine = (...op) => {
	let opts = seprate(op)
	opts.ele = "line"
	return build(opts).outerHTML
}
exports.svgPolyline = (...op) => {
	let opts = seprate(op)
	opts.ele = "polyline"
	return build(opts).outerHTML
}
exports.svgPolygon = (...op) => {
	let opts = seprate(op)
	opts.ele = "polygon"
	return build(opts).outerHTML
}
exports.svgText = (...op) => {
	let opts = seprate(op)
	opts.ele = "text"
	return build(opts).outerHTML
}
exports.svgTspan = (...op) => {
	let opts = seprate(op)
	opts.ele = "tspan"
	return build(opts).outerHTML
}
exports.svgTextPath = (...op) => {
	let opts = seprate(op)
	opts.ele = "textPath"
	return build(opts).outerHTML
}
exports.svgImage = (...op) => {
	let opts = seprate(op)
	opts.ele = "image"
	return build(opts).outerHTML
}
exports.svgMarker = (...op) => {
	let opts = seprate(op)
	opts.ele = "marker"
	return build(opts).outerHTML
}
exports.svgMask = (...op) => {
	let opts = seprate(op)
	opts.ele = "mask"
	return build(opts).outerHTML
}
exports.svgPattern = (...op) => {
	let opts = seprate(op)
	opts.ele = "pattern"
	return build(opts).outerHTML
}
exports.svgClipPath = (...op) => {
	let opts = seprate(op)
	opts.ele = "clipPath"
	return build(opts).outerHTML
}
exports.svgFilter = (...op) => {
	let opts = seprate(op)
	opts.ele = "filter"
	return build(opts).outerHTML
}
exports.svgFeBlend = (...op) => {
	let opts = seprate(op)
	opts.ele = "feBlend"
	return build(opts).outerHTML
}
exports.svgFeColorMatrix = (...op) => {
	let opts = seprate(op)
	opts.ele = "feColorMatrix"
	return build(opts).outerHTML
}
exports.svgFeComponentTransfer = (...op) => {
	let opts = seprate(op)
	opts.ele = "feComponentTransfer"
	return build(opts).outerHTML
}
exports.svgFeComposite = (...op) => {
	let opts = seprate(op)
	opts.ele = "feComposite"
	return build(opts).outerHTML
}
exports.svgFeConvolveMatrix = (...op) => {
	let opts = seprate(op)
	opts.ele = "feConvolveMatrix"
	return build(opts).outerHTML
}
exports.svgFeDiffuseLighting = (...op) => {
	let opts = seprate(op)
	opts.ele = "feDiffuseLighting"
	return build(opts).outerHTML
}
exports.svgFeDisplacementMap = (...op) => {
	let opts = seprate(op)
	opts.ele = "feDisplacementMap"
	return build(opts).outerHTML
}
exports.svgFeDistantLight = (...op) => {
	let opts = seprate(op)
	opts.ele = "feDistantLight"
	return build(opts).outerHTML
}
exports.svgFeFlood = (...op) => {
	let opts = seprate(op)
	opts.ele = "feFlood"
	return build(opts).outerHTML
}
exports.svgFeFuncA = (...op) => {
	let opts = seprate(op)
	opts.ele = "feFuncA"
	return build(opts).outerHTML
}
exports.svgFeFuncB = (...op) => {
	let opts = seprate(op)
	opts.ele = "feFuncB"
	return build(opts).outerHTML
}
exports.svgFeFuncG = (...op) => {
	let opts = seprate(op)
	opts.ele = "feFuncG"
	return build(opts).outerHTML
}
exports.svgFeFuncR = (...op) => {
	let opts = seprate(op)
	opts.ele = "feFuncR"
	return build(opts).outerHTML
}
exports.svgFeGaussianBlur = (...op) => {
	let opts = seprate(op)
	opts.ele = "feGaussianBlur"
	return build(opts).outerHTML
}
exports.svgFeImage = (...op) => {
	let opts = seprate(op)
	opts.ele = "feImage"
	return build(opts).outerHTML
}
exports.svgFeMerge = (...op) => {
	let opts = seprate(op)
	opts.ele = "feMerge"
	return build(opts).outerHTML
}
exports.svgFeMergeNode = (...op) => {
	let opts = seprate(op)
	opts.ele = "feMergeNode"
	return build(opts).outerHTML
}
exports.svgFeMorphology = (...op) => {
	let opts = seprate(op)
	opts.ele = "feMorphology"
	return build(opts).outerHTML
}
exports.svgFeOffset = (...op) => {
	let opts = seprate(op)
	opts.ele = "feOffset"
	return build(opts).outerHTML
}
exports.svgFeSpecularLighting = (...op) => {
	let opts = seprate(op)
	opts.ele = "feSpecularLighting"
	return build(opts).outerHTML
}
exports.svgFeSpotLight = (...op) => {
	let opts = seprate(op)
	opts.ele = "feSpotLight"
	return build(opts).outerHTML
}
exports.svgFeTile = (...op) => {
	let opts = seprate(op)
	opts.ele = "feTile"
	return build(opts).outerHTML
}
exports.svgFeTurbulence = (...op) => {
	let opts = seprate(op)
	opts.ele = "feTurbulence"
	return build(opts).outerHTML
}
exports.svgAnimate = (...op) => {
	let opts = seprate(op)
	opts.ele = "animate"
	return build(opts).outerHTML
}
exports.svgAnimateColor = (...op) => {
	let opts = seprate(op)
	opts.ele = "animateColor"
	return build(opts).outerHTML
}
exports.svgAnimateMotion = (...op) => {
	let opts = seprate(op)
	opts.ele = "animateMotion"
	return build(opts).outerHTML
}
exports.svgAnimateTransform = (...op) => {
	let opts = seprate(op)
	opts.ele = "animateTransform"
	return build(opts).outerHTML
}
})))