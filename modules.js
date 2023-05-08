const names = require('./4-names')
const  sayHi = require('./utils')
require('./mind-grenade')
const data  = require('./alternative-flavour')


console.log(data)
   // console.log(names)
   sayHi('fred')
   sayHi(names.john)



const os = require('os')

const user  = os.userInfo()

console.log(user)

console.log('The system update is', os.uptime(),'seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    total: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)


const path = require('path')
console.log(path.sep)

const filePath = path.join('/subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absoolute = path.resolve(__dirname,  'subfolder', 'texst.txt')
console.log(absoolute)
