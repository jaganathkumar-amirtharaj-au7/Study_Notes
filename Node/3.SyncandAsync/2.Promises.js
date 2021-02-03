// Promise :-
// holds the eventual result of an asynchronous operation 
// when promise is created it is in pending state
// when async operation is completed it will be fullfilled or rejected

// const p=new Promise((resolve,reject)=>{
//     resolve("success")
//     reject(new Error("Failed"))
// })
// p
// .then(out=>console.log(out))
// .catch(err=>console.log(err.message))

// Replacing callback with Promises:-
        console.log("before")
        getuser(1)
            .then(user=>users(user.name))
            .then(repos=>usr(repos[0]))
            .then(n=>console.log(n))
            .catch(err=>console.log(err.message))
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
// Result:-
// before
// after
// { id: 1, name: 'jagan' }


// Settled Promise:-
// const p=Promise.resolve(1)
// p.then(d=>console.log(d))   //1
// const err=Promise.reject("Error")
// err.catch(err=>console.log(err))    //Error

// Running Parallel Promise:-
    // 1.Promise.all()
         // .In this Promise.all all the promise should return fullfilled state if any one is in error the output will be in error
            // const p1=new Promise((resolve,reject)=>{
            //     console.log("p1")
            //     resolve(1)
            //     // reject("error")
            // })
            // const p2=new Promise((resolve,reject)=>{
            //     console.log("p2")
            //     resolve(2)
            // })
            // Promise.all([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err))

        // Result:-
        // p1
        // p2
        // [ 1, 2 ]

        // Result:- when there is an error
        // p1
        // p2
        // error
    // 2.Promise.race():-
            // .both the promise will be executed and returns only the first promise which is executed fast
                // const p1=new Promise((resolve,reject)=>{
                //     console.log("p1")
                //     resolve(1)
                //     // reject("error")
                // })
                // const p2=new Promise((resolve,reject)=>{
                //     console.log("p2")
                //     resolve(2)
                // })
                // Promise.race([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err))