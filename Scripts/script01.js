//sql
// create database nome do banco

// no nao relacional(mongoDB) você faz assim: ele cria e automaticamente usa
use("DB_MONGO");

// show databases para mostrar todas as coleções da dataBase

// criar uma coleção:   db.createCollection("alunos");

// show collections serve para acessar quantas coleções tem dentro de cada coleção;

// db.alunos.insertOne()
// criar uma coleção
   console.log (
      //este é comando mongosh
     db.createCollection('aluno')
 );
//     // inserir dados
/* console.log(
    db.aluno.insertOne({
        nome: "jorge",
        idade: 30,
        email: "j@email.com",
        ativo: true
    })
); */

// console.log(
//     db.alunos.find()
// );

/* db.Disciplina.insertOne({
     disc:"LÓGICA DE PROGRAMAÇÃO"
}) */

/* db.Disciplina.insertMany([
    { disc: "Banco de Dados NoSQL" },
    { disc: "Banco de dados Relacional" },
    { disc: "Programação web II" },
    { disc: "Programação web III" },
    { disc: "Qualidade de Teste Software" }
]) */


// exibir 
/* console.log(
     db.Disciplina.find(
        {disc: "Banco de dados Relacional"},
        {disc:1, _id:0}
    )
) */

// delete
console.log(
    db.aluno.deleteOne({ nome: "Rick Grimes" })
)

/* console.log(
    db.aluno.insertOne({
        nome: "Rick Grimes",
        idade: 43,
        email: "RG@email.com",
        ativo: true
    })
); */
//db.alunos.count()
//db.alunos.find()