// Sync 
// console.log("before")
// console.log(getuser(1)) //here we get result as undefined cause the setTimeout is executed after 2sec
// console.log("after")
// function getuser(id){
//     setTimeout(()=>{
//         return({id:id,name:"jagan"})
//     },2000)
   
// }
// result:-
// before
// undefined
// after


// There are three ways to solve this problem they are 
// 1.callbacks
// 2.Promises
// 3.Async/await


// Callbacks:-
        //      .takes 2 parameters 1 value and next is a function callback with 1 parameter which is the returned value
        //      .Inside the  referenced function we have 2 parameters first param for getting the value and next is callback function
        //      . inside the setTimeout() instead of return we are setting callback as return function


// Single callback function:-

        // console.log("before")
        // getuser(1,function(user){
        // console.log(user)
        // }) 
        // console.log("after")
        // function getuser(id,callback){
        //     setTimeout(()=>{
        //         callback({id:id,name:"jagan"})
        //     },2000)
        
        // }

// result:
// before
// after
// { id: 1, name: 'jagan' }

// Multiple Callback or Nested Callback:-

        // console.log("before")
        // getuser(1,(user)=>{
        // users(user.name,(repos)=>{
        //     usr(repos[0],(n)=>{
        //         console.log(n)
        //     })
        // })
        // }) 
        // console.log("after")

        // function getuser(id,callback){
        //     setTimeout(()=>{
        //         callback({id:id,name:"jagan"})
        //     },2000)
        // }

        // function users(name,callback){
        //     setTimeout(()=>callback([{id:1,name:"jagan"},{id:2,name:"arun"},{id:3,name:"gowri"}]),2000)
        // }

        // function usr(n,callback){
        //     setTimeout(()=>callback(n),2000)
        // }
// Result:-
// before
// after
// { id: 1, name: 'jagan' }


// Disadvantages of Callbacks:-
        // callbacks are called as Callback Hell when it comes to nested callback functions cause of multiple inner functions and sync function can be written much better 
        // to solve this error we have Named Functions

// Named Functions:-
// Better way to solve the problem using named functions
        console.log("before")
        getuser(1,newUser) //here we are creating reference to the function
        console.log("after")

        function getuser(id,callback){
            setTimeout(()=>{
                callback({id:id,name:"jagan"})
            },2000)
        }

        function users(name,callback){
            setTimeout(()=>callback([{id:1,name:"jagan"},{id:2,name:"arun"},{id:3,name:"gowri"}]),2000)
        }

        function usr(n,callback){
            setTimeout(()=>callback(n),2000)
        }


// Named Functions:-
// here we are creating new functions and calling those functions
        function displayusr(n){
                console.log(n)
        }
        function newusr(repos){
                usr(repos[0],displayusr)
        }
        function newUser(user){
                users(user.name,newusr)
        }

// Result:-
// before
// after
// { id: 1, name: 'jagan' }
