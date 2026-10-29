use('schema2')


console.log(
    /* db.createCollection("compras", {
   validator: {
      $jsonSchema: {
         bsonType: "object",

         required: [
            "aluno",
            "curso",
            "livro",
            "categoria",
            "preco",
            "quantidade",
            "formaPagamento",
            "status"
         ],

         properties: {

            aluno: {
               bsonType: "object",
               required: [
                  "nome",
                  "matricula"
               ],
               properties: {
                  nome: {
                     bsonType: "string"
                  },

                  matricula: {
                     bsonType: "string"
                  }
               }
            },

            curso: {
               bsonType: "string",
               description: "Curso do aluno"
            },

            livro: {
               bsonType: "object",
               required: [
                  "titulo",
                  "autor",
                  "editora",
                  "ano"
               ],

               properties: {

                  titulo: {
                     bsonType: "string"
                  },

                  autor: {
                     bsonType: "string"
                  },

                  editora: {
                     bsonType: "string"
                  },

                  ano: {
                     bsonType: "int",
                     minimum: 1900
                  }
               }
            },

            categoria: {
               bsonType: "string",

               enum: [
                  "Programacao",
                  "Banco de Dados",
                  "Redes",
                  "Engenharia de Software",
                  "Inteligencia Artificial",
                  "Matematica",
                  "Administracao"
               ]
            },

            preco: {
               bsonType: "double",
               minimum: 0
            },

            quantidade: {
               bsonType: "int",
               minimum: 1
            },

            formaPagamento: {
               bsonType: "string",

               enum: [
                  "PIX",
                  "Cartao",
                  "Boleto"
               ]
            },

            status: {
               bsonType: "string",

               enum: [
                  "Pendente",
                  "Pago",
                  "Enviado",
                  "Entregue",
                  "Cancelado"
               ]
            }
         }
      }
   },

   validationLevel: "strict",
   validationAction: "error"
}) */


    /* db.compras.insertMany([

        {
            aluno: {
                nome: "Ana Paula Silva",
                matricula: "2026001"
            },
            curso: "Desenvolvimento de Software Multiplataforma",
            livro: {
                titulo: "JavaScript: O Guia Definitivo",
                autor: "David Flanagan",
                editora: "Bookman",
                ano: 2022
            },
            categoria: "Programacao",
            preco: 189.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Bruno Oliveira",
                matricula: "2026002"
            },
            curso: "Sistemas para Internet",
            livro: {
                titulo: "Aprendendo JavaScript",
                autor: "Ethan Brown",
                editora: "Novatec",
                ano: 2021
            },
            categoria: "Programacao",
            preco: 149.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Carlos Santos",
                matricula: "2026003"
            },
            curso: "Ciencia da Computacao",
            livro: {
                titulo: "MongoDB Definitivo",
                autor: "Kristina Chodorow",
                editora: "O'Reilly",
                ano: 2023
            },
            categoria: "Banco de Dados",
            preco: 220.50,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Enviado"
        },

        {
            aluno: {
                nome: "Daniel Souza",
                matricula: "2026004"
            },
            curso: "Analise e Desenvolvimento de Sistemas",
            livro: {
                titulo: "Banco de Dados",
                autor: "Abraham Silberschatz",
                editora: "Pearson",
                ano: 2020
            },
            categoria: "Banco de Dados",
            preco: 199.90,
            quantidade: 2,
            formaPagamento: "Boleto",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Eduardo Costa",
                matricula: "2026005"
            },
            curso: "Engenharia de Software",
            livro: {
                titulo: "Engenharia de Software",
                autor: "Ian Sommerville",
                editora: "Pearson",
                ano: 2021
            },
            categoria: "Engenharia de Software",
            preco: 249.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Fernanda Lima",
                matricula: "2026006"
            },
            curso: "Sistemas de Informacao",
            livro: {
                titulo: "Redes de Computadores",
                autor: "Andrew Tanenbaum",
                editora: "Pearson",
                ano: 2022
            },
            categoria: "Redes",
            preco: 279.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Gabriel Martins",
                matricula: "2026007"
            },
            curso: "Ciencia da Computacao",
            livro: {
                titulo: "Python para Analise de Dados",
                autor: "Wes McKinney",
                editora: "Novatec",
                ano: 2022
            },
            categoria: "Programacao",
            preco: 169.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Helena Rodrigues",
                matricula: "2026008"
            },
            curso: "Ciencia de Dados",
            livro: {
                titulo: "Hands-On Machine Learning",
                autor: "Aurélien Géron",
                editora: "O'Reilly",
                ano: 2023
            },
            categoria: "Inteligencia Artificial",
            preco: 299.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Enviado"
        },

        {
            aluno: {
                nome: "Igor Ferreira",
                matricula: "2026009"
            },
            curso: "Ciencia da Computacao",
            livro: {
                titulo: "Deep Learning",
                autor: "Ian Goodfellow",
                editora: "MIT Press",
                ano: 2021
            },
            categoria: "Inteligencia Artificial",
            preco: 329.90,
            quantidade: 1,
            formaPagamento: "Boleto",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Juliana Alves",
                matricula: "2026010"
            },
            curso: "Administracao",
            livro: {
                titulo: "Administracao: Teoria e Pratica",
                autor: "Idalberto Chiavenato",
                editora: "Atlas",
                ano: 2020
            },
            categoria: "Administracao",
            preco: 159.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Lucas Almeida",
                matricula: "2026011"
            },
            curso: "Matematica",
            livro: {
                titulo: "Calculo",
                autor: "James Stewart",
                editora: "Cengage",
                ano: 2021
            },
            categoria: "Matematica",
            preco: 219.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Mariana Gomes",
                matricula: "2026012"
            },
            curso: "Engenharia",
            livro: {
                titulo: "Calculo Diferencial",
                autor: "George Thomas",
                editora: "Pearson",
                ano: 2020
            },
            categoria: "Matematica",
            preco: 189.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Enviado"
        },

        {
            aluno: {
                nome: "Nicolas Ribeiro",
                matricula: "2026013"
            },
            curso: "Sistemas para Internet",
            livro: {
                titulo: "React: Aprendendo React",
                autor: "Kirupa Chinnathambi",
                editora: "Novatec",
                ano: 2023
            },
            categoria: "Programacao",
            preco: 179.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Olivia Martins",
                matricula: "2026014"
            },
            curso: "Desenvolvimento de Software Multiplataforma",
            livro: {
                titulo: "Node.js",
                autor: "Pedro Teixeira",
                editora: "Novatec",
                ano: 2022
            },
            categoria: "Programacao",
            preco: 159.90,
            quantidade: 2,
            formaPagamento: "PIX",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Paulo Henrique",
                matricula: "2026015"
            },
            curso: "Sistemas de Informacao",
            livro: {
                titulo: "Redes TCP/IP",
                autor: "Douglas Comer",
                editora: "Pearson",
                ano: 2021
            },
            categoria: "Redes",
            preco: 199.90,
            quantidade: 1,
            formaPagamento: "Boleto",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Rafael Souza",
                matricula: "2026016"
            },
            curso: "Ciencia da Computacao",
            livro: {
                titulo: "SQL para Desenvolvedores",
                autor: "Joe Celko",
                editora: "Elsevier",
                ano: 2020
            },
            categoria: "Banco de Dados",
            preco: 189.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Entregue"
        },

        {
            aluno: {
                nome: "Renata Oliveira",
                matricula: "2026017"
            },
            curso: "Ciencia de Dados",
            livro: {
                titulo: "Data Science do Zero",
                autor: "Joel Grus",
                editora: "Alta Books",
                ano: 2022
            },
            categoria: "Inteligencia Artificial",
            preco: 179.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Rodrigo Silva",
                matricula: "2026018"
            },
            curso: "Engenharia de Software",
            livro: {
                titulo: "Clean Code",
                autor: "Robert Martin",
                editora: "Alta Books",
                ano: 2020
            },
            categoria: "Engenharia de Software",
            preco: 149.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Enviado"
        },

        {
            aluno: {
                nome: "Sabrina Costa",
                matricula: "2026019"
            },
            curso: "Administracao",
            livro: {
                titulo: "Gestao de Pessoas",
                autor: "Idalberto Chiavenato",
                editora: "Atlas",
                ano: 2021
            },
            categoria: "Administracao",
            preco: 129.90,
            quantidade: 1,
            formaPagamento: "Boleto",
            status: "Pago"
        },

        {
            aluno: {
                nome: "Thiago Santos",
                matricula: "2026020"
            },
            curso: "Matematica",
            livro: {
                titulo: "Algebra Linear",
                autor: "Gilbert Strang",
                editora: "Bookman",
                ano: 2020
            },
            categoria: "Matematica",
            preco: 199.90,
            quantidade: 1,
            formaPagamento: "Cartao",
            status: "Entregue"
        }
    ]) */

    //1.
    /*   db.compras.find({}) */
    //2.
    /* db.compras.aggregate([
     {$project:{
         
        "aluno.nome": 1,
         curso:1,
         "livro.titulo": 1,
         preco:1,
         _id:0
      }
 
    }]) */

    /* db.compras.aggregate([
        {$match:{
            curso: "Ciencia da Computacao"
            }
        },
        {$project:{
            "aluno.nome": 1,
            curso: 1,
            _id: 0
        }}
    ]) */

    /*   db.compras.aggregate([
          {$match:{
              categoria: "Programacao"
          }},
          {$project: {
              "aluno.nome": 1,
              categoria: 1,
              _id:0
          }}
      ]) */

    /*  db.compras.aggregate([
         {$match:{
             categoria: "Programacao"
         }},
         {$project: {
             "aluno.nome": 1,
             categoria: 1,
             _id:0
         }}
     ]) */

    /* db.compras.aggregate([
        {$match:{
            preco: {$gt:200}
        }},
        {$project: {
            livro: 1,
            preco: 1,
            _id:0
        }}
    ]) */

    /*     db.compras.aggregate([
        {$match:{
            preco: {$lt:250, $gt:150}
        }},
        {$project: {
            livro: 1,
            preco: 1,
            _id:0
        }}
    ]) */

    /*   
       db.compras.aggregate([
       {$match:{
           formaPagamento: "PIX"
       }},
       
   ]) */


    /*  db.compras.aggregate([
     {$match:{
         status: "Entregue"
     }},
     {$project:{
         status: 1,
         aluno:1,
         "livro.titulo":1,
         _id:0
     }

     }
     
 ]) */
    /*  db.compras.aggregate([
     {$match:{
         status: "Pendente"
     }},
     {$project:{
         status: 1,
         aluno:1,
         "livro.titulo":1,
         _id:0
     }

     } */

    /*  db.compras.aggregate([{
         
         $sort: { preco: -1 }
     },
      { $limit: 10 },
      {$project:{
         "livro.titulo": 1,
         preco:1,
         _id:0
      }}
 ]) */

    /*   db.compras.aggregate([
        {$match: {
          "aluno.nome": {$regex: "^R"}
        }}  
      
  ]) */


    /* 
        db.compras.aggregate([
          {$match: {
            "livro.editora": "Pearson"
          }},
          {$project:{
            "livro.editora": 1,
            "livro.titulo":1,
            _id: 0
          }}  
        
    ]) */

    /* 
        db.compras.aggregate([
          {$match: {
            "livro.editora": "Pearson"
          }},
          {$project:{
            "livro.editora": 1,
            "livro.titulo":1,
            _id: 0
          }}  */


    /* db.compras.aggregate([
    {$match: {
      "livro.ano": {$gt: 2021}
    }},
    {$project:{
      "livro.editora": 1,
      "livro.titulo":1,
      "livro.ano":1,
      _id: 0
    }} */

    /*    db.compras.aggregate([
       {$match: {
         "livro.ano": {$gt: 2021}
       }},
       {$project:{
         "livro.editora": 1,
         "livro.titulo":1,
         "livro.ano":1,
         _id: 0
       }}  
     
 ]) */



    /*   db.compras.updateOne(
         {_id: ObjectId('6ae131b5a9a175584f6e0ffc')},
         {$set: {status: "Enviado"}}
      
  ) */


    /*   db.compras.updateOne(
         {status: "Pendente"},
         {$set: {status: "Pago"}}
      
  ) */


    /*  db.compras.updateOne(
        {"aluno.nome": "Ana Paula Silva"},
        {$set: {preco: 208.89 }}
     
 ) */


    /*     db.compras.updateOne(
           {"aluno.nome": "Ana Paula Silva"},
           {$set: {preco: 208.89 }}
        
    ) */


    /*    db.compras.updateOne(
          {"aluno.matricula": "2026004"},
          {$unset: {formaPgamento: ""}}
       
   ) */

    /* db.compras.insertOne(
        {
            aluno: {
                nome: "Rick Grimes",
                matricula: "2016001"
            },
            curso: "Desenvolvimento de Software Multiplataforma",
            livro: {
                titulo: "The Walking Dead",
                autor: "Robert Kirkman",
                editora: "Panini",
                ano: 2010
            },
            categoria: "Programacao",
            preco: 409.90,
            quantidade: 1,
            formaPagamento: "PIX",
            status: "Cancelado"
        }
    ) */

    /* db.compras.deleteOne(
    {status: "Cancelado"},
    
    ) */
/* 
    db.compras.deleteOne(
        {"aluno.matricula": '2026019'},
        

    )
 */

)
 
let restantesDeCompras = db.compras.countDocuments({});
 print("Restante de compras:" + restantesDeCompras)

