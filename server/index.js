const express=require('express')
const cors=require('cors');
const mongoose=require('mongoose');




const app=express();
require("dotenv").config();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{

})






// const server=app.listen(process.env.PORT,()=>{
//     console.log("Server started")
// })

const PORT=process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch {
    console.log("failed connect to db");
  }
  console.log("listening port ${PORT}");
});