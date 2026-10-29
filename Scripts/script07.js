use('agregacao');


/* db.sales.insertMany([
    {"_id":1, "item": "ABC", "price":Decimal128("10"),
        "quantity": Int32("2"), "date": ISODate("2014-03-14T08:00:00Z")
    },
    
    {"_id":2, "item": "JKL", "price":Decimal128("20"),
        "quantity": Int32("1"), "date": ISODate("2014-03-14T09:00:00Z")
    },
    
    {"_id":3, "item": "XYL", "price":Decimal128("05"),
        "quantity": Int32("10"), "date": ISODate("2014-03-14T09:00:00Z")
    },
    
    {"_id":4, "item": "XYZ", "price":Decimal128("05"),
        "quantity": Int32("20"), "date": ISODate("2014-03-04T21:00:00Z")
    },
    
    {"_id":5, "item": "ABC", "price":Decimal128("10"),
        "quantity": Int32("10"), "date": ISODate("2014-03-04T21:30:00Z")
    },
    
    {"_id":6, "item": "DEF", "price":Decimal128("40"),
        "quantity": Int32("60"), "date": ISODate("2016-03-04T21:00:00Z")
    },
    
]) */

// FILTRO

/* console.log (
        db.sales.aggregate ([
            {
                $match: {"item" : "ABC"}
            },
            {$project: {
                "item": 1,
                "quantity": 1,
                "price": 1,
                total: {$multiply: ["$price", "$quantity"]}
            }}
        ])
) */
console.log(
    /* db.sales.aggregate ([
       
        {$project: {
            "item": 1,
            "quantity": 1,
            "price": 1,
            total: {$multiply: ["$price", "$quantity"]}
        }},
         {
            $match: {"item" : "ABC"}
        },
        {$sort: {"_id": -1}},

        { $limit : 1} // pra limitar quantos vai ser mostrado, no exemplo estamos mostrando um item ABC
    ]) */


    /*  db.sales.aggregate([
        {$sort : {"quantity": 1}},
        {$project:{"item":1, "quantity":1, "price":1}}
        
     ]) */


    /* db.sales.aggregate([
        { $sort: { "quantity": -1 } },
        { $project: { "item": 1, "quantity": 1, "price": 1 } },
        {
            $group: {    // group agrupa oque voce precisar
                _id: "price",
                precoTotal: { $sum: "$price" }
            }
        }

    ]) */

    /* db.pedidos.insertMany([
           {
               cliente: "Ana", produto: "Notebook", categoria: "Eletrônicos", valor: 3500, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-01-01")
           },
           {
               cliente: "Carlos", produto: "Mouse", categoria: "Eletrônicos", valor: 120, quantidade: 2, cidade:
                   "Campinas", data: ISODate("2024-01-02")
           },
           {
               cliente: "Pedro", produto: "Mesa", categoria: "Móveis", valor: 900, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-03")
           },
           {
               cliente: "Maria", produto: "Cadeira", categoria: "Móveis", valor: 700, quantidade: 2, cidade: "São Paulo", data: ISODate("2024-01-04") },
   {
                   cliente: "Ana", produto: "Teclado", categoria: "Eletrônicos", valor: 200, quantidade: 1, cidade:
                       "São Paulo", data: ISODate("2024-01-05")
               },
   {
               cliente: "Carlos", produto: "Monitor", categoria: "Eletrônicos", valor: 950, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-06")
           },
           {
               cliente: "Pedro", produto: "Sofá", categoria: "Móveis", valor: 2000, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-07")
           },
           {
               cliente: "Maria", produto: "Celular", categoria: "Eletrônicos", valor: 2500, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-01-08")
           },
           {
               cliente: "Lucas", produto: "Tablet", categoria: "Eletrônicos", valor: 1500, quantidade: 1, cidade:
                   "Rio de Janeiro", data: ISODate("2024-01-09")
           },
           {
               cliente: "João", produto: "Impressora", categoria: "Eletrônicos", valor: 800, quantidade: 1,
               cidade: "Belo Horizonte", data: ISODate("2024-01-10")
           },
           {
               cliente: "Ana", produto: "Notebook", categoria: "Eletrônicos", valor: 4000, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-01-11")
           },
           {
               cliente: "Carlos", produto: "Mouse", categoria: "Eletrônicos", valor: 150, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-12")
           },
           {
               cliente: "Pedro", produto: "Mesa", categoria: "Móveis", valor: 1100, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-13")
           },
           {
               cliente: "Maria", produto: "Cadeira", categoria: "Móveis", valor: 650, quantidade: 1, cidade: "São Paulo", data: ISODate("2024-01-14") },
   {
                   cliente: "Lucas", produto: "Celular", categoria: "Eletrônicos", valor: 2800, quantidade: 1, cidade:
                       "Rio de Janeiro", data: ISODate("2024-01-15")
               },
   {
               cliente: "João", produto: "Monitor", categoria: "Eletrônicos", valor: 1000, quantidade: 1, cidade:
                   "Belo Horizonte", data: ISODate("2024-01-16")
           },
           {
               cliente: "Ana", produto: "Tablet", categoria: "Eletrônicos", valor: 1800, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-01-17")
           },
           {
               cliente: "Carlos", produto: "Sofá", categoria: "Móveis", valor: 2200, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-18")
           },
           {
               cliente: "Pedro", produto: "Notebook", categoria: "Eletrônicos", valor: 3700, quantidade: 1,
               cidade: "Campinas", data: ISODate("2024-01-19")
           },
           {
               cliente: "Maria", produto: "Mesa", categoria: "Móveis", valor: 1300, quantidade: 1, cidade: "São Paulo", data: ISODate("2024-01-20") },
   {
                   cliente: "Lucas", produto: "Mouse", categoria: "Eletrônicos", valor: 100, quantidade: 3, cidade:
                       "Rio de Janeiro", data: ISODate("2024-01-21")
               },
   {
               cliente: "João", produto: "Teclado", categoria: "Eletrônicos", valor: 220, quantidade: 1, cidade:
                   "Belo Horizonte", data: ISODate("2024-01-22")
           },
           {
               cliente: "Ana", produto: "Cadeira", categoria: "Móveis", valor: 800, quantidade: 1, cidade: "São Paulo", data: ISODate("2024-01-23") },
   {
                   cliente: "Carlos", produto: "Celular", categoria: "Eletrônicos", valor: 2600, quantidade: 1, cidade:
                       "Campinas", data: ISODate("2024-01-24")
               },
   {
               cliente: "Pedro", produto: "Monitor", categoria: "Eletrônicos", valor: 900, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-25")
           },
           {
               cliente: "Maria", produto: "Notebook", categoria: "Eletrônicos", valor: 3900, quantidade: 1,
               cidade: "São Paulo", data: ISODate("2024-01-26")
           },
           {
               cliente: "Lucas", produto: "Mesa", categoria: "Móveis", valor: 1000, quantidade: 1, cidade: "Rio de Janeiro", data: ISODate("2024-01-27") },
   {
                   cliente: "João", produto: "Sofá", categoria: "Móveis", valor: 2100, quantidade: 1, cidade: "Belo Horizonte", data: ISODate("2024-01-28") },
   {
                       cliente: "Ana", produto: "Mouse", categoria: "Eletrônicos", valor: 130, quantidade: 2, cidade:
                           "São Paulo", data: ISODate("2024-01-29")
                   },
   {
               cliente: "Carlos", produto: "Teclado", categoria: "Eletrônicos", valor: 250, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-01-30")
           },
           {
               cliente: "Pedro", produto: "Celular", categoria: "Eletrônicos", valor: 2700, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-02-01")
           },
           {
               cliente: "Maria", produto: "Tablet", categoria: "Eletrônicos", valor: 1600, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-02-02")
           },
           {
               cliente: "Lucas", produto: "Notebook", categoria: "Eletrônicos", valor: 4200, quantidade: 1,
               cidade: "Rio de Janeiro", data: ISODate("2024-02-03")
           },
           {
               cliente: "João", produto: "Mesa", categoria: "Móveis", valor: 950, quantidade: 1, cidade: "Belo Horizonte", data: ISODate("2024-02-04") },
   {
                   cliente: "Ana", produto: "Sofá", categoria: "Móveis", valor: 2300, quantidade: 1, cidade: "SãoPaulo", data: ISODate("2024-02-05") },
   {
                       cliente: "Carlos", produto: "Notebook", categoria: "Eletrônicos", valor: 3600, quantidade: 1,
                       cidade: "Campinas", data: ISODate("2024-02-06")
                   },
   {
               cliente: "Pedro", produto: "Mouse", categoria: "Eletrônicos", valor: 110, quantidade: 2, cidade:
                   "Campinas", data: ISODate("2024-02-07")
           },
           {
               cliente: "Maria", produto: "Monitor", categoria: "Eletrônicos", valor: 980, quantidade: 1, cidade:
                   "São Paulo", data: ISODate("2024-02-08")
           },
           {
               cliente: "Lucas", produto: "Cadeira", categoria: "Móveis", valor: 750, quantidade: 1, cidade: "Rio de Janeiro", data: ISODate("2024-02-09") },
   {
                   cliente: "João", produto: "Celular", categoria: "Eletrônicos", valor: 2400, quantidade: 1, cidade:
                       "Belo Horizonte", data: ISODate("2024-02-10")
               },
   {
               cliente: "Ana", produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1, cidade: "São Paulo", data: ISODate("2024-02-11") },
   {
                   cliente: "Carlos", produto: "Cadeira", categoria: "Móveis", valor: 680, quantidade: 1, cidade:
                       "Campinas", data: ISODate("2024-02-12")
               },
   {
               cliente: "Pedro", produto: "Tablet", categoria: "Eletrônicos", valor: 1700, quantidade: 1, cidade:
                   "Campinas", data: ISODate("2024-02-13")
           },
           {
               cliente: "Maria", produto: "Mouse", categoria: "Eletrônicos", valor: 140, quantidade: 2, cidade:
                   "São Paulo", data: ISODate("2024-02-14")
           },
           {
               cliente: "Lucas", produto: "Teclado", categoria: "Eletrônicos", valor: 210, quantidade: 1, cidade:
                   "Rio de Janeiro", data: ISODate("2024-02-15")
           },
           {
               cliente: "João", produto: "Notebook", categoria: "Eletrônicos", valor: 3800, quantidade: 1, cidade:
                   "Belo Horizonte", data: ISODate("2024-02-16")
           }
       ])*/

    /* db.pedidos.aggregate ([
        {
            $count: "totalDocumentos"
        }
        
    ]
 
    ) */

    /*  db.pedidos.aggregate([
         {
             $match: {
                 valor: {$gt: 2000}
             }
         }
     ]) */


    /* db.pedidos.aggregate([
        {
            $project: {
                cliente: 1,
                valor: 1,
                produto: 1,
                _id: 0
                
            }
        }
    ]) */


    /* db.pedidos.aggregate([
        {
            $sort: {
                valor: -1
                
            }
        }
    ]) */


   /*  db.pedidos.aggregate([
        {
            $sort: { valor: -1 }
        },
        { $limit: 5 }
    ])
 */


    /* db.pedidos.aggregate([
        {
            $group: { 
            _id: "$categoria",
            quantidade: {$sum: 1}
            
            }
        },
    
    ]) */



    db.pedidos.aggregate([
        {
            $group: { 
            _id: "$cliente",
            totalGasto: {$sum: "$valor"}
            
            }
        },
    
    ])

    







)

//OPERADORES

/*   $avg = Media
  $sum = somar
  $max = valor Maior
  $min = valor menor
  $count = conta elementos
  $push = criar array com valores
  $addToset = Array sem repetição */

