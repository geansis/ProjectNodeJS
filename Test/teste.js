// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("test", "root", "root", {
//     host:"127.0.0.1",
//     dialect:"mysql",
// })

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso...");
// }).catch(function(erro){
//     console.log("***Falha na conexão: "+erro);
// })

// const Postagem = sequelize.define('postagens', {
//     titulo:{
//         type:Sequelize.STRING
//     },
//     conteudo:{
//         type:Sequelize.TEXT
//     }
// })

// Postagem.create({
//     titulo: "UM TITULO QUALQUER",
//     conteudo: "sajdflasdjflasjdklfjasldjflkajsdlkfjalksjdklfjaslkdjfkl"
// })

// const Usuario = sequelize.define('usuarios', {
//     nome:{
//         type:Sequelize.STRING
//     },
//     sobrenome:{
//         type:Sequelize.STRING
//     },
//     idade:{
//         type:Sequelize.INTEGER
//     },
//     email:{
//         type:Sequelize.TEXT
//     }
// })

// // Usuario.sync({force:true});

// // Usuario.create({
// //     nome:"Geanderson",
// //     sobrenome:"Santos SIlva",
// //     idade:35,
// //     email:"gean@gmail.com"
// // })