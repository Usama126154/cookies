const express=require("express")
const bcrypt=require("bcrypt")
// const cookieparser=require("cookie-parser")
const app=express()

// app.use(cookieparser())

// app.get("/",(req,resp)=>{
//     resp.cookie("name","usama")
//     resp.send("done")
   
// })


// app.get("/", (req, resp) => {

//     bcrypt.genSalt(10, function(err, salt) {

//         bcrypt.hash("usama", salt, function(err, hash) {

//             console.log("====================================");
//             console.log(hash);
//             console.log("====================================");

//             resp.send("Password hashed successfully");
//         });

//     });

// });

   app.get("/",(req,resp)=>{
    bcrypt.compare("usama", "$2b$10$za877hHn5qGbzfC/Fym0/uAbAI.J.a2.ifGELx1AnPNRHcUqwxc0e", function(err, result) {
    console.log('====================================');
    console.log(result);
    console.log('====================================');
    resp.send("workig")
});
   
 })

// app.get("/read",(req,resp)=>{
//      console.log('====================================');
//     console.log(req.cookies);
//     console.log('====================================');
//     resp.send("page read")
   
// })

app.listen(3000)