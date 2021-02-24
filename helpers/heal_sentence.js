const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
const ret ={}
/*
SELECT * FROM  heal_sentence
*/

let sql  =  "SELECT hs.heal_sentence from heal_sentence hs order by random() limit 1;"

await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data)
                if(data.length >0){ 
                ret.status=200
                ret.message="Success"
                ret.data = data


                }

                })
                .catch(error => {
                // error;
                ret.status =400
                ret.message="Error"
                throw error  
                });
                return ret

}

export default heal_sentence