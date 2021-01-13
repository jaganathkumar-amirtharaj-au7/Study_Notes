
const EventEmitter=require('events');
class Listner extends EventEmitter{    //class name first letter should be caps
    //Raising an event
    log(mess){
        console.log(mess)
        this.emit("event raised",{id:1,"name":"jagan"})
    }
    
    
     }
     module.exports=Listner;