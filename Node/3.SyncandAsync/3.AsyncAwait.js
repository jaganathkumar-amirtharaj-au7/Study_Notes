
// Async and Await:-
    

console.log("before")
display()
console.log("after")
function getuser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:id,name:"jagan"})
        },2000)
    })
   
}
function users(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve([{id:1,name:"jagan"},{id:2,name:"arun"},{id:3,name:"gowri"}]),2000)
    })
   
}
function usr(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve((n)),2000)
    })
    
}
// Async function 
async function display(){
    try{
        const user=await getuser(1)
        const repos=await users(user.name)
        const n=await usr(repos[0])
        console.log(n)
    }
    catch(err){
        console.log(err)
    }
}