const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.get("/getEmployees",async(req,res)=>{
    let employeeData = await Employee.find().skip(150);
    console.log(employeeData)
    res.json(employeeData);

})

app.listen(3214,()=>{
    console.log("Listening to port 3214")
})

let employeeSchema =mongoose.Schema({
    
id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
country:String,
department:String,

profilePic:String,

})

let Employee = new mongoose.model(
    "Employee",employeeSchema);

// let getEmployeeFromDB =async()=>{
//    let getEmplyeeData = await  Employee.find();
//    console.log(getEmplyeeData);
// }

let connectToMDB = ()=>{
    try{
        mongoose.connect("mongodb+srv://veeresh28:veeresh28@batch2406cluster.xgvnc.mongodb.net/Tata?retryWrites=true&w=majority&appName=Batch2406cluster");
        console.log("Successfully connected to MDB");
        // getEmployeeFromDB();

    }catch(err){
        console.log(err);
        console.log("Unable to connect MDB");

    }

}
connectToMDB();

