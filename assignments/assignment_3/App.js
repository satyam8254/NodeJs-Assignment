const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}))

var users=[];

app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{users})
});

app.get('/Home',(req,res)=>{
    res.render('form')
});

app.post("/user/add",(req,res)=>{
    console.log(req.body);
    users.push({
        name:req.body.name,
        email:req.body.email
    })
    res.redirect('/')
})

// app.get("/user/clear",(req,res)=>{
//     users.splice(0,users.length)
//     res.redirect('/')
// })

app.listen(3000,()=> console.log("server is listening at port 3000"));

