const fs = require('fs')

const elements = fs.readFileSync('./src/elements.js', 'utf8')

var bundled = fs.readFileSync('./src/skafold.js', 'utf8')

bundled = bundled
.replace('{{{elements}}}', elements)
let loc = './dist/skafold.js'
let minloc = './dist/skafold.min.js'
fs.writeFile(loc, bundled, (err)=>{if(err){console.log(`> ${err}`)}else{console.log(`> Bundled Skafold to a bundled File@ ${loc}`)}})

const esbuild = require('esbuild')
esbuild.build({
	entryPoints: [loc],
	minify: true,
	minifyIdentifiers: false,
	minifyWhitespace: false,
	platform: 'browser',
	target: ['es2020'],
	outfile: minloc
}).then(()=>console.log(`> Minify complete`))

const svg = fs.readFileSync('./src/svgPlugin.js', 'utf8')
let svgloc = './dist/skafold.svg.js'
let svgminloc = './dist/skafold.svg.min.js'
fs.writeFile(svgloc, svg, (err)=>{if(err){console.log(`> ${err}`)}else{console.log(`> Bundled Skafold to a bundled File@ ${loc}`)}})
esbuild.build({
	entryPoints: [svgloc],
	minify: true,
	minifyIdentifiers: false,
	minifyWhitespace: false,
	platform: 'browser',
	target: ['es2020'],
	outfile: svgminloc
}).then(()=>console.log(`> svg Minify complete`))