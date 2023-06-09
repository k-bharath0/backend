const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const { default: mongoose } = require("mongoose")
const app=express()
const Content= require('./schema')
const port= process.env.PORT|| 4000;

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://BharathK:BharathK@cluster0.cjyjzid.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Mongodb connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
app.get("/",(req,res)=>{
    res.send("API IS WORKING")
})

app.get("/users",async(req,res)=>{
    await Content.find()
        .then(found=>res.json(found))
})

app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
     newData.save()
})
app.listen(port,()=>console.log("server started successfully"))

