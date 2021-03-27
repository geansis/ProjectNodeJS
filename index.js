const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
// const Sequelize = require("sequelize");
const Posts = require("./models/Post");

/* Config */
/* Template Engine */
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/* Connection with database MySQL */
// const sequelize = new Sequelize("test", "root", "root", {
//     host:"127.0.0.1",
//     dialect:"mysql",
// })

/* Rotas */
app.get("/", function(req, res){
    Posts.all().then(function(posts){
        res.render("home", {posts: posts})
    })    
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})    

app.post('/add', function (req, res) {
    Posts.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
    }).then(function (){
        res.redirect("/")
    }).catch(function (err) {
        res.send(err.message)
    })
    // res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo)
})

/*127.0.0.1:3333*/
app.listen(8081,function(){
    console.log("Servidor Rodando na url http://127.0.0.1:8081");
});

/*app.get("/",function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/about",function(req, res){
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/blog",function(req, res){
    res.send("Welcome to my blog!");
});

app.get("/hello/:name/:occupation/:color",function(req, res){
    var bobySend = "<h1>Hello "+req.params.name+"</h1><br>";
    bobySend += "<h2>What is your occupation: "+req.params.occupation+"</h2><br>";
    bobySend += "<h2>What is your occupation: "+req.params.occupation+"</h2><br>";
    bobySend += "<h3>What your favorite color: "+req.params.color+"</h3><br>";
    res.send(bobySend);
});
*/