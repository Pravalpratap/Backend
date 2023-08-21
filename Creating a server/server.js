const express=require('express')
const app = express();


// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());



app.listen(3000 ,()=>{
    console.log("server created")
})

// Route

app.get("/", (req, res) => {
    res.send("Sender");
  });

app.post('/api/cars' ,(req,res)=>{
    const{name,brand}=req.body
    console.log(name);
    console.log(brand);
    res.send("Car Submitted")
})

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connection established ")
})
.catch((err)=>{
    console.log(err)
})
