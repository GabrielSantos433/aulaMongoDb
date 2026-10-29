// direcionando o banco

use("DB_MONGO");

// INSERIR DOCUMENTO  (UM DOCUMENTO É UM REGISTRO)
/* console.log(
    //primeira forma:
     db.Disciplina.insertOne({
        disc: 'Banco de dados Relacional',
        ativo: true
    })  */

    //segunda forma:
   /*  db.Disciplina.insertMany(
        [
            {disc: "JavaScript EcmaScript", ativo: false, cargaH: 80},
            {disc: "X HTML/ CSS", ativo: true, cargaH: 80},
            {disc: "REACT / NEXT JS", ativo: true, cargaH: 80}
        ]
    ) */
   
//)
/* console.log(
    // documentos que tem na Disciplina
    // exemplo que exibe todos os documentos:
    
    // exemplo de filtro{chave : valor}
    db.Disciplina.find({ ativo: true }).pretty()
) */
 console.log(
    db.Disciplina.find({disc: 'Banco de dados Relacional'}).count()
    //db.Disciplina.count({ ativo: true })
    //db.Disciplina.countDocuments({ ativo: true })
) 
/* console.log(
    db.Disciplina.find({}).pretty()
    db.Disciplina.findOne({ativo:true})
) */
/* console.log(
    //1º forma:
    // db.Disciplina.deleteOne({})
    
    //2º forma:
    //db.Disciplina.deleteOne({_id: ObjectId('6a8e24e9329eb694f55fa941')})

    //3º forma:
    //db.Disciplina.deleteMany({})



) */

// entrando com UPDATE
/* console.log (
db.Disciplina.updateOne(
    {_id: ObjectId('6a8e3942329eb694f55fa944')},
    { $set: {ativo: false}}
    )
) */