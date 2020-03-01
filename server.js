const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const rooms = require('./routes/rooms')



server.use('/rooms', rooms)


module.exports = server;