use('DB_MONGO')


/* comando e comparação usado em filtro

 $eq -> igual   ==
$gt -> maior que >
$gte -> maior ou igual >=
$lt -> menor que <
$lte -> menor ou igual <=
$in -> contem o valor ou está dentro 
$nin -> não contem
$ne -> diferente  
*/ 

console.log(
    //$eq ==
    /* db.catalogo.find(
        {preco: {$eq: 10.9}},
        {},
        {}
    ) */
   // $gt maior que >
    /* db.catalogo.find(
        {preco: {$gt:  10} },
        {},
        {}
    ) */
   // $gte maior ou igual >=
    /* db.catalogo.find(
        {ano_publicacao: {$gte:  1982} },
        {},
        {}
    ) */
   // $lt & $lte
    /* db.catalogo.find(
        {ano_publicacao: {$lte:  1986} },
        {ano_publicacao:1, _id: 0},
        {}
    ) */
    /* db.catalogo.find(
        {ano_publicacao: {$in: [1954, 1937]} },
        {ano_publicacao:1, _id: 0},
        {}
    ) */
    /* db.catalogo.find(
        {ano_publicacao: {$nin: [1954, 1937]} },
        {ano_publicacao:1, _id: 0},
        {}
    )    .count() */ // deixa o count se quiser que ele retorne a quantidade de itens que existe com esse parametro 
    
    //DIFERENTE...
    db.catalogo.find(
        {ano_publicacao: {$ne: 1954 } },
        {ano_publicacao:1, _id: 0},
        {}
    )
)
