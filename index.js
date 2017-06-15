var fs = require('fs')
var fakeStats = fs.lstatSync('./fakeDirectory')
var realStats = fs.lstatSync('./realDirectory')
console.log('fakeDirectory isDirectory?', fakeStats.isDirectory())
console.log('realDirectory isDirectory?', realStats.isDirectory())

