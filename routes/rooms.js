const router = require('express').Router();
const db = require('../models/rooms.js');



router.get('/:id', (req, res) => {
    const userId = req.params.id;


    db
    .getRooms(userId)
    .then(result => {
        console.log(result);
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})


router.post('/:id', (req, res) => {
    const userId = req.params.id;
    let room = req.body;
    room.user_id = userId
    db
    .addRoom(room)
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;