const {readFile, writeFile,} = require('fs').promises

  const start  = async() =>{
    try {
      const  first = await readFile('./subfolder/first-txt.txt', 'utf8')
      const  second = await readFile('./subfolder/second.txt', 'utf8')
      await writeFile('./subfolder/text.txt',  `Fred this your words: ${first} and ${second}`,{flag: 'a'} )

      console.log(first, second)
    }catch(error){
     console.log(error)
    }
  }

  start()




//const  _ = require('lodash');
/* 
const items = [1, [2, [3, [4, [5, [6, [7]]]]]]] 

const newItems = _.flattenDeep(items)

console.log(newItems)
console.log('hello messages') */

