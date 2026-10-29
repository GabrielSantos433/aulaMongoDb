use('DB_MONGO');

//select
//ler documentos;

/*  console.log (

   db.catalogo.find({})
)   */

//update

/* console.log (
    db.catalogo.updateOne(
        {preco:59.9},
        {$set:{preco:10.9}},
        {}
    )
) */

/* console.log(
    db.catalogo.updateMany(
        {},
        {$set:{preco:10.9}},
        {}
    )
) */
// remove a propriedade
/* console.log(
    db.catalogo.updateOne(
        { _id:ObjectId("6a975c5989fbc4869f247410")},
        {$unset:{quantidade_vendida:""}},
        {}
    )
) */
// acrescentar caso nao tenha essa coluna ou propriedade
/* console.log(
    db.catalogo.updateOne(
        { _id:ObjectId("6a975c5989fbc4869f247410")},
        {$set:{quantidade_vendida: 2500}},
        {upset: true}
    )
) */
/* console.log(
    db.catalogo.updateMany(
        { },
        {$set:{pagina: '127'}},
        {upset: false}
    )
) */

console.log(
    /*   db.catalogo.updateOne(
          { _id:ObjectId("6a975c5989fbc4869f247410")},
          {$inc:{quantidade_vendida: 500}},
          {}
      ) */
    // renomeando propriedade
    db.catalogo.updateMany(
        {},
        { $rename: { quantidade_vendida: "Qtd_Vendas" } },
        {}
    )
)
