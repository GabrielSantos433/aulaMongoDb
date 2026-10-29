

/* console.log (

    db.catalogo.insertMany([
    { Livro: "Harry Potter" },
    { Livro: "The Walking Dead" },
    { Livro: "A culpa é das estrelas" },
    { Livro: "O poder do óbvio" },
    { Livro: "O poder do jejum" }
    ])
) */


   console.log(
    db.aluno.insertOne({
        nome: "jorge",
        idade: 30,
        email: "j@email.com",
        ativo: true
    }))