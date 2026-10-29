use("loja")

console.log(
    /* db.produtos.find(
            
            {preco: {$gt:  1000} },
            {},
            {}
      ) */

    /* db.produtos.find(
            
            {preco: {$lt:  500} },
            {},
            {}
      )
     */

    /* db.produtos.find(
            
            {preco: {$gte:  600} },
            {},
            {}
      ) */


    /* db.produtos.find(
            
            {preco: {$lte:  5} },
            {},
            {}
      ) */


    /* db.produtos.find(

        { preco: { $ne: 600 } },
        {},
        {}
    ) */
    /* db.produtos.find(

        { 
            $or: [
                {categoria: {$eq: "Informática"}},
                {categoria: {$eq: "Periféricos"}},
                
            ]
         },
        {},
        {}
    ) */
    
    
    /* db.produtos.find(

        { 
            $nor: [
                {categoria: {$eq: "Informática"}},
                {categoria: {$eq: "Monitores"}},
                
            ]
         },
        {},
        {}
     )*/
    
    
    /* db.produtos.find(

        { 
            $and: [
                {categoria: {$eq: "Informática"}},
                {preco: {$lt: 4000}},
                
            ]
         },
        {},
        {}
    ) */
    
    
   /*  
    db.produtos.find(

        { 
            $or: [
                {marca: {$eq: "Lenovo"}},
                {marca: {$eq: "Dell"}},
                
            ]
         },
        {},
        {}
    ) */
    
    
    /* db.produtos.find(

        { 
            $or: [
                {preco: {$lt: 500}},
                {quantidade: {$gt: 15}},
                
            ]
         },
        {},
        {}
    ) */
    
    
   /*  db.produtos.find(

        { 
            $nor: [
                {marca: "Lenovo" },
                {marca: "Dell" },
                
                
            ]
         },
        {},
        {}
    ) */
   
    
    
    
    /* db.produtos.find(

        { 
            $nor: [
                {preco: {$gt: 3000} },
                {quantidade: {$lt: 5} },
                
                
            ]
         },
        {},
        {}
    ) */
    
    
    db.produtos.find(

        { 
            preco: { $not: {$gt: 1000}} 
                
        },
        {},
        {}
    )



)