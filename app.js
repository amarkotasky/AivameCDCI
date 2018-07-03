const express = require("express");
var version='1.0.0'
const app =express();
console.log(version)
app.get('/',(req,res)=>res.send('<h1 align="center">Welcome To Zivame</h1> Version: '+version));
app.listen(3000, () => console.log('Example app listening on port 3000!'))