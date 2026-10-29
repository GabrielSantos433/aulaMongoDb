use ("prova")

console.log(
    //db.restaurants.find({},{},{}).count()
  /*   db.restaurants.find( { $and: [{cuisine: "American ", borough: "Brooklyn"}]},{}
                
    ) */
    /*  db.restaurants.updateOne(
        { restaurant_id: ("40364305")},
        {$set:{borough: "Queens"}},
        {}
    ), 

    db.restaurants.find({restaurant_id: ("40364305")}) */

    //db.restaurants.find({cuisine: "Italian"})
    /* db.restaurants.deleteMany({cuisine: "Brazilian"})  */

  /*    db.restaurants.find(
    {},
    {
        name: 1,
        "address.zipcode": 1,
        _id: 0
    } 
) */

/* db.restaurants.deleteOne({name: "Wendy'S"}) */
   /*  db.restaurants.find({"grades.score": { $gt: 30 }},
                        {
                            name: 1,
                            cuisine:1,
                            borough:1,
                            "grades.score": 1,
                             _id: 0
                            

                        }   
    ) */
  /*  db.restaurants.find(

        { 
            cuisine: { $not:  {$eq: "American"}} 
                
        },
        {},
        {}
    ) */
   /* db.restaurants.updateOne(
        { restaurant_id: ("40363098")},
        {$set:{name: "Dunkin Donuts"}},
        {}
    ),  */
   // db.restaurants.find({restaurant_id: ("40363098")})
/* 
   db.restaurants.updateOne({restaurant_id: ("40364335")},
                             {$set: {"addres.zipcode": 10001}}) */
    //db.restaurants.find({restaurant_id: ("40364335")})

    /* db.restaurants.find( { $and: [{cuisine: "American ", borough: "Brooklyn"}]},{}
                
    ) */ 


    /*    db.restaurants.find( { $or: [
        {borough: "Brooklyn"}, 
        {borough: "Queens"}
    
      ]},{}
                
    ) */
/* 
    db.restaurants.find({
    borough: "Manhattan",
    "grades.score": { $gt: 20 }
}) */

    db.restaurants.find({
    $and: [
        { borough: { $ne: "Brooklyn" } },
        { borough: { $ne: "Queens" } }
    ]
})
)