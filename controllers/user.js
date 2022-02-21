const { response, request } = require('express');

const usersGet = (req, res = response)=>{
    // const {name, lastname, age} = req.query;
    const {name, lastname, age} = req.query;
    res.json({
        msg:'get - Controller',
        name,
        lastname,
        age
    })
}

const usersPost = (req = request, res = response)=>{
    
    const {name, age} = req.body;
    res.json({
        msg:'post - Controller',
        name,
        age
    })
}

const usersDelete = (req = request, res = response )=>{

    const id = req.params.id; 
    res.json({
        msg : 'delete - controller',
        id
    })
}

const usersPut = (req, res = response)=>{
    res.json({
        msg:'update - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}