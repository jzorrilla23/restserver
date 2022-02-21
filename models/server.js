const express = require('express')
const cors = require('cors')
const router = require('../routes/user');
const { json } = require('express/lib/response');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.usersPath = '/api/users'
        this.routes();
    }

    middlewares(){
        // to use cross-origin resource sharing
        this.app.use(cors())
        // to use the static content
        this.app.use(express.static('public'))
        // to work with json data
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usersPath, router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('server is runing at port ', this.port)
        })
    }
}

module.exports = Server;