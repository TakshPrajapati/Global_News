const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../users')

router.get('/', (req,res)=>{
    res.json(users)
})

router.get('/:id', (req,res)=>{
    const get = users.some(users => users.id === parseInt(req.params.id))

    if(get) {
        res.json(users.filter(users => users.id === parseInt(req.params.id)))
    } else {
        res.sendStatus(400)
    }
})

router.post('/', (req,res) =>{
    const newUser = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email
    }

    if(!newUser.name || !newUser.email){
        return res.sendStatus(400)
    }

    users.push(newUser)
    res.json(users)
})

router.put('/:id',(req,res)=>{
    const put = users.some(users => users.id === parseInt(req.params.id))

    if(put){
        const updateUser = req.body
        users.forEach(users =>{
            if(users.id === parseInt(req.params.id)) {
                users.name = updateUser.name ? updateUser.name : users.name
                users.email = updateUser.email ? updateUser.email : users.email
                res.json({msg:'User Updated', users})
            }
        })
    }
})

router.delete('/:id',(req,res)=>{
    const del = users.some(users => users.id === parseInt(req.params.id))

    if(del){
        users = users.filter((users)=> users.id !==parseInt(req.params.id))
        res.json({msg:'User deleted', users})
    } else{
        res.sendStatus(400)
    }
})

module.exports = router