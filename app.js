const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());
// Start the server
app.listen(3030).on('listening',() =>
    console.log('Feathers server listening on localhost:3030')
);