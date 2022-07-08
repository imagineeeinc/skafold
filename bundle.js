const fs = require('fs')

let loc = './dist/skafold.js'
let minloc = './dist/skafold.min.js'
let nodeloc = './dist/skafold.cjs'
let minNodeloc = './dist/skafold.min.cjs'

fs.copyFileSync('./src/skafold.js', loc)

const esbuild = require('esbuild')
esbuild.build({
	entryPoints: [loc],
	format: 'esm',
	platform: 'browser',
	target: ['es2020'],
	outfile: minloc
}).then(()=>console.log(`> Base Build complete [Browser]`))
esbuild.build({
	entryPoints: [loc],
	format: 'esm',
	minify: true,
	minifyIdentifiers: false,
	minifyWhitespace: false,
	platform: 'browser',
	target: ['es2020'],
	outfile: minloc
}).then(()=>console.log(`> Minify complete [Browser]`))

esbuild.build({
	entryPoints: [loc],
	format: 'cjs',
	platform: 'node',
	outfile: nodeloc
}).then(()=>console.log(`> Base Build complete [Node]`))
esbuild.build({
	entryPoints: [nodeloc],
	format: 'cjs',
	minify: true,
	minifyIdentifiers: false,
	minifyWhitespace: false,
	platform: 'node',
	outfile: minNodeloc
}).then(()=>console.log(`> Minify complete [Node]`))