const express=require('express')
const app=express()
app.use(express.json())
const users=[{id:1,name:"jagan"},{id:2,name:"arun"}]
app.get('/',(req,res)=>{
res.send(users)
})
app.post('/api/users',(req,res)=>{
    const result={id:users.length+1,name:req.body.name}
    users.push(result)
    res.send(result)
})
app.put('/api/users',(req,res)=>{
    const modified={id:req.body.id,name:req.body.name}
    const usr=users.find(d=>d.id===parseInt(req.body.id))
    usr.name=req.body.name
    res.send(usr)
})
app.delete('/api/users',(req,res)=>{
    const id=users.find(d=>d.id===req.body.id)
    const index=users.indexOf(id)
    users.splice(index,1)
    res.send(users)
})


const port =process.env.PORT ||3001
app.listen(port,() =>console.log(`listining at port${port}`))