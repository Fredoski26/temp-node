const numbers = [10,20,30,40]
const add  = (a, b) => a + b

Array.prototype.reduce2  = function(callback,  initialValue) {
    let accumulator = initialValue !== undefined ? initialValue  : 0
    let  index = initialValue !== undefined ? 0 :  1

    while(index <  this.length) {
        accumulator = callback(accumulator, this[index], index, this)
        index++

    }
    return accumulator
}

const  result = numbers.reduce2(add, 0)
setInterval(() => {console.log(result)},10000)