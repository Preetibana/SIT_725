//Task 1:Run node as a web server for hosting static files

var express= require('express');
var app = express();

let accounts=[
{a:1, name:'Peter', deposit:5},
{a:2, name:'George', deposit:15},
{a:3, name:'Steve', deposit:50}

]
 app.get(function(req,res)
 {

    res.send(accounts);
    
 }
 )
 app.listen(4000);

 

 //Port IP address
var http = require('http')
http.createServer(function(req,res)
{
res.write("Welcome Back Alien!!")
res.end()

}

).listen(8080);


node 
 

// Task 2:Sum Of Two Numbers
var a=7
var b=8
var c =a+b
console.log("Sum Of Two Numbers is=" +c)





