const db = require('../database/dbConfig.js');


module.exports = {
    getRooms,
    addRoom,
    remove
}


function getRooms(){
    return db('rooms')
}

async function addRoom(room){
    await db('rooms').insert(room)
    return db('rooms')
}

function remove(id){
    return db('rooms').del({ id })
}
