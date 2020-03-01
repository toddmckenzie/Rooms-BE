const db = require('../database/dbConfig.js');


module.exports = {
    getRooms,
    addRoom,
    remove
}


function getRooms(){
    return db('rooms')
}

function addRoom(room){
    return db('rooms').insert(room)
}

function remove(id){
    return db('rooms').del({ id })
}
