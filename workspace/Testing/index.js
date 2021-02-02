const { json } = require('express');
const express=require('express')
const app=express();
app.use(express.json())

const users=[{id:1,name:"jagan"},{id:2,name:"arun"},{id:3,name:"gowri"}]
app.get('/api/user',(req,res)=>{
   res.send("hello world")
})
app.get('/api/user/:id',(req,res)=>{
    const found=users.find(d=>d.id===parseInt(req.params.id))
    if(!found) res.status(404).send("User not found")
    res.send(found)
})
app.post('/api/user',(req,res)=>{
    const response={
        id:users.length+1,
        name:req.body.name
    };
    users.push(response)
    res.send(response)

})

app.get('/',(req,res)=>{
    res.send(users)
})
const port=process.env.port || 3005
app.listen(port,()=>console.log(`listining at port ${port}`))