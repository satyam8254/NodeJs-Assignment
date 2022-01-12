const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const candidate = require("./model/user");
mongoose.connect("mongodb://localhost:27017/candidate");
const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}))

var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.set('views','./views');
app.set('view engine','ejs');


app.get('/',async (req,res)=>{
    const Candidate = await candidate.find();
    res.render('index',{Candidate});
});

app.get('/form',(req,res)=>{
    res.render('form')
});

app.post("/user/add",async (req,res)=>{
    console.log(req.body);
    //create record in database
    await candidate.create(req.body);
    res.redirect('/')
})

// app.get("/user/clear",(req,res)=>{
//     res.redirect('/')
// })

app.put("/select/:id/data", async (req,res) => {
    console.log("I'm Selected");
    await candidate.updateOne({_id: req.params.id},{selected: true});
    res.redirect("/");
})


app.delete("/delete/:id/data", async (req,res) => {
    console.log("I'm deleted");
    await candidate.deleteOne({_id: req.params.id});
    res.redirect("/");
})

app.listen(3000,()=> console.log("server is listening at port 3000"));


