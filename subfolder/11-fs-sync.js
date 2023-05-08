const {readFile, writeFile} = require('fs')
 console.log('Start')
readFile('./subfolder/first-txt.txt', 'utf8', (err, result) =>{
if(err) {
    console.log(err)
    return
}
   // console.log(result)
   const first = result;
   readFile('./subfolder/second.txt', 'utf8', (err, result) =>{
    if(err) {
        console.log(err)
        return;
    }
    const second = result;
     writeFile('./subfolder/text.txt', `Here is the result : ${first}, ${second}`, (err, result) =>{
        if(err) {
            console.log(err)
            return;
        }
        console.log(result)
    })
   })

})
console.log('done')



console.log('Starting new tasks...')