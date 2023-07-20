const express= require('express')

const app =express()

const cors= require('cors')

const port=3001;

app.use(express.json())
app.use(cors())

const knex = require('knex')(require('./knexfile.js')['development']);

app.get("/",(req,res)=>{
    knex("item_list")
    .select("*")
    .then(data=>res.status(200).send(data))
    
})

app.get("/user",(req,res)=>{
    knex("user_profile")
    .select("*")
    .then(data=>res.status(200).send(data))
    
})

app.get("/item/:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    knex("item_list")
    
    .where("user_account_id",id)
    .then(data => {
        res.status(200).json(data);
    })

})


app.post("/item/:id",(req,res)=>{
    console.log("i'm in the colon")
    
    const {user_account_id,item_name,description,quantity} =req.body
    
    knex("item_list")
    .insert({user_account_id,item_name,description,quantity})
    .returning('id')
    .then((ids)=>
    res.status(201).json({
        message:"Posted succesfully",
        id:ids[0].id,
        
    })
        
    )
})


app.put('/item/:id', (req, res) => {
    console.log("made it")
    const {id, item_name, description, quantity } = req.body;
    console.log(id, item_name, description, quantity)
    knex('item_list')
    .where("user_account_id",req.params.id)
        .where('id', id)
        .update({ item_name, description, quantity })
        .then((rowCount) => {
            if (rowCount === 0) {
            return res.status(404).json({
                message: 'Item not found',
            });
            }
            res.status(200).json({
            message: 'Item updated successfully',
            });
        })
        .catch((err) =>
            res.status(500).json({
            message: 'An error occurred while updating the item',
            error: err,
            })
        );
    });

app.delete("/",(req,res)=>{
    const body =req.body
    console.log(body)
    knex("item_list")
    .where('id',body.id)
    .del()
    .then((rowCount) => {
        if (rowCount === 0) {
        return res.status(404).json({
            message: 'item not found',
        });
        }
        res.status(200).json({
        message: 'Item deleted successfully',
        });
    })
    .catch((err) =>
        res.status(500).json({
        message: 'An error occurred while deleting the item',
        error: err,
        })
    );

})


app.post("/user",(req,res)=>{
    console.log("i'm in the user")
    const body =req.body
    console.log("body",body)
    knex("user_profile")
    .insert(body)
    .returning('id')
    .then((ids)=>
    res.status(201).json({
        message:"Posted succesfully",
        id:ids[0].id}))
    
        
})




app.listen(port, ()=> console.log(`Hello from ${port}`))