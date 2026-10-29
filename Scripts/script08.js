// schema validation

use('schema');


  /* db.createCollection("valida",
    {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                additionalProperties:false,
                required: ["_id", "nome", "idade", "email", "sexo"

                ],
                properties: {
                    _id: {
                        bsonType: "objectId"
                    },
                    nome: {
                        bsonType: "string",
                        description: "Somente letras por obséquio :)"
                    },
                    idade: {
                        bsonType: "int",
                        minimum:0,
                        maximum:120,
                        description: "Somente Numeros por obséquio :)"
                    },
                    email: {
                        bsonType: "string",
                        pattern: "^.+@.+\.+$",
                        description: "Tipo de Email invalido amigo :)"
                    },
                    sexo: {
                        bsonType: "string",
                        enum: ["M", "F"],
                        description: "Formatação invalida cidadão :)"


                    }
                }
            }
        }
    }
)  */

  console.log(
    db.valida.insertOne(
        {
            nome: "emerson",
            idade: 87,
            email: "Rick@Grimes.com",
            sexo: "M",
            
        }
    )
)  

