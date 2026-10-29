use ("DB_MONGO")

/* OPERADORES LÓGICO
 $AND
 &OR
 $NOT
 $NOR == RETORNA TODOS OS DOCUMENTOS QUE
                                        NÃO CORRESPONDE A CLÁUSULAS */
    console.log(
     /* db.catalogo.find(
        {
            $and: [{preco: 10.9}, {editora: "HarperCollins"} ]
        },
        {},
        {}
    )  */
     
    /* 
    db.catalogo.find(
        {
            $or: [
                {preco: {$lt: 10.9}}, 
                {editora: "HarperCollins"} 
            ]
        },
        {},
        {}
    )  */
    
    // o nor sera aceito um array    
    /* db.catalogo.find(

        {
            $nor: [{preco: {$lt: 5.9}}]
        },
        {},
        {}
    ) */
    
    // not será para um item somente
    /* db.catalogo.find(

        {
            $not:  {preco: {$lt: 5.9}}
        },
        {},
        {}
    ) */









        
    )

