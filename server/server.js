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


app.post("/",(req,res)=>{
    
    const body =req.body
    
    knex("item_list")
    .insert(body)
    .returning('id')
    .then((ids)=>
    res.status(201).json({
        message:"Posted succesfully",
        id:ids[0].id
    })
        
    )
})


app.patch("/",(req,res)=>{
    const id =req.body.id
    const {item_name,description,quantity} =req.body
    console.log(body)
    knex("item_list")
    .where('id',id)
    .update({
        item_name,
        description,
        quantity,
    })
})

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

app.listen(port, ()=> console.log(`Hello from ${port}`))