const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/localDB')
.then(()=>console.log("DB connected"))
.catch(err=>console.error("Error",err))
const usersSchema=new mongoose.Schema({
    name:String,
    data:{type:Date,default:Date.now},
    Address:[String]
});
const Users=mongoose.model('users',usersSchema);


async function createCourse(){
    const users=new Users({
        name:"Arunraj",
        Address:["1/69,A.S.Kulam","Vaiyampalayam[via]","Coimbatore"]
    });
    
    const out=await users.save();
    console.log(out)
}
// createCourse()
async function getCourse(){
    const userdata=await Users
    .find()
    // .find({name:"Jaganathkumar"})
    .limit(5)
    .sort({name:1})
    // .select({name:-1,Address:-1})
    console.log(userdata)
}
getCourse()

