const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://practice:practice123@practiceapi.ylvahx8.mongodb.net/User?retryWrites=true&w=majority")
.then(() =>{
    console.log("Connection Successfully established");
}).catch((e)=>{
    console.log(e);
})