const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cookieparser=require("cookie-parser")
const app=express()

app.use(cookieparser())

app.get("/",(req,resp)=>{
    let token=jwt.sign({email:"usamaburki123@gmai.com"},"hidden")
    resp.cookie("token",token);
    resp.send("done")
})


app.get("/read",(req,resp)=>{
    let data=jwt.verify(req.cookies.token,"hidden")
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    resp.send("jwt read successfull")
})







app.listen(3000,()=>{
    console.log('====================================');
    console.log("Server is running on port : 3000");
    console.log('====================================');
})