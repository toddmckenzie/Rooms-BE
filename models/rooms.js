const db = require('../database.dbConfig.js');


module.exports = {
    getRooms,
    addRoom
}


function getRooms(id){
    return db('rooms').where({ user_id: id })
}

function addRoom(room){
    return db('rooms').insert(room)
}
