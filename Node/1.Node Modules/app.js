const http=require('http');
const server=http.createServer((req,res)=>{
        if(req.url==='/'){
            res.write('hello')
            res.end()
        }
        if(req.url==='/api'){
            res.write(JSON.stringify([1,2,3,4]))
            res.end()
        }
})
server.listen(4000)
console.log("server listing at port 4000")