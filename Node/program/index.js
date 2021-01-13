const express=require('express');
const app=express();
const courses=[{"id":1,"name":'jagan'},{"id":2,"name":'dina'},{"id":3,"name":'arun'}]
// describing routes
app.get('/',(req,res)=>{
    res.send('helloWorld');
});
app.get('/cources/:id',(req,res)=>{
        const found=courses.find(d=>d.id===parseInt(req.params.id))
        if(!found)res.status(404).send(console.log("course not found"))
        console.log(found)
})

const port =process.env.PORT || 3001
app.listen(port,()=>console.log(`listining at port ${port }`))
