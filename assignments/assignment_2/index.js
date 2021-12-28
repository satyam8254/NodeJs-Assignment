const fs=require('fs')
fs.writeFile('index.html','<h1>Hello World</h1>',(err)=>{
    if (err) throw err;
    console.log(err);
})

const http=require('http');
http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if (err){
            res.end()
        } else{
            res.end(data)
        }
    })
})
.listen(3000,()=>{
    console.log("server started");
});