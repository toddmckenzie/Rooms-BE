const router = require('express').Router();
const db = require('../models/rooms.js');



router.get('/', (req, res) => {

    db
    .getRooms()
    .then(result => {
        console.log(result);
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})


router.post('/', (req, res) => {
    const room = req.body;

    db
    .addRoom(room)
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db
    .remove(id)
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err  => {
        res.status(500).json({ message: "Internal Server Error"})
    })
})

module.exports = router;