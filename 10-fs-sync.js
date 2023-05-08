const {readFileSync, writeFileSync,} = require('fs')
const { text } = require('stream/consumers')
const  first = readFileSync('subfolder/first-txt.txt','utf8')
const  second = readFileSync('subfolder/second.txt','utf8')

//console.log(first)
//console.log(second)
writeFileSync('./subfolder/second.txt',`Here is the second : ${first}, ${second}`)