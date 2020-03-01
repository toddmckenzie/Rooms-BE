const db = require('../database/dbConfig.js');


module.exports = {
    getRooms,
    addRoom
}


function getRooms(){
    return db('rooms')
}

function addRoom(room){
    return db('rooms').insert(room)
}
