const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ( names, id) => {
    console.log(`data received ${names} = ${id}` )
})

customEmitter.emit('response', 'fred', 1000)