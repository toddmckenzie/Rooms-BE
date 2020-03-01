const server = require('./server.js');
const port = process.env.PORT || 4000

server.listening(port, () => {
    console.log(`SERVER is listening on port ${port}`)
})