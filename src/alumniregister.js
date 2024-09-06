// const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })

// const aluRegisterSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     username:{
//         type:String,
//         required:true
//     },
//     passOutYear:{
//         type:Number,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
//   });

//  const aluRegister = mongoose.model('aluRegister', aluRegisterSchema);
//  module.exports= aluRegister