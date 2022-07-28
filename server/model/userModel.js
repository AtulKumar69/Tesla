const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({

username:{
    type:String,
    min:3,
    max:20,
    unique:true,
},
email:{
    type:String,
    required:true, 
    max:30,
},
password:{
    type:String,
    required:true, 
    min:8,
},
isAvatarImageSet:{
    trpe:Boolean,
    default:false,
},
avatarImage:{
    type:String,
    default:"",
}

})


module.exports=mongoose.model("Users",userSchema)