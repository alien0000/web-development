const express=require("express");
const path=require("path");
const app=express();
// var staticPath=path.join(__dirname,"/index.html");
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(3000,function(){
    console.log("port lising on port 3000...");
});

// 
// const express = require('express')
// const app = express()
// const port = 3000
// 
// // console.log(staticPath);
// app.use(express.static(staticPath));
// app.get('/', (req, res) => {
// //   res.sendFile(" E:\AngelaYuWebDevoloap\Calculator\index.html");
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })